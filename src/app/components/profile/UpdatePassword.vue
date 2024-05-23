<script setup lang="ts">
  import superComposable from 'src/composables/superComposable';
  import generalRules from '@utils/rules';
  import notify from '@utils/notification';
  import { ref } from 'vue';

  const { store } = superComposable();

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const form = {
    newPassword: {
      val: ref(''),
      view: ref(false),
      refs: ref<any>(null),
      rules: [generalRules.empty],
    },
    checkPassword: {
      val: ref(''),
      view: ref(false),
      refs: ref<any>(null),
      rules: [generalRules.empty],
    },
  };

  const onSubmit = () => {
    form.newPassword.refs.value?.validate();
    form.checkPassword.refs.value?.validate();

    if (
      !form.newPassword.refs.value.hasError &&
      !form.checkPassword.refs.value.hasError
    ) {
      store.auth.updateUser(
        {
          password: form.newPassword.val.value,
        },
        () => {
          notify.success({ message: 'Success Update Password' })
        }
      );
    }
  };

  const onReset = () => {
    form.newPassword.val.value = '';
    form.checkPassword.val.value = '';

    setTimeout(() => {
      form.newPassword.refs.value.resetValidation();
      form.checkPassword.refs.value.resetValidation();
    }, 10);
  };
</script>

<template>
  <q-card class="box-card-content">
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">

      <q-card-section>

        <q-input dense outlined class="q-mt-md" v-model="form.newPassword.val.value" label="New Password"
          :ref="(val) => (form.newPassword.refs.value = val)" :rules="form.newPassword.rules"
          :type="!form.newPassword.view.value ? 'password' : 'text'" clearable>
          <template v-slot:append>
            <q-icon :name="!form.newPassword.view.value ? 'visibility_off' : 'visibility'
              " class="cursor-pointer" @click="form.newPassword.view.value = !form.newPassword.view.value" />
          </template>
        </q-input>

        <q-input dense outlined class="q-mt-md" v-model="form.checkPassword.val.value" label="check Password"
          :ref="(val) => (form.checkPassword.refs.value = val)"
          :rules="[...form.checkPassword.rules, (val) => form.newPassword.val.value == val || 'password does not match']"
          :type="!form.checkPassword.view.value ? 'password' : 'text'" clearable>
          <template v-slot:append>
            <q-icon :name="!form.checkPassword.view.value ? 'visibility_off' : 'visibility'
              " class="cursor-pointer" @click="form.checkPassword.view.value = !form.checkPassword.view.value" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-section>
        <q-btn unelevated color="primary" label="Update" no-caps class="full-width tw-rounded-lg no-shadow"
          type="submit" />
      </q-card-section>
    </form>
  </q-card>
</template>