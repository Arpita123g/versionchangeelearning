import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';

@Component({
  selector: 'app-hrpcaseheader',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule],
  templateUrl: './hrpcaseheader.component.html',
  styleUrls: ['./hrpcaseheader.component.scss']
})
export class HrpcaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }

  activeTab = 'market';
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
