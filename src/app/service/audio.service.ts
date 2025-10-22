import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private whisperApiUrl = 'https://api.openai.com/v1/audio/transcriptions';
  private apiKey = environment.openaiApiKey; // Make sure to add this to your environment file

  constructor(private http: HttpClient) {}

  // Convert audio file to text using Whisper API
  transcribeAudio(audioFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', audioFile);
    formData.append('model', 'whisper-1');

    return this.http.post(this.whisperApiUrl, formData, {
      headers: {
        'Authorization': `Bearer ${this.apiKey}`
      }
    });
  }

  // Record audio from microphone
  async startRecording(): Promise<MediaRecorder> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      return mediaRecorder;
    } catch (error) {
      console.error('Error accessing microphone:', error);
      throw error;
    }
  }

  // Convert MediaRecorder chunks to File
  async chunksToFile(chunks: Blob[]): Promise<File> {
    const audioBlob = new Blob(chunks, { type: 'audio/webm' });
    return new File([audioBlob], 'recording.webm', { type: 'audio/webm' });
  }
} 