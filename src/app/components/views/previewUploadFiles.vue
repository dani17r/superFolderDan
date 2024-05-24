<script setup lang="ts">
import superComposable from '@composables/superComposable';
import { formatCustomDate } from '@utils/dateTime';
import { FileI } from '@interfaces/files';

const { store } = superComposable();
const props = defineProps<{ formDefault: FileI }>();
</script>

<template>
  <div class="tw-flex tw-flex-col tw-relative">
    <h1 class="tw-text-lg"><b>Name</b>: {{ props.formDefault.name }}</h1>
    <div class="col-span-2 tw-mb-4">
      <p class="tw-text-md"><b>Id Doc</b>: {{ props.formDefault.id_doc }}</p>
      <p class="tw-text-md"><b>Owner</b>: {{ props.formDefault.owner }}</p>
      <p class="tw-text-md">
        <b>size</b>:
        {{ (parseFloat(props.formDefault.size) / 1024).toFixed(1) }} kiB
      </p>
      <p class="tw-text-md"><b>type</b>: {{ props.formDefault.type }}</p>
    </div>

    <iframe
      :src="store.files.getMedia(String(props.formDefault.url))"
      class="iframe-preview-view"
    ></iframe>
    <div class="tw-fixed tw-bottom-11">
      Created At: {{ formatCustomDate(props.formDefault.created_at) }}
    </div>
  </div>
</template>

<style>
.iframe-preview-view {
  width: 100%;
  height: 60vh;
}
</style>
