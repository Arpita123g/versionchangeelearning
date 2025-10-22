import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: any[] = [];

  log(message: string) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level: 'LOG',
      message: message,
      source: 'YourAppName'
    };
    this.logs.push(logEntry);
    this.writeLogsToFile();
  }

  writeLogsToFile() {
    const jsonData = JSON.stringify(this.logs);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'logs.json';
    link.click();

    window.URL.revokeObjectURL(url);
  }
}
