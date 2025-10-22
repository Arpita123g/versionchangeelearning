import { Component, EventEmitter, Input, Output, signal, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule]
})
export class AudioPlayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() audioBlob!: Blob;
  @Output() isPlayingChanged = new EventEmitter<boolean>();

  volume = signal(100);
  audio!: HTMLAudioElement;
  isPlaying = signal(false);

  ngOnInit(): void {
    this.audio = new Audio();
    this.setAudioSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['audioBlob']) {
      this.setAudioSource();
    }
  }

  private setAudioSource(): void {
    if (this.audioBlob && this.audioBlob.size > 0) {
      const audioUrl = URL.createObjectURL(this.audioBlob);
      this.audio.src = audioUrl;
      this.play();
    }
  }

  play(): void {
    this.audio.play();
    this.isPlaying.set(true);
    this.isPlayingChanged.emit(true);
    this.audio.addEventListener('ended', () => {
      this.isPlaying.set(false);
      this.isPlayingChanged.emit(false);
      this.stop();
    });
  }

  pause(): void {
    this.audio.pause();
    this.isPlaying.set(false);
    this.isPlayingChanged.emit(false);
  }

  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlaying.set(false);
    this.isPlayingChanged.emit(false);
  }

  setVolume(volume: number): void {
    this.volume.set(volume);
    this.audio.volume = volume / 100;
  }

  ngOnDestroy(): void {
    this.stop();
    URL.revokeObjectURL(this.audio.src);
  }
}
