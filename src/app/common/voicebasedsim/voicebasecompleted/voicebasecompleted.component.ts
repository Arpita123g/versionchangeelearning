import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorchilddashboardComponent } from '../../instructorchilddashboard/instructorchilddashboard.component';

@Component({
  selector: 'app-voicebasecompleted',
  templateUrl: './voicebasecompleted.component.html',
  styleUrls: ['./voicebasecompleted.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InstructorchilddashboardComponent
  ]
})
export class VoicebasecompletedComponent implements OnInit {
  gamestatus :string ="completed";
  constructor() { }

  ngOnInit(): void {
  }

}
