<script setup>
import superComposable from '@composables/superComposable';

const { store } = superComposable();

const emit = defineEmits([
  'fixedFiles',
  'editeFiles',
  'deleteFiles',
  'blurInput',
]);

const props = defineProps({
  size: {
    type: String,
  },
  url: {
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
          <q-item clickable v-close-popup @click="emit('editeFiles')">
            <q-icon
              color="secondary"
              name="edit"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>Edite name</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="emit('fixedFiles')">
            <q-icon
              color="secondary"
              name="keyboard_double_arrow_right"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>fixed file</q-item-section>
          </q-item>
          <q-item
            clickable
            v-close-popup
            @click="emit('deleteFiles', props.id)"
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

      <p class="text-center">{{ props.name }}</p>
      <p class="text-center">
        {{ parseFloat(Number(props.size) / 1024).toFixed(1) }} kiB
      </p>
    </div>
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
