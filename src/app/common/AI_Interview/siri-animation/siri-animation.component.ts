import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';
import SiriWave from 'siriwave';
@Component({
  selector: 'app-siri-animation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './siri-animation.component.html',
  styleUrls: ['./siri-animation.component.scss']
})
export class SiriAnimationComponent implements AfterViewInit {

  @Input() isPlaying: boolean = false;

  siriWave:any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isPlaying'] && !changes['isPlaying'].firstChange) {
      if (this.isPlaying) {
        this.siriwavestart();
      } else {
        this.siriwavestop();
      }
    }
  }

  ngAfterViewInit(): void {
    const siriWaveElement = document.getElementById('siriWaveCanvas');
    if (siriWaveElement) {
      this.siriWave = new SiriWave({
        container: siriWaveElement,
        width: 270,
        height: 200,
        style: 'ios9',
        amplitude: 1.2,
        speed: 0.2,
        cover: true,
        autostart: false
      });
      // 👇 Start animation if isPlaying is already true
      if (this.isPlaying) {
        this.siriwavestart();
      }
    } else {
      console.error('siriWaveCanvas is not available');
    }
  }

  siriwavestart() {
    if (this.siriWave) {
      this.siriWave.amplitude = 1.2;
      this.siriWave.start();
     }
  }
  siriwavestop() {
    if (this.siriWave) {
      this.siriWave.amplitude = 0;
      setTimeout(() => {
        this.siriWave.amplitude = 0;
        this.siriWave.stop();
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    this.siriwavestop();
  }

}
