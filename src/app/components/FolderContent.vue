<script setup>
const emit = defineEmits([
  'openFolder',
  'editeFolder',
  'addFile',
  'deleteFolder',
  'blurInput',
]);

const props = defineProps({
  size: {
    type: String,
    default: '80',
  },
  color: {
    type: String,
    default: '#F0B82B',
  },
  name: {
    type: String,
    default: '',
  },
  edite: {
    type: Boolean,
    default: false,
  },
  id: {
    type: Number,
  },
});

const clickOutside = () => document.getElementById('content-folder').focus();
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
      class="tw-z-[100] tw-mb-[-40px] tw-mr-[-60px]"
    >
      <q-menu>
        <q-list dense style="min-width: 100px">
          <q-item clickable v-close-popup @click="emit('openFolder', props.id)">
            <q-icon
              color="secondary"
              name="folder_open"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>Open folder</q-item-section>
          </q-item>
          <q-item
            clickable
            v-close-popup
            @click="emit('editeFolder', props.id)"
          >
            <q-icon
              color="secondary"
              name="edit"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>Edite name</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-icon
              color="secondary"
              name="palette"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>Change color</q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="emit('addFile')">
            <q-icon
              color="secondary"
              name="note_add"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>add file</q-item-section>
          </q-item>
          <q-item
            clickable
            v-close-popup
            @click="emit('deleteFolder', props.id)"
          >
            <q-icon
              color="secondary"
              name="delete"
              class="tw-mt-[4px] tw-mr-[4px]"
              size="20px"
            />
            <q-item-section>Delete folder</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <q-icon
      name="folder"
      :size="`${props.size}px`"
      :style="`color:${props.color}`"
      class="tw-cursor-pointer tw-w-full"
      @dblclick="emit('openFolder', props.id)"
    />

    <input
      :id="`folder-${props.id}`"
      :disabled="!props.edite"
      :value="props.name"
      :style="
        !props.edite
          ? 'cursor:pointer !important; background-color:transparent'
          : ''
      "
      class="tw-cursor-pointer text-center"
      @blur="(event) => emit('blurInput', event)"
      @keyup.enter="clickOutside()"
      @dblclick="emit('openFolder', props.id)"
    />
  </div>
</template>
