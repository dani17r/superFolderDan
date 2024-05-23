<template>
  <q-page class="row items-center justify-evenly">
    <FileExplorer />
  </q-page>
</template>

<script setup lang="ts">
  import FileExplorer from '@components/FileExplorer.vue';

  defineOptions({
    name: 'IndexPage'
  });
</script>
