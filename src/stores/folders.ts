import { StateI, ActionT, FolderI, InputsI } from '@interfaces/folders';
import { supabase } from '@services/supabase';
import notify from '@utils/notification';
import { defineStore } from 'pinia';
import { remove } from 'lodash';

export const useFolderStore = defineStore('folderStore', {
  state: () => <StateI>({
    lifecycles: {
      onMounted: false,
    },
    current: null,
    data: null
  }),
  actions: {


    //All folders current user
    getFoldersOfUser(user_id: string, action?: ActionT, isMounted = false) {
      if (!this.lifecycles.onMounted || isMounted) {
        this.lifecycles.onMounted = true;

        supabase.from('folders')
          .select('*')
          .eq('user_id', user_id)
          .then(({ data, error }) => {
            if (error) return notify.error(error);

            action && action(data as unknown as FolderI[])
            this.data = data as unknown as FolderI[];
          })
      }
    },

    createFolder(newFolder: InputsI['NewI'], action?: ActionT) {
      supabase.from('folders')
        .insert([newFolder])
        .select()
        .then(({ data, error }) => {
          if (error) return notify.error(error);

          action && action(data as unknown as FolderI[])
          this.getFoldersOfUser(newFolder.user_id, () => { }, true)
        })
    },

    updateFolder(user_id: string, folder: InputsI['UpdateI'], action?: ActionT) {
      supabase
        .from('folders')
        .update(folder)
        .eq('user_id', user_id)
        .select()
        .then(({ data, error }) => {
          if (error) return notify.error(error);

          action && action(data as unknown as FolderI[])
          this.getFoldersOfUser(user_id, () => { }, true)
        })
    },

    deleteFolder(id: number, action?: ActionT) {
      supabase
        .from('folders')
        .delete()
        .eq('id', id)
        .select()
        .then(({ data, error }) => {
          if (error) return notify.error(error);

          action && action(data as unknown as FolderI[])
          this.getFoldersOfUser(data[0].user_id, () => { }, true)
        })
    },


    addPlaceFolder(folder: FolderI) {
      if (this.data?.length) return this.data?.push(folder);
      return this.data = [folder];
    },
    removePlaceFolder(id: number) {
      if (this.data?.length) remove(this.data, (folder) => folder.id == id);
    },
    changeEditePlaceFolder(id: number) {
      if (this.data) {
        const file = this.data.find((file) => file.id == id)
        if (file) file.edite = true
      }
    },

    // reset default values
    reset() {
      this.lifecycles.onMounted = false;
      this.current = null;
      this.data = null;
    },
  },
});

