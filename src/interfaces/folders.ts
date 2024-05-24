export interface FolderI {
  id: number;
  created_at: Date;
  name: string;
  edite: boolean;
  color?: string | null;
  size?: string | null;
  user_id?: string | null;
  folder_id?: string | null;
  fixed?: boolean | null;
  type?: string | null;
}

export interface StateI {
  lifecycles: {
    onMounted: boolean;
  };
  current: FolderI | null;
  data: FolderI[] | null;
}

export interface InputsI {
  NewI: {
    type: string;
    color: string;
    size: string;
    name: string;
    user_id: string;
    folder_id: number;
  };

  UpdateI: Partial<{
    id: string;
    type: string;
    color: string;
    size: string;
    name: string;
    user_id: string;
    folder_id: number;
  }>;
}

export type ActionT = (
  data: FolderI[] | null,
  current?: FolderI | null,
) => void;
