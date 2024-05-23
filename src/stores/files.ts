import { StateI, ActionT, FileI, InputsI } from '@interfaces/files';
import { supabase } from '@services/supabase';
import notify from '@utils/notification';
import { defineStore } from 'pinia';

const nameStorage = import.meta.env.VITE_NAME_STORAGE;

export const useFileStore = defineStore('fileStore', {
  state: () =>
    <StateI>{
      lifecycles: {
        onMounted: false,
      },
      current: null,
      data: null,
    },
  actions: {
    //All files current user
    getFilesOfUser(user_id: string, folder_id: number, action?: ActionT) {
      supabase
        .from('files')
        .select('*')
        .eq('user_id', user_id)
        .eq('folder_id', folder_id)
        .then(({ data, error }) => {
          if (error) return notify.error(error);

          action && action(data as unknown as FileI[]);
          this.data = data as unknown as FileI[];
        });
    },

    createFile(newFile: InputsI['NewI'], action?: ActionT) {
      supabase
        .from('files')
        .insert([newFile])
        .select()
        .then(({ data, error }) => {
          if (error) return notify.error(error);

          action && action(data as unknown as FileI[]);
          this.getFilesOfUser(newFile.user_id, newFile.folder_id);
        });
    },

    updateFile(
      user_id: string,
      folder_id: number,
      file: InputsI['UpdateI'],
      action?: ActionT,
    ) {
      supabase
        .from('files')
        .update(file)
        .eq('user_id', user_id)
        .select()
        .then(({ data, error }) => {
          if (error) return notify.error(error);

          action && action(data as unknown as FileI[]);
          this.getFilesOfUser(user_id, folder_id);
        });
    },

    deleteFile(id: number, action?: ActionT) {
      console.log('aaa');
      supabase
        .from('files')
        .delete()
        .eq('id', id)
        .select()
        .then(({ data, error }) => {
          if (error) return notify.error(error);

          action && action(data as unknown as FileI[]);
          this.getFilesOfUser(data[0].user_id, data[0].folder_id);

          const fileUrl = data[0].url.replace(nameStorage + '/', '');
          supabase.storage.from(nameStorage).remove([fileUrl]);
        });
    },

    uploadFile(payload: InputsI['UploadI']) {
      supabase.storage
        .from(nameStorage)
        .upload(`${payload.user_id}/files/${payload.name}`, payload.file)
        .then(({ data, error }) => {
          if (error) return notify.error(error);

          this.createFile({
            url: `${nameStorage}/${data.path}`,
            folder_id: payload.folder_id,
            user_id: payload.user_id,
            name: payload.name,
            size: payload.size,
            fixed: false,
            type: 'file',
          });
        });
    },

    getMedia(url: string) {
      return `https://eiaexdkivgwuykmtbgzz.supabase.co/storage/v1/object/public/${url}`;
    },

    // reset default values
    reset() {
      this.lifecycles.onMounted = false;
      this.current = null;
      this.data = null;
    },
  },
});
