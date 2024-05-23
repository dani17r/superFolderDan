<template>
  <q-page class="row items-center justify-evenly">
    <ButtonBack class="tw-fixed tw-top-[85px] tw-right-3" />
    <ContentFiles>
      <div class="text-center">
        <q-icon
          name="note_add"
          :size="'80px'"
          color="primary"
          class="tw-opacity-50 tw-cursor-pointer"
          @click="searchFile()"
        />
        <p class="text-accent tw-cursor-pointer" @click="searchFile()">
          New File
        </p>
        <input
          type="file"
          id="file-input"
          name="file"
          @change="uploadFile"
          style="display: none"
          accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,text/plain,.pdf,.jpg,.jpeg,.png"
          required
        />
      </div>

      <template v-for="files in store.files.data" :key="files.id">
        <PreviewFile v-bind="files" @delete-files="deleteFile" />
      </template>
    </ContentFiles>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue';
import superComposable from '@composables/superComposable';
import ContentFiles from '@layouts/ContentFiles.vue';
import ButtonBack from '@components/ButtonBack.vue';
import PreviewFile from '@components/previewFile.vue';

const { store, route } = superComposable();
const searchFile = () => {
  document.getElementById('file-input').click();
};

const uploadFile = (e) => {
  const file = e.target.files[0];

  store.files.uploadFile({
    user_id: store.auth.current.id,
    folder_id: route.params?.id || null,
    name: file.name,
    size: file.size,
    file,
  });
};

const deleteFile = (id) => {
  store.files.deleteFile(id);
};

onMounted(() => {
  store.files.getFilesOfUser(store.auth.current.id, Number(route.params.id));
});
</script>
