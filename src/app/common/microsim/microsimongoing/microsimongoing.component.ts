import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorchilddashboardComponent } from '../../instructorchilddashboard/instructorchilddashboard.component';

@Component({
  selector: 'app-microsimongoing',
  templateUrl: './microsimongoing.component.html',
  styleUrls: ['./microsimongoing.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InstructorchilddashboardComponent
  ]
})
export class MicrosimongoingComponent implements OnInit {
  gamestatus: string = "ongoing";

  constructor() { }

  ngOnInit(): void {
  }
}
