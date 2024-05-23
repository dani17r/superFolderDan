<script setup lang="ts">
  import UpdateDataUser from '@components/profile/UpdateDataUser.vue';
  import UpdatePassword from '@components/profile/UpdatePassword.vue';

</script>

<template>
  <q-page>
    <q-card-section class="text-center pt-md">
      <h1 class="text-h4 text-weight-bold text-primary">Your Profile</h1>
    </q-card-section>

    <div class="q-gutter-md q-layout-padding flex justify-center items-start">
      <UpdateDataUser class="q-col" />
      <UpdatePassword class="q-col" />
    </div>
  </q-page>
</template>
