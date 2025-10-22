import { Component, OnDestroy, inject, signal } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { WebcameraComponent } from '../webcamera/webcamera.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-interview-permissions',
  templateUrl: './interview-permissions.component.html',
  styleUrls: ['./interview-permissions.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    WebcameraComponent
  ]
})
export class InterviewPermissionsComponent implements OnDestroy {
  private audioContext!: AudioContext;
  private analyser!: AnalyserNode;
  private microphoneStream!: MediaStream;
  private animationFrameId?: number;

  volume = signal(0);
  isMicrophoneActive = signal(false);

  dialogRef = inject(MatDialogRef<InterviewPermissionsComponent>);

  constructor() {
    this.dialogRef.disableClose = true;
  }

  async initAudio(): Promise<void> {
    try {
      this.microphoneStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.isMicrophoneActive.set(true);
      
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      this.analyser = this.audioContext.createAnalyser();
      const microphone = this.audioContext.createMediaStreamSource(this.microphoneStream);
      microphone.connect(this.analyser);
      
      this.analyser.fftSize = 256;
      const bufferLength = this.analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const updateVolume = () => {
        this.analyser.getByteFrequencyData(dataArray);
        const average = dataArray.reduce((sum, value) => sum + value, 0) / bufferLength;
        this.volume.set(average);
        this.animationFrameId = requestAnimationFrame(updateVolume);
      };

      updateVolume();
    } catch (error) {
      console.error('Error initializing audio:', error);
      this.isMicrophoneActive.set(false);
    }
  }

  cleanupAudio(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.microphoneStream) {
      const tracks = this.microphoneStream.getTracks();
      tracks.forEach(track => track.stop());
    }
    if (this.audioContext) {
      this.audioContext.close();
    }
    this.isMicrophoneActive.set(false);
  }

  ngOnDestroy(): void {
    this.cleanupAudio();
  }
}
