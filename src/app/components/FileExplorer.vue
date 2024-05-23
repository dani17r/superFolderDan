<template>
  <ContentFiles>
    <div class="text-center">
      <q-icon name="create_new_folder" :size="'80px'" color="primary" class="tw-opacity-50 tw-cursor-pointer"
        @click="newFolder()" />
      <p class="text-accent tw-cursor-pointer" @click="newFolder()">New folder</p>
    </div>

    <template v-for="folder in store.folders.data" :key="folder.id">
      <FolderContent v-bind="folder" @blur-input="isInputEmpty" @delete-folder="deleteFolder"
        @edite-folder="editeFolder" @open-folder="openFolder" />
    </template>
  </ContentFiles>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import FolderContent from '@components/FolderContent.vue';
  import superComposable from '@composables/superComposable';
  import ContentFiles from '@layouts/ContentFiles.vue';

  const { store, router } = superComposable()

  const idTemp = ref(0);
  const modeUpdate = ref(false);

  const folderDefault = {
    edite: true,
    type: 'folder',
    color: '#F0B82B',
    size: '80',
    name: '',
    user_id: '',
    folder_id: '',
  }

  const newFolder = () => {
    if (store.folders.data) idTemp.value = store.folders.data.length + 100;
    else idTemp.value = 100;

    store.folders.addPlaceFolder({ ...folderDefault, id: idTemp.value });

    setTimeout(() => {
      document.getElementById(`folder-${idTemp.value}`)?.focus();
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
        store.folders.removePlaceFolder(idTemp.value)
      }
      else {
        if (modeUpdate.value) {
          store.folders.editeFolder(idTemp.value);
        }
        else {
          el.target._value = el.target.value;

          store.folders.createFolder({
            ...folderDefault,
            edite: false,
            name: el.target._value,
            user_id: store.auth.current.id,
          });
        }
      }
    }, 60)
  }

  const deleteFolder = (id) => {
    store.folders.deleteFolder(id)
  }

  const editeFolder = (id) => {
    modeUpdate.value = true;
    idTemp.value = id;
    store.folders.changeEditePlaceFolder(id);
    document.getElementById(`folder-${idTemp.value}`)?.focus();
  }

  const openFolder = (id) => {
    store.files.reset();
    router.push({ name: 'folders', params: { id } })
  }

  onMounted(() => {
    store.folders.getFoldersOfUser(store.auth.current.id)
  })
</script>