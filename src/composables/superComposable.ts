import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@stores/auth';
import { useQuasar } from 'quasar'

const auth = useAuthStore();

export default () => {
  const $q = useQuasar()
  const router = useRouter();
  const route = useRoute();

  const reset = () => {
    auth.reset();
  }

  return {
    router,
    route,
    store: {
      reset,
      auth,
    },
    $q
  }
}