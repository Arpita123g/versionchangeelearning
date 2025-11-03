import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { StpcasefoodforthoughtComponent } from '../stpcasefoodforthought/stpcasefoodforthought.component';
import { StpcasemarketComponent } from '../stpcasemarket/stpcasemarket.component';
import { StpcasemoduleComponent } from '../stpcasemodule/stpcasemodule.component';
import { Stpcasephase1Component } from '../stpcasephase1/stpcasephase1.component';
import { Stpcasephase2Component } from '../stpcasephase2/stpcasephase2.component';
import { StpcaseinformationsearchComponent } from '../stpcaseinformationsearch/stpcaseinformationsearch.component';
import { Stpcasephase3Component } from '../stpcasephase3/stpcasephase3.component';

@Component({
  selector: 'app-stpcaseheader',
  standalone: true,
  imports: [CommonModule,
    StpcasefoodforthoughtComponent,
    StpcasemarketComponent,
    StpcasemoduleComponent,
    StpcaseinformationsearchComponent,
    StpcasefoodforthoughtComponent,
    Stpcasephase1Component, 
    Stpcasephase2Component,
    Stpcasephase3Component
  ],
  templateUrl: './stpcaseheader.component.html',
  styleUrls: ['./stpcaseheader.component.scss']
})
export class StpcaseheaderComponent implements OnInit {

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
