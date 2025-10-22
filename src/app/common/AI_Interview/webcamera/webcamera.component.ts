import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface WebcamOptions {
  video: boolean;
  audio: boolean;
  width: number;
  height: number;
}

interface WebcamEvent {
  active: boolean;
}

@Component({
  selector: 'app-webcamera',
  templateUrl: './webcamera.component.html',
  styleUrls: ['./webcamera.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class WebcameraComponent {
  @Input() options: WebcamOptions = {
    video: true,
    audio: false,
    width: 420,
    height: 315
  };

  @Output() onCamSuccess = new EventEmitter<WebcamEvent>();
  @Output() onCamError = new EventEmitter<WebcamEvent>();

  readonly enableWebcamFlag = signal<boolean>(false);

  onCamSuccessHandler(event: WebcamEvent): void {
    this.onCamSuccess.emit(event);
  }

  onCamErrorHandler(event: WebcamEvent): void {
    this.onCamError.emit(event);
  }
}
