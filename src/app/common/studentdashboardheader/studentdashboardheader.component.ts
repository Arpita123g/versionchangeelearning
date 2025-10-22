import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { GlobalService } from '../../service/global.service';
import { StudentheaderongoingComponent } from '../studentheaderongoing/studentheaderongoing.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdashboardheader',
  templateUrl: './studentdashboardheader.component.html',
  styleUrls: ['./studentdashboardheader.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    StudentheaderongoingComponent
  ]
})

export class StudentdashboardheaderComponent implements OnInit {
  headertab = 'Completed';
  microsubtab: string = "ongoing";
  courseCode: string = '';
  voicesubtab: string = "ongoing";
  activetab: string = "microsim";

  constructor(private _global: GlobalService, private _router: Router) {
    const navigation = this._router.getCurrentNavigation();
    this.courseCode = navigation?.extras.state?.['coursecode'] || null;
  }

  ngOnInit(): void {
    this._global.microvoicetab.next(this.activetab);
  }

  tabclick(tab: string) {
    this.activetab = tab;
    this._global.microvoicetab.next(this.activetab)
  }

  voicesubtabclick(tab: string) {
    this.voicesubtab = tab;
  }

  microsubtabclick(tab: string) {
    this.microsubtab = tab;
  }

}
