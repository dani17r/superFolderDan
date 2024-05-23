<script setup>
  const props = defineProps({
    size: {
      type: Number,
      default: 80,
    },
    color: {
      type: String,
      default: '#F0B82B',
    },
    name: {
      type: String,
      default: '',
    },
    id: {
      type: String,
    },
  })
</script>

<template>
  <div class="text-center tw-flex tw-flex-col tw-justify-center tw-items-center tw-relative">
    <q-icon name="folder" :size="`${props.size}px`" :style="`color:${props.color}`" class="tw-cursor-pointer" />
    <input :id="`folder-${props.id}`" class="tw-cursor-pointer text-center" :value="props.name"
      @blur="(event) => $emit('blur', event)" />
    <q-btn fab-mini round color="primary" :size="'5px'" icon="more_vert"
      class="tw-absolute tw-top-[0px] tw-right-[50px]">
      <q-menu>
        <q-list dense style="min-width: 100px">
          <q-item clickable v-close-popup>
            <q-icon color="secondary" name="folder_open" class="tw-mt-[4px] tw-mr-[4px]" size="20px" />
            <q-item-section>Open folder</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-icon color="secondary" name="edit" class="tw-mt-[4px] tw-mr-[4px]" size="20px" />
            <q-item-section>Edite name</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-icon color="secondary" name="palette" class="tw-mt-[4px] tw-mr-[4px]" size="20px" />
            <q-item-section>Change color</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-icon color="secondary" name="note_add" class="tw-mt-[4px] tw-mr-[4px]" size="20px" />
            <q-item-section>add file</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-icon color="secondary" name="delete" class="tw-mt-[4px] tw-mr-[4px]" size="20px" />
            <q-item-section>Delete folder</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>