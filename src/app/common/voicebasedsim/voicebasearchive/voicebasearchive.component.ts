import { Component, OnInit } from '@angular/core';
import { InstructorchilddashboardComponent } from '../../instructorchilddashboard/instructorchilddashboard.component';

@Component({
  selector: 'app-voicebasearchive',
  templateUrl: './voicebasearchive.component.html',
  styleUrls: ['./voicebasearchive.component.scss'],
  imports: [InstructorchilddashboardComponent],
  standalone: true
})
export class VoicebasearchiveComponent implements OnInit {
  gamestatus :string ="archive";
  constructor() { }

  ngOnInit(): void {
  }

}
