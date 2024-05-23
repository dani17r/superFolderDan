import { ToRouterT, FromRouterT, NextRouterT } from '@interfaces/global';
import { useAuthStore } from '@stores/auth';

export const isLogin = (
  to: ToRouterT,
  _from: FromRouterT,
  next: NextRouterT,
) => {
  const isVerifyAuth = to.meta.auth;

  const authStore = useAuthStore();

  authStore.getUser((user) => {
    if (isVerifyAuth) {
      if (user) {
        next();
      } else next({ name: 'login' });
    } else {
      if (user) {
        next({ name: 'home' });
      } else next();
    }
  }, true);
};
