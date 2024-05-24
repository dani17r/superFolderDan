<script setup lang="ts">
import superComposable from '@composables/superComposable';
import { FileI } from '@interfaces/files';
import notify from '@utils/notification';
import generalRules from '@utils/rules';
import { ref, watchEffect } from 'vue';

const { store, $q } = superComposable();
const props = defineProps<{ formDefault: FileI }>();
const emit = defineEmits(['success']);

/* eslint-disable  @typescript-eslint/no-explicit-any */
const form = {
  name: {
    val: ref(''),
    refs: ref<any>(null),
    rules: [generalRules.empty],
  },
  owner: {
    val: ref(''),
    refs: ref<any>(null),
    rules: [generalRules.empty],
  },
  amount_pages: {
    val: ref(0),
    refs: ref<any>(null),
    rules: [(val: number) => val > 0 || 'Cannot be less than or equal to zero'],
  },
};

const onSubmit = () => {
  form.name.refs.value?.validate();
  form.owner.refs.value?.validate();
  form.amount_pages.refs.value?.validate();

  if (
    !form.name.refs.value.hasError &&
    !form.owner.refs.value.hasError &&
    !form.amount_pages.refs.value.hasError
  ) {
    $q.loading.show();

    store.files.updateFile(
      {
        id: props.formDefault.id,
        name: form.name.val.value,
        owner: form.owner.val.value,
        amount_pages: form.amount_pages.val.value,
        folder_id: props.formDefault.folder_id,
        user_id: props.formDefault.user_id,
      },
      () => {
        emit('success');
        $q.loading.hide();
        notify.success({ message: 'Success Upload' });
      },
    );
    setTimeout(() => $q.loading.hide(), 1000);
  }
};

const onReset = () => {
  form.name.val.value = '';
  form.owner.val.value = '';
  form.amount_pages.val.value = 0;

  setTimeout(() => {
    form.name.refs.value.resetValidation();
    form.owner.refs.value.resetValidation();
  }, 10);
};

watchEffect(() => {
  if (props.formDefault) {
    form.name.val.value = String(props.formDefault.name);
    form.owner.val.value = String(props.formDefault.owner);
    form.amount_pages.val.value = Number(props.formDefault.amount_pages);
  }
});
</script>

<template>
  <q-card class="box-card-content">
    <div class="frame-container">
      <iframe
        :src="store.files.getMedia(String(props.formDefault.url))"
        class="iframe-preview-upload"
        id="preview-upload"
      ></iframe>
    </div>
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">
      <q-card-section>
        <q-input
          dense
          outlined
          :model-value="props.formDefault.id_doc"
          label="Id Doc"
          class="q-mt-md"
          disable
        />

        <q-input
          dense
          outlined
          v-model="form.name.val.value"
          label="File Name"
          class="q-mt-md"
          :ref="(val) => (form.name.refs.value = val)"
          :rules="form.name.rules"
        />

        <q-input
          dense
          outlined
          v-model="form.owner.val.value"
          label="First Name & last Name"
          class="q-mt-md"
          :ref="(val) => (form.owner.refs.value = val)"
          :rules="form.owner.rules"
        />

        <q-input
          dense
          outlined
          type="number"
          v-model="form.amount_pages.val.value"
          label="Amount Of Pages"
          class="q-mt-md"
          :ref="(val) => (form.amount_pages.refs.value = val)"
          :rules="form.amount_pages.rules"
        />

        <q-input
          dense
          outlined
          :model-value="props.formDefault.size"
          label="File Name"
          class="q-mt-md"
          disable
        />
      </q-card-section>

      <q-card-section>
        <q-btn
          unelevated
          color="primary"
          label="Update"
          no-caps
          class="full-width tw-rounded-lg no-shadow"
          type="submit"
        />
      </q-card-section>
    </form>
  </q-card>
</template>

<style>
.iframe-container {
  position: relative;
  overflow: hidden !important;
  width: 100%;
  height: 100%;
}

.iframe-preview-upload {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
