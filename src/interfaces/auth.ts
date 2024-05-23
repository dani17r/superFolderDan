import { UserI } from '@interfaces/user';

export interface StateI {
  lifecycles: {
    onMounted: boolean;
  };
  current: UserI | null;
  data: UserI[] | null;
}

export interface InputsI {
  RegisterI: {
    email: string;
    password: string;
    fullname: string;
    birthdate: string;
  };
  LoginI: {
    email: string;
    password: string;
  };
  UpdateI: Partial<{
    email: string;
    password: string;
    data: Partial<{
      fullname: string;
      birthdate: string;
    }>;
  }>;
}

export type ActionT = (data: UserI | null) => void;
