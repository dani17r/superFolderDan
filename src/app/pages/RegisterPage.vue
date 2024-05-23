<script setup lang="ts">
import superComposable from 'src/composables/superComposable';
import generalRules from '@utils/rules';
import notify from '@utils/notification';
import { ref } from 'vue';

const { store, router } = superComposable();

/* eslint-disable  @typescript-eslint/no-explicit-any */
const form = {
  fullname: {
    val: ref(''),
    refs: ref<any>(null),
    rules: [generalRules.empty],
  },
  birthdate: {
    val: ref(''),
    refs: ref<any>(null),
    rules: [generalRules.empty],
  },
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
  form.fullname.refs.value?.validate();
  form.birthdate.refs.value?.validate();

  if (
    !form.fullname.refs.value.hasError &&
    !form.birthdate.refs.value.hasError &&
    !form.password.refs.value.hasError &&
    !form.email.refs.value.hasError
  ) {
    store.auth.signUp(
      {
        email: form.email.val.value,
        fullname: form.fullname.val.value,
        birthdate: form.birthdate.val.value,
        password: form.password.val.value,
      },
      () => {
        notify.success({
          message: 'You have successfully registered',
          ok: () => router.push({ name: 'login' }),
        });
      },
    );
  }
};

const onReset = () => {
  form.password.val.value = '';
  form.email.val.value = '';
  form.fullname.val.value = '';
  form.birthdate.val.value = '';

  setTimeout(() => {
    form.fullname.refs.value.resetValidation();
    form.birthdate.refs.value.resetValidation();
    form.password.refs.value.resetValidation();
    form.email.refs.value.resetValidation();
  }, 10);
};
</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="box-card-content">
      <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">
        <q-card-section class="text-center tw-px-2">
          <h1 class="text-primary text-h4 text-weight-bold">SignUp</h1>
          <p class="text-accent-8 tw-text-sm">SuperFolder dan</p>
        </q-card-section>

        <q-card-section>
          <q-input
            dense
            outlined
            v-model="form.fullname.val.value"
            label="Full Name"
            class="q-mt-md"
            :ref="(val) => (form.fullname.refs.value = val)"
            :rules="form.fullname.rules"
            clearable
          />

          <q-input
            dense
            outlined
            v-model="form.birthdate.val.value"
            mask="date"
            :rules="form.birthdate.rules"
            class="q-mt-md"
            clearable
            :ref="(val) => (form.birthdate.refs.value = val)"
            placeholder="Date Of Birth"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date
                    v-model="form.birthdate.val.value"
                    default-view="Years"
                    default-year-month="1990/01"
                  >
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

          <q-input
            dense
            outlined
            type="email"
            v-model="form.email.val.value"
            label="Email"
            class="q-mt-md"
            :ref="(val) => (form.email.refs.value = val)"
            :rules="form.email.rules"
            clearable
          />

          <q-input
            dense
            outlined
            class="q-mt-md"
            v-model="form.password.val.value"
            label="Password"
            :ref="(val) => (form.password.refs.value = val)"
            :rules="form.password.rules"
            :type="!form.password.view.value ? 'password' : 'text'"
            clearable
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
            label="SingUp"
            no-caps
            class="full-width tw-rounded-lg no-shadow"
            type="submit"
          />
          <q-btn
            flat
            color="primary"
            label="Reset"
            no-caps
            class="full-width tw-rounded-lg no-shadow"
            type="reset"
          />
        </q-card-section>

        <q-card-section class="text-center q-pt-none">
          <div class="text-grey-8">
            You want to
            <router-Link
              tag="a"
              :to="{ name: 'login' }"
              class="text-secondary text-weight-bold"
              >login ?</router-Link
            >
          </div>
        </q-card-section>
      </form>
    </q-card>
  </q-page>
</template>
