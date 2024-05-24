<script setup lang="ts">
import superComposable from '@composables/superComposable';
import generalRules from '@utils/rules';
import { ref } from 'vue';

const { store, router, $q } = superComposable();

/* eslint-disable  @typescript-eslint/no-explicit-any */
const form = {
  email: {
    val: ref(''),
    refs: ref<any>(null),
    rules: [generalRules.empty],
  },
  password: {
    val: ref(''),
    view: ref(false),
    refs: ref<any>(null),
    rules: [generalRules.empty],
  },
};

const onSubmit = () => {
  form.email.refs.value?.validate();
  form.password.refs.value?.validate();

  if (!form.password.refs.value.hasError && !form.email.refs.value.hasError) {
    store.auth.signIn(
      {
        email: form.email.val.value,
        password: form.password.val.value,
      },
      () => {
        $q.loading.show();
        setTimeout(() => {
          router.push({ name: 'home' });
          $q.loading.hide();
        }, 350);
      },
    );
  }
};

const onReset = () => {
  form.password.val.value = '';
  form.email.val.value = '';

  setTimeout(() => {
    form.password.refs.value.resetValidation();
    form.email.refs.value.resetValidation();
  }, 10);
};
</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="box-card-content">
      <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">
        <q-card-section class="text-center">
          <h1 class="text-h4 text-weight-bold text-primary">Login</h1>
          <p class="text-accent tw-block">SuperFolderDan</p>
        </q-card-section>

        <q-card-section>
          <q-input
            dense
            outlined
            v-model="form.email.val.value"
            label="E-mail"
            :ref="(val) => (form.email.refs.value = val)"
            :rules="form.email.rules"
          ></q-input>

          <q-input
            dense
            outlined
            class="q-mt-md"
            v-model="form.password.val.value"
            label="password"
            :ref="(val) => (form.password.refs.value = val)"
            :rules="form.password.rules"
            :type="!form.password.view.value ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="
                  !form.password.view.value ? 'visibility_off' : 'visibility'
                "
                class="cursor-pointer"
                @click="form.password.view.value = !form.password.view.value"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-section>
          <q-btn
            unelevated
            color="primary"
            label="Accept"
            no-caps
            class="full-width tw-rounded-lg no-shadow"
            type="submit"
          />

          <q-btn
            flat
            color="primary"
            label="Reset"
            no-caps
            class="full-width tw-rounded-lg no-shadow tw-mt-3"
            type="reset"
          />
        </q-card-section>

        <q-card-section class="text-center q-pt-none">
          <div class="text-grey-8">
            sign up
            <router-Link
              tag="a"
              :to="{ name: 'register' }"
              class="tw-inline-flex tw-mt-2 text-secondary text-weight-bold"
              >here.</router-Link
            >
          </div>
        </q-card-section>
      </form>
    </q-card>
  </q-page>
</template>
