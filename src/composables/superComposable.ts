import { useRouter, useRoute } from 'vue-router';
import { useFolderStore } from '@stores/folders';
import { useFileStore } from '@stores/files';
import { useAuthStore } from '@stores/auth';
import { useQuasar } from 'quasar'

const auth = useAuthStore();
const folders = useFolderStore();
const files = useFileStore();

export default () => {
  const $q = useQuasar()
  const router = useRouter();
  const route = useRoute();

  const reset = () => {
    auth.reset();
    folders.reset();
  }

  return {
    router,
    route,
    store: {
      reset,
      folders,
      files,
      auth,
    },
    $q
  }
}