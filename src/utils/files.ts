export const clearFileInput = (e: Event) => {
  if (e?.target instanceof HTMLInputElement) {
    const emptyFile = new File([], 'empty.txt', { type: 'text/plain' });
    const emptyFileList = new DataTransfer();
    emptyFileList.items.add(emptyFile);
    e.target.files = emptyFileList.files;
  }
};

export const getFileExtension = (filename: string) => {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
};

export const getFileNameWithoutExtension = (filename: string) => {
  const dotIndex = filename.lastIndexOf('.');
  if (dotIndex === -1) {
    return filename; // No hay extensión, devolvemos el nombre completo
  }
  return filename.substring(0, dotIndex);
};
