import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorchilddashboardComponent } from '../../instructorchilddashboard/instructorchilddashboard.component';

@Component({
  selector: 'app-microsimarchive',
  templateUrl: './microsimarchive.component.html',
  styleUrls: ['./microsimarchive.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    InstructorchilddashboardComponent
  ]
})
export class MicrosimarchiveComponent implements OnInit {
  gamestatus: string = 'archive';

  constructor() {}

  ngOnInit(): void {
    console.log("arc", this.gamestatus);
  }
}
