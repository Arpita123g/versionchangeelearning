import { Component, OnInit,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardstudentComponent } from 'src/app/component/dashboardstudent/dashboardstudent.component';

@Component({
  selector: 'app-studentheadercompleted',
  standalone: true,
  imports: [CommonModule,DashboardstudentComponent],
  templateUrl: './studentheadercompleted.component.html',
  styleUrls: ['./studentheadercompleted.component.scss']
})
export class StudentheadercompletedComponent implements OnInit {
  gamestatus :string ="completed";
  @Input() courseCode:string = '';


  constructor() { }

  ngOnInit(): void {
    
  }

}
