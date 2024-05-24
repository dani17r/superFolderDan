export type FileBody =
  | ArrayBuffer
  | ArrayBufferView
  | Blob
  | Buffer
  | File
  | FormData
  | NodeJS.ReadableStream
  | ReadableStream<Uint8Array>
  | URLSearchParams
  | string;

export interface FileI {
  id: number;
  created_at: string;
  id_doc: string;
  type: string;
  url: string;
  size: string;
  name: string;
  owner: string;
  fixed: boolean;
  user_id: string;
  folder_id: number | null;
  amount_pages: number;
}

export interface StateI {
  lifecycles: {
    onMounted: boolean;
  };
  current: FileI | null;
  data: FileI[] | null;
}

export interface InputsI {
  NewI: {
    type: string;
    url: string;
    fixed: boolean;
    folder_id: number | null;
    amount_pages: number;
    user_id: string;
    owner: string;
    name: string;
    size: string;
    id_doc: string;
  };

  UploadI: {
    file: FileBody;
    folder_id: number | null;
    amount_pages: number;
    user_id: string;
    id_doc: string;
    owner: string;
    name: string;
    size: string;
    type: string;
  };

  UpdateI: Partial<FileI>;
}

export type ActionT = (data: FileI[] | null, current?: FileI | null) => void;
