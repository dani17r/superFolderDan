<script setup lang="ts">
  import superComposable from 'src/composables/superComposable';
  import generalRules from '@utils/rules';
  import notify from '@utils/notification';
  import { onMounted, ref } from 'vue';

  const { store } = superComposable();

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
  };

  const onSubmit = () => {
    form.email.refs.value?.validate();
    form.fullname.refs.value?.validate();
    form.birthdate.refs.value?.validate();

    if (
      !form.fullname.refs.value.hasError &&
      !form.birthdate.refs.value.hasError &&
      !form.email.refs.value.hasError
    ) {
      store.auth.updateUser(
        {
          email: form.email.val.value,
          data: {
            fullname: form.fullname.val.value,
            birthdate: form.birthdate.val.value,
          }
        },
        () => {
          notify.success({ message: 'Success Update Data' })
        }
      );
    }
  };

  const onReset = () => {
    form.email.val.value = '';
    form.fullname.val.value = '';
    form.birthdate.val.value = '';

    setTimeout(() => {
      form.fullname.refs.value.resetValidation();
      form.birthdate.refs.value.resetValidation();
      form.email.refs.value.resetValidation();
    }, 10);
  };

  onMounted(() => {
    form.fullname.val.value = String(store.auth.current?.user_metadata.fullname);
    form.birthdate.val.value = String(store.auth.current?.user_metadata.birthdate);
    form.email.val.value = String(store.auth.current?.email);
  })
</script>

<template>
  <q-card class="box-card-content">
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">

      <q-card-section>
        <q-input dense outlined v-model="form.fullname.val.value" label="Full Name" class="q-mt-md"
          :ref="(val) => (form.fullname.refs.value = val)" :rules="form.fullname.rules" />

        <q-input dense outlined v-model="form.birthdate.val.value" mask="date" :rules="form.birthdate.rules"
          class="q-mt-md" :ref="(val) => (form.birthdate.refs.value = val)" placeholder="Date Of Birth">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="form.birthdate.val.value" default-view="Years" default-year-month="1990/01">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input dense outlined type="email" v-model="form.email.val.value" label="Email" class="q-mt-md"
          :ref="(val) => (form.email.refs.value = val)" :rules="form.email.rules" />
      </q-card-section>

      <q-card-section>
        <q-btn unelevated color="primary" label="Update" no-caps class="full-width tw-rounded-lg no-shadow"
          type="submit" />
      </q-card-section>
    </form>
  </q-card>
</template>