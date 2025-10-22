import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InstructorchilddashboardComponent } from '../../instructorchilddashboard/instructorchilddashboard.component';

@Component({
  selector: 'app-voicebaseongoing',
  standalone: true,
  imports: [CommonModule,InstructorchilddashboardComponent],
  templateUrl: './voicebaseongoing.component.html',
  styleUrls: ['./voicebaseongoing.component.scss']
})
export class VoicebaseongoingComponent implements OnInit {
  gamestatus :string ="ongoing";
  constructor() { }

  ngOnInit(): void {
    
  }
 


}
