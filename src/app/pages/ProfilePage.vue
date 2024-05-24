<script setup lang="ts">
import UpdateProfileData from '@components/forms/UpdateProfileData.vue';
import UpdateProfilePassword from '@components/forms/UpdateProfilePassword.vue';
</script>

<template>
  <q-page>
    <q-card-section class="text-center pt-md">
      <h1 class="text-h4 text-weight-bold text-primary">Your Profile</h1>
    </q-card-section>

    <div class="q-gutter-md q-layout-padding flex justify-center items-start">
      <UpdateProfileData class="q-col" />
      <UpdateProfilePassword class="q-col" />
    </div>
  </q-page>
</template>
