import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorchilddashboardComponent } from '../../instructorchilddashboard/instructorchilddashboard.component';

@Component({
  selector: 'app-microsimcompleted',
  templateUrl: './microsimcompleted.component.html',
  styleUrls: ['./microsimcompleted.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InstructorchilddashboardComponent
  ]
})
export class MicrosimcompletedComponent implements OnInit {
  gamestatus: string = "completed";

  constructor() { }

  ngOnInit(): void {
  }
}
