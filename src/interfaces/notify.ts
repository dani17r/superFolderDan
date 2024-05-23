import { AuthError, PostgrestError } from '@supabase/supabase-js';
import { StorageError } from '@supabase/storage-js';
export interface NotifyI {
  SuccessI: {
    message: string;
    ok?: () => void;
  };
  ErrorI: AuthError | PostgrestError | StorageError;
}
