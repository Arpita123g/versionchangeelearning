import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';

@Component({
  selector: 'app-hrmcase-header',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule],
  templateUrl: './hrmcase-header.component.html',
  styleUrls: ['./hrmcase-header.component.scss']
})
export class HrmcaseHeaderComponent implements OnInit {


  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }

  activeTab = 'company';
  search(activeTab: any) {
    this.activeTab = activeTab;
  }

  back() {
    this._router.navigate(["auth/component/instructordashboard"])
  }

  GoBack() {
    this._api.GoBack();
  }
}
