import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { EcommerccasecatalogComponent } from '../ecommerccasecatalog/ecommerccasecatalog.component';
import { EcommerccaseexperienceComponent } from '../ecommerccaseexperience/ecommerccaseexperience.component';
import { EcommerccasefoodforthoughtComponent } from '../ecommerccasefoodforthought/ecommerccasefoodforthought.component';
import { EcommerccasemarketComponent } from '../ecommerccasemarket/ecommerccasemarket.component';
import { EcommerccasemarketingComponent } from '../ecommerccasemarketing/ecommerccasemarketing.component';
import { EcommerccasemoduleComponent } from '../ecommerccasemodule/ecommerccasemodule.component';
import { EcommerccaseoperationComponent } from '../ecommerccaseoperation/ecommerccaseoperation.component';

@Component({
  selector: 'app-ecommerccaseeheader',
  standalone: true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
    EcommerccasecatalogComponent,
    EcommerccaseexperienceComponent,
    EcommerccasefoodforthoughtComponent,
    EcommerccasemarketComponent,
    EcommerccasemarketingComponent,
    EcommerccasemoduleComponent,
    EcommerccaseoperationComponent,
  ],
  templateUrl: './ecommerccaseeheader.component.html',
  styleUrls: ['./ecommerccaseeheader.component.scss']
})
export class EcommerccaseeheaderComponent implements OnInit {
  activeTab = 'market';

  constructor(private _router: Router,private _api: ApiService) { }

  ngOnInit(): void {
  }

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
