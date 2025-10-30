import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { ConsumercasetargetComponent } from '../consumercasetarget/consumercasetarget.component';
import { ConsumerconceptualizingComponent } from '../consumerconceptualizing/consumerconceptualizing.component';
import { ConsumerfoodforthougthComponent } from '../consumerfoodforthougth/consumerfoodforthougth.component';
import { ConsumerinformationsearchComponent } from '../consumerinformationsearch/consumerinformationsearch.component';
import { ConsumermoduleComponent } from '../consumermodule/consumermodule.component';
import { ConsumeroutlookComponent } from '../consumeroutlook/consumeroutlook.component';

@Component({
  selector: 'app-consumercaseheader',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    ConsumercasetargetComponent,
    ConsumerconceptualizingComponent,
    ConsumerfoodforthougthComponent,
    ConsumerinformationsearchComponent,
    ConsumermoduleComponent,
    ConsumeroutlookComponent,
  ],
  templateUrl: './consumercaseheader.component.html',
  styleUrls: ['./consumercaseheader.component.scss']
})
export class ConsumercaseheaderComponent implements OnInit {

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
