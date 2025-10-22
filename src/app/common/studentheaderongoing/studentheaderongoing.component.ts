import { Component, OnInit ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardstudentComponent } from 'src/app/component/dashboardstudent/dashboardstudent.component';
@Component({
  selector: 'app-studentheaderongoing',
  standalone: true,
  imports: [CommonModule,DashboardstudentComponent],
  templateUrl: './studentheaderongoing.component.html',
  styleUrls: ['./studentheaderongoing.component.scss']
})
export class StudentheaderongoingComponent implements OnInit {
  gamestatus: string = "ongoing";
  @Input() courseCode: string ='';


  constructor() { }

  ngOnInit(): void {
   }

}
