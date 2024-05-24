<script setup>
import superComposable from '@composables/superComposable';

const { store } = superComposable();

const emit = defineEmits([
  'fixedFile',
  'openFile',
  'editeFile',
  'deleteFile',
  'blurInput',
]);

const props = defineProps({
  size: {
    type: String,
  },
  url: {
    type: String,
  },
  fixed: {
    type: Boolean,
  },
  type: {
    type: String,
  },
  name: {
    type: String,
    default: '',
  },
  id: {
    type: Number,
  },
});
</script>

<template>
  <div
    class="text-center tw-flex tw-flex-col tw-justify-center tw-items-center"
    :class="props.fixed ? 'tw-mt-[-35px]' : ''"
  >
    <q-btn
      fab-mini
      round
      color="primary"
      :size="'5px'"
      icon="more_vert"
      class="tw-z-[100] tw-mb-[-40px] tw-mr-[-90px]"
    >
      <q-menu>
        <q-list dense style="min-width: 100px">
          <q-item clickable v-close-popup @click="emit('openFile', props.id)">
            <q-icon
              color="secondary"
              name="file_copy"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>Open File</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="emit('editeFile', props.id)">
            <q-icon
              color="secondary"
              name="edit"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>Edite File</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="emit('fixedFile', props.id)">
            <q-icon
              color="secondary"
              name="keyboard_double_arrow_right"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>{{
              props.fixed ? 'Unfix File' : 'Fixed File'
            }}</q-item-section>
          </q-item>
          <q-item
            v-if="!props.fixed"
            clickable
            v-close-popup
            @click="emit('deleteFile', props.id)"
          >
            <q-icon
              color="secondary"
              name="delete"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>Delete files</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <div class="tw-flex tw-justify-center tw-items-center tw-flex-col">
      <div class="thumbnail-container">
        <iframe
          :src="store.files.getMedia(props.url)"
          class="iframe-preview"
          frameborder="0"
        ></iframe>
      </div>

      <p class="text-center">{{ props.name }}.{{ props.type }}</p>
      <p class="text-center">
        {{ parseFloat(Number(props.size) / 1024).toFixed(1) }} kiB
      </p>
    </div>
    <q-icon
      v-if="props.fixed"
      name="push_pin"
      size="20px"
      color="accent"
      class="tw-z-[100] tw-mt-[-60px] tw-mr-[-100px]"
    />
  </div>
</template>

<style>
.thumbnail-container {
  width: 80px;
  height: 80px;
  overflow: hidden;
}

.iframe-preview {
  border: none;
  transform: scale(0.3, 0.5);
  transform-origin: top left;
}
</style>
