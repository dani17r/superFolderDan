<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          SuperFileDan
        </q-toolbar-title>

        <div>
          <q-btn outline color="white" label="Logout" no-caps @click="dialogs.confirm.toggle()" />
          <ConfirmAction message="Are you sure to log out ?" v-model="dialogs.confirm.status" @yes="logout()" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item class="q-mb-sm" clickable v-ripple :to="{ name: 'profile', params: { id: store.auth.current?.id } }">

          <q-item-section avatar>
            <q-avatar>
              <img
                :src="`https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541`">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ store.auth.current?.user_metadata.fullname }}</q-item-label>
            <q-item-label caption lines="1">{{ store.auth.current?.user_metadata.email }}</q-item-label>
          </q-item-section>
        </q-item>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import EssentialLink from '@components/EssentialLink.vue';
  import ConfirmAction from '@components/dialogs/ConfirmAction.vue';
  import superComposable from '@composables/superComposable';
  import { EssentialLinkProps } from '@interfaces/global'

  const { store, router, $q } = superComposable()

  defineOptions({
    name: 'MainLayout'
  });

  const linksList: EssentialLinkProps[] = [
    {
      title: 'Dashboard',
      caption: 'Home',
      icon: 'space_dashboard',
      link: { name: 'home' }
    },
    {
      title: 'Info',
      caption: 'Info of dev',
      icon: 'info',
      link: { name: 'info' }
    },
    {
      title: 'Profile',
      caption: 'Data user',
      icon: 'person',
      link: { name: 'profile', params: { id: store.auth.current?.id } }
    },
  ];

  const leftDrawerOpen = ref(false);

  const dialogs = reactive({
    confirm: {
      status: false,
      toggle: () => dialogs.confirm.status = !dialogs.confirm.status
    },
  });

  const logout = () => {
    $q.loading.show();
    store.auth.signOut(() => {
      setTimeout(() => {
        router.push('login');
        $q.loading.hide();
      }, 350)
    })
  }

  function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  }
</script>
