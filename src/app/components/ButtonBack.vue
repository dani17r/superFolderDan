<template>
  <q-btn round color="primary" icon="keyboard_backspace" @click="go()" />
</template>

<script setup lang="ts">
import superComposable from '@composables/superComposable';

const { route, router } = superComposable();
const go = () => {
  if (route.path.includes('dashboard/folder')) {
    router.go(-1);
  } else router.push({ name: 'home' });
};
</script>
