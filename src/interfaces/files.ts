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
  | string

export interface FileI {
  id: number;
  created_at: string;
  name: string;
  url: string;
  size: string;
  fixed: boolean;
  user_id: string;
  folder_id: number;
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
    size: string;
    name: string;
    fixed: boolean;
    user_id: string;
    folder_id: number;
  };
  UploadI: {
    folder_id: number;
    user_id: string;
    name: string;
    size: string;
    file: FileBody;
  }
  UpdateI: Partial<{
    type: string;
    url: string;
    size: string;
    name: string;
    fixed: boolean;
    user_id: string;
    folder_id: number;
  }>
}

export type ActionT = (data: FileI[] | null, current?: FileI | null) => void;