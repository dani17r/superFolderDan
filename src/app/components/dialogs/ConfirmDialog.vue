<script setup>
const status = defineModel(false);
const emit = defineEmits(['yes', 'no']);

const props = defineProps({
  message: {
    type: String,
    default: 'want to execute this action?',
    required: true,
  },
});
</script>

<template>
  <q-dialog v-model="status" persistent>
    <q-card class="tw-w-[45%]">
      <q-card-section class="row items-center">
        <q-avatar icon="info" color="primary" text-color="white" />
        <span class="q-ml-sm">{{ props.message }}</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          flat
          label="yes"
          color="primary"
          v-close-popup
          @click="emit('yes')"
        />
        <q-btn
          flat
          label="Cancel"
          color="secondary"
          v-close-popup
          @click="emit('no')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
