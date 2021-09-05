export enum DownloadType {
  JSON = 'application/json',
  CSV = 'text/csv;charset=utf-8;',
}

export function downloadFile(filename: string, text: string, downloadType: DownloadType): void {
  const element = document.createElement('a');
  element.download = filename;
  element.href = URL.createObjectURL(new Blob([text], { type: downloadType }));
  element.click();
}

export function downloadJsonFile(filename: string, obj: object): void {
  downloadFile(filename, JSON.stringify(obj, null, 2), DownloadType.JSON);
}

