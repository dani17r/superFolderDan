import { StateI, InputsI, ActionT } from '@interfaces/auth';
import { supabase } from '@services/supabase';
import { UserI } from '@interfaces/user';
import notify from '@utils/notification';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => <StateI>({
    lifecycles: {
      onMounted: false,
    },
    current: null,
    data: null
  }),
  actions: {

    //Register
    signUp(user: InputsI['RegisterI'], action?: ActionT) {
      supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
          data: {
            fullname: user.fullname,
            birthdate: user.birthdate
          },
        },
      })
        .then(({ data, error }) => {
          if (error) return notify.error(error)
          action && action(data.user as unknown as UserI)
        })
    },

    //Login
    signIn(user: InputsI['LoginI'], action?: ActionT) {
      supabase.auth.signInWithPassword(user)
        .then(({ data, error }) => {
          if (error) return notify.error(error)
          action && action(data.user as unknown as UserI)
        })
    },
    //logout
    signOut(action?: ActionT) {
      supabase.auth.signOut()
        .then(({ error }) => {
          if (error) return notify.error(error)
          action && action(null)
        })
    },

    //one user
    getUser(action?: ActionT, isMounted = false) {
      if (!this.lifecycles.onMounted || isMounted) {
        this.lifecycles.onMounted = true;
        supabase.auth.getUser()
          .then(({ data, error }) => {
            if (error) {
              action && action(null)
              throw 'Not Authenticated User';
            }
            action && action(data.user as unknown as UserI)
            this.current = data.user as unknown as UserI;
          })
      }
    },

    //update user
    updateUser(user: InputsI['UpdateI'], action?: ActionT) {
      supabase.auth.updateUser(user)
        .then(({ data, error }) => {
          if (error) return notify.error(error)
          action && action(data as unknown as UserI)
          setTimeout(() => this.current = data.user as unknown as UserI, 200)
        })
    },

    // reset default values
    reset() {
      this.lifecycles.onMounted = false;
      this.current = null;
      this.data = null;
    },
  },
});

