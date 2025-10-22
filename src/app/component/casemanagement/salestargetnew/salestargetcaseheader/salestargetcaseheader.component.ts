import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';

@Component({
  selector: 'app-salestargetcaseheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salestargetcaseheader.component.html',
  styleUrls: ['./salestargetcaseheader.component.scss']
})
export class SalestargetcaseheaderComponent implements OnInit {

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }

  activeTab = 'outlook';
  search(activeTab:any){
    this.activeTab = activeTab;
  }
  back(){
    this._router.navigate(["auth/component/instructordashboard"])
  }

  GoBack() {
    this._api.GoBack();
  }

}
