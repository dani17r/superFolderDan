import { AuthError } from '@supabase/supabase-js';

export interface NotifyI {
  SuccessI: {
    message: string,
    ok?: () => void
  }
  ErrorI: AuthError;
};