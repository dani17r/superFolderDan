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
        .order('name', { ascending: true })
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
          this.getFilesOfUser(newFile.user_id, Number(newFile.folder_id));
        });
    },

    updateFile(file: InputsI['UpdateI'], action?: ActionT) {
      supabase
        .from('files')
        .update(file)
        .eq('id', file.id)
        .select()
        .then(({ data, error }) => {
          if (error) return notify.error(error);

          action && action(data as unknown as FileI[]);
          this.getFilesOfUser(String(file.user_id), Number(file.folder_id));
        });
    },

    deleteFile(id: number, action?: ActionT) {
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

    uploadFile(payload: InputsI['UploadI'], action?: ActionT) {
      supabase.storage
        .from(nameStorage)
        .upload(`${payload.user_id}/files/${payload.name}`, payload.file)
        .then(({ data, error }) => {
          if (error) return notify.error(error);

          this.createFile(
            {
              folder_id: Number(payload.folder_id),
              amount_pages: Number(payload.amount_pages),
              url: `${nameStorage}/${data.path}`,
              user_id: payload.user_id,
              id_doc: payload.id_doc,
              owner: payload.owner,
              size: payload.size,
              name: payload.name,
              type: payload.type,
              fixed: false,
            },
            () => action && action(null),
          );
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
