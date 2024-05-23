<template>
  <div class="border-accent tw-m-4 tw-w-[100%] tw-min-h-[80vh]">
    <q-scroll-area class="tw-h-[55vw] tw-max-w-[100vw]">

      <div class="tw-grid tw-grid-cols-4 tw-gap-4 tw-my-4">
        <div class="text-center">
          <q-icon name="create_new_folder" :size="'80px'" color="primary" class="tw-opacity-50 tw-cursor-pointer"
            @click="newFolder()" />
          <p class="text-accent tw-cursor-pointer" @click="newFolder()">New folder</p>
        </div>

        <template v-for="(folder) in folders" :key="folder.id">
          <FolderContent v-bind="folder" @blur="isInputEmpty" />
        </template>
      </div>

    </q-scroll-area>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';
  import { remove } from 'lodash';
  import FolderContent from './FolderContent.vue';

  // const estructure = [{
  //   type: 'view',
  //   files: [
  //     {
  //       name: '',
  //       url: '',
  //       size: '',
  //       fixed: '',
  //       user_id: '',
  //       folder_id: '',
  //     }
  //   ],
  //   folders: folders
  // }]

  const folders = reactive([
    {
      id: '1',
      type: 'folder',
      color: '#F0B82B',
      size: 80,
      name: 'Documentos',
      user_id: '',
      folder_id: '',
      fixed: '',
    },
    {
      id: '2',
      type: 'folder',
      color: '#F0B82B',
      size: 80,
      name: 'Fotos',
      user_id: '',
      folder_id: '',
      fixed: '',
    },
    {
      id: '3',
      type: 'folder',
      color: '#F0B82B',
      size: 80,
      name: 'Imagenes',
      user_id: '',
      folder_id: '',
      fixed: '',
    },
  ]);

  const newFolder = () => {
    const newId = crypto.randomUUID();

    folders.push({
      id: newId,
      type: 'folder',
      color: '#F0B82B',
      size: 80,
      name: '',
      user_id: '',
      folder_id: '',
    });

    setTimeout(() => {
      document.getElementById(`folder-${newId}`)?.focus();
    }, 60)
  }

  const isInputEmpty = (el) => {
    setTimeout(() => {

      /* En el caso que el valor original tenga algo y el texto actual no,
        al hacer blur se restaura el valor al original */
      if (el.target.value == '' && el.target._value != '') {
        el.target.value = el.target._value;
      }

      /* En caso de que el valor actual y el valor original esten 
        vacios, esta recien creado y se puede borrar al hacer blur */
      else if (el.target._value == '' && el.target.value == '') {
        remove(folders, (folder) => {
          return folder.id == el.target.id.match(/folder-(.*)/)[1];
        });
      }
    }, 60)
  }
</script>

<style>
  .border-accent {
    border: 1px solid var(--q-secondary);
  }
</style>