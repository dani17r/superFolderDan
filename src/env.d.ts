/* eslint-disable */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
    VUE_ROUTER_BASE: string | undefined;
    VITE_NAME_STORAGE: string;
    VITE_SUPABASE_URL: string;
    VITE_SUPABASE_KEY: string;
  }
}
