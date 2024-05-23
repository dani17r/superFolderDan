export interface UserI {
  instance_id?: string;
  id: string;
  aud?: string;
  role?: string;
  email: string;
  encrypted_password?: string;
  email_confirmed_at?: Date;
  invited_at?: Date;
  confirmation_token?: string;
  confirmation_sent_at?: Date;
  recovery_token?: string;
  recovery_sent_at?: Date;
  email_change_token_new?: string;
  email_change?: string;
  email_change_sent_at?: Date;
  last_sign_in_at?: Date;
  raw_app_meta_data?: Record<string, unknown>;
  raw_user_meta_data?: Record<string, unknown>;
  user_metadata: {
    email: string,
    fullname: string,
    birthdate: string,
    image_profile: string;
  };
  is_super_admin?: boolean;
  created_at?: Date;
  updated_at?: Date;
  phone?: string;
  phone_confirmed_at?: Date;
  phone_change?: string;
  phone_change_token?: string;
  phone_change_sent_at?: Date;
  confirmed_at?: Date;
  email_change_token_current?: string;
  email_change_confirm_status?: number;
  banned_until?: Date;
  reauthentication_token?: string;
  reauthentication_sent_at?: Date;
  is_sso_user?: boolean;
  deleted_at?: Date;
  is_anonymous?: boolean;
}
