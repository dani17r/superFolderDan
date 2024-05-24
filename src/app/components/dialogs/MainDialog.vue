<script setup>
const status = defineModel(false);
const emit = defineEmits(['close']);

const props = defineProps({
  title: {
    type: String,
    default: 'Dialog',
    required: true,
  },
  styleCard: {
    type: String,
  },
  classCard: {
    type: String,
  },
});
</script>

<template>
  <q-dialog v-model="status" class="tw-relative">
    <q-card :style="props.styleCard" :class="props.classCard">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ props.title }}</div>
        <q-space />
        <q-btn
          icon="close"
          flat
          round
          dense
          v-close-popup
          @click="emit('close')"
        />
      </q-card-section>

      <q-card-section>
        <slot></slot>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
