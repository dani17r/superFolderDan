<template>
  <q-page class="row items-center justify-evenly">
    <ButtonBack class="tw-fixed tw-top-[85px] tw-right-3 tw-z-50" />
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
          @change="OpenUploadFile"
          style="display: none"
          accept=".doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,text/plain,.pdf,.jpg,.jpeg,.png"
          required
        />
      </div>

      <template v-for="files in store.files.data" :key="files.id">
        <PreviewFile
          v-bind="files"
          @delete-file="deleteFile"
          @edite-file="openEditeFile"
          @open-file="openViewFile"
          @fixed-file="fixedFile"
        />
      </template>
    </ContentFiles>

    <MainDialog
      v-model="dialogs.newUploadFile.status"
      title="New File"
      persistent
    >
      <NewUploadFiles
        :form-default="formUploadFile"
        @success="dialogs.newUploadFile.toggle()"
      />
    </MainDialog>

    <MainDialog v-model="dialogs.editUploadFile.status" title="Update File">
      <EditeUploadFiles
        :form-default="formEditeUploadFile"
        @success="dialogs.editUploadFile.toggle()"
      />
    </MainDialog>

    <MainDialog
      v-model="dialogs.viewUploadFile.status"
      title="View File"
      class-card="tw-min-w-[90vw] tw-min-h-[90vh] md:tw-min-w-[42vw] md:tw-min-h-[90vh]"
    >
      <PreviewUploadFiles
        :form-default="formEditeUploadFile"
        @success="dialogs.viewUploadFile.toggle()"
      />
    </MainDialog>
  </q-page>
</template>

<script setup>
import {
  clearFileInput,
  getFileNameWithoutExtension,
  getFileExtension,
} from '@utils/files';
import superComposable from '@composables/superComposable';
import { onMounted, reactive } from 'vue';

import PreviewUploadFiles from '@components/views/previewUploadFiles.vue';
import EditeUploadFiles from '@components/forms/EditeUploadFiles.vue';
import NewUploadFiles from '@components/forms/NewUploadFiles.vue';
import MainDialog from '@components/dialogs/MainDialog.vue';
import PreviewFile from '@components/previewFile.vue';
import ContentFiles from '@layouts/ContentFiles.vue';
import ButtonBack from '@components/ButtonBack.vue';

const { store, route } = superComposable();

const dialogs = reactive({
  newUploadFile: {
    status: false,
    toggle: () => {
      dialogs.newUploadFile.status = !dialogs.newUploadFile.status;
    },
  },
  editUploadFile: {
    status: false,
    toggle: () => {
      dialogs.editUploadFile.status = !dialogs.editUploadFile.status;
    },
  },
  viewUploadFile: {
    status: false,
    toggle: () => {
      dialogs.viewUploadFile.status = !dialogs.viewUploadFile.status;
    },
  },
});

const formEditeUploadFile = reactive({});
const formUploadFile = reactive({
  amount_pages: 0,
  owner: '',
  id_doc: '',
  preview: '',
  name: '',
  size: '',
  file: File,
});

const insertDataFileInFormUploadFile = (id) => {
  let file = store.files.data.find((file) => file.id == id);
  if (file) {
    for (const field in file) {
      formEditeUploadFile[field] = file[field];
    }
  }
};

const openEditeFile = (id) => {
  insertDataFileInFormUploadFile(id);
  dialogs.editUploadFile.toggle();
};

const openViewFile = (id) => {
  insertDataFileInFormUploadFile(id);
  dialogs.viewUploadFile.toggle();
};

const OpenUploadFile = (e) => {
  const file = e.target.files[0];

  if (file) {
    formUploadFile.owner = store.auth.current.user_metadata.fullname;
    formUploadFile.name = getFileNameWithoutExtension(file.name);
    formUploadFile.preview = URL.createObjectURL(file);
    formUploadFile.type = getFileExtension(file.name);
    formUploadFile.id_doc = crypto.randomUUID();
    formUploadFile.size = file.size;
    formUploadFile.file = file;

    dialogs.newUploadFile.toggle();

    //Limpiar el input para poder volver a seleccionar el mismo archivo.
    setTimeout(() => clearFileInput(e), 100);
  }
};

const searchFile = () => document.getElementById('file-input').click();
const deleteFile = (id) => store.files.deleteFile(id);
const fixedFile = (id) => {
  let file = store.files.data.find((file) => file.id == id);
  store.files.updateFile({
    folder_id: file.folder_id,
    user_id: file.user_id,
    fixed: !file.fixed,
    id: file.id,
  });
};

onMounted(() => {
  store.files.getFilesOfUser(store.auth.current.id, Number(route.params.id));
});
</script>
