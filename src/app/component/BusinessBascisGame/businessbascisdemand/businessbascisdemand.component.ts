import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { BusinessbasicFoodforthoughtComponent } from '../businessbasicfoodforthought/businessbasicfoodforthought.component';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface barchart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
}

@Component({
  selector: 'app-businessbascisdemand',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule, MatIconModule,TippyDirective,FormsModule],
  templateUrl: './businessbascisdemand.component.html',
  styleUrls: ['../BusinessBasicsGame.scss']
})
export class BusinessbascisdemandComponent extends AbstractComponent {
  demandchart: barchart;
  selectedImage: any = null;
  showText = false;
  jsonarray1: any = [];
  value: string = '';
  result: any = [];
  businessday: string = '';
  c18: string = '';
  checkdisable: boolean = false;
  locationvalue: string = '';
  foodforthought: boolean = true;
  demandrange = [
    ['b4', 'c4'],
    ['b5', 'c5'],
    ['b6', 'c6'],
    ['b7', 'c7'],
    ['b8', 'c8'],
    ['b9', 'c9'],
    ['b10', 'c10'],
    ['b11', 'c11'],
    ['b12', 'c12'],
    ['b13', 'c13'],
    ['b14', 'c14'],
    ['b15', 'c15'],
  ]

  @Input() show: boolean = true;
  @Input() isShow3: boolean = false;
  demandcellname: any = ['c19', 'f12', 'f8', 'f4', 'f6', 'f10',]
  selectedIndex: number = 0;
  demandvalue: number = 0;
  seasons: any = [
    {
      "val": "Riya Sharma, 21, a business management student, enjoys tea to relax during her demanding college life. She savors a variety of teas and starts her day with a classic brew. Her tea visits are frequent, for focus, socialization, and comfort. Riya cherishes tea shops with diverse choices in a cozy setting, promoting sustainability. Balancing academics and self-care while exploring new tea flavors are her challenges. Riya sees tea as her college journey companion, offering focus, tranquillity, and balance.",
      "img": "assets/images/businessbasics/women.png"
    },
    {
      "val": "Arjun Patel, 32, a dedicated IT professional, finds comfort in exploring various tea types, with a preference for Indian masala chai and green tea. His morning begins with chai, followed by tea breaks at work for rejuvenation. Tea offers him relaxation, a moment of tranquility, and a ritual of pleasure amidst his demanding job. Arjun favors tea shops with a variety of quality teas, unique blends, a cozy ambiance, and sustainable practices. He views tea as a solace-providing companion in his corporate life, delivering calmness and inspiration.",
      "img": "assets/images/businessbasics/man1.png"
    },
    {
      "val": "Sharma, 21, a business management student, enjoys tea to relax during her demanding college life. She savors a variety of teas and starts her day with a classic brew. Her tea visits are frequent, for focus, socialization, and comfort. Riya cherishes tea shops with diverse choices in a cozy setting, promoting sustainability. Balancing academics and self-care while exploring new tea flavors are her challenges. Riya sees tea as her college journey companion, offering focus, tranquillity, and balance.",
      "img": "assets/images/businessbasics/woo.png"
    },
    {
      "val": "Keya, 21, a business management student, enjoys tea to relax during her demanding college life. She savors a variety of teas and starts her day with a classic brew. Her tea visits are frequent, for focus, socialization, and comfort. Riya cherishes tea shops with diverse choices in a cozy setting, promoting sustainability. Balancing academics and self-care while exploring new tea flavors are her challenges. Riya sees tea as her college journey companion, offering focus, tranquillity, and balance.",
      "img": "assets/images/businessbasics/man2.png"
    }
  ];


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.demandchart = {
      series: [],
      chart: {
        height: 250,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {},
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          borderRadius: 3,
        },
      },
      dataLabels: this.datalabels[0],
      xaxis: this.xaxis[11],
      fill: this.fill[0],
      yaxis: this.yaxis[0],
      tooltip: {
        y: {
          formatter: undefined,
          title: {
            formatter: (seriesName: any) => '',
          },
        },
        x: {
          show: false
        }
      },
      title: {
        text: 'Estimated Monthly Demand - Tea Cups, per shop',
        offsetY: 0,
        align: 'center',
        style: {
          fontWeight: 'bold',
        },
      },
    };
  }

  override ngOnInit(): void {
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/businessbasic/fetchbusinessbasic';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this._global.casemanagementid.next(data.resultList[0].businessbasiccasemanagementid);
              if (data.resultList[0].businessBasicCaseManagement.businessBasicCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              this.jsonarray1 = [];
              for (let i = 0; i < this.demandrange.length; i++) {
                this.jsonarray1.push({ 'x': data.resultList[0][this.demandrange[i][0]], 'y': Number(data.resultList[0][this.demandrange[i][1]]) });
              }
              this.demandchart.series = [{ "name": "value", "data": this.jsonarray1 }]

              this.c18 = data.resultList[0].c18;
              if (this.c18 == data.resultList[0].businessBasicCaseManagement.d7) {
                this.locationvalue = data.resultList[0].businessBasicCaseManagement.j18;
              } else {
                this.locationvalue = data.resultList[0].businessBasicCaseManagement.j19;
              }
              

              for (let i = 0; i < this.demandcellname.length; i++) {
                this.result[i] = data.resultList[0][this.demandcellname[i]];
              }
              this.demandvalue = this.result[0];
              if ((data.resultList[0].h4 == 'yes') || (this.timefinished)) {
                this.checkdisable = true;
              }
            }
            this.checkloading = false;
          } else {
            this.checkloading = false;
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
  }

  writedemand() {
    let apiname = '/businessbasic/singleinputbusinessbasic';
    if (this.result[0] < 30 || this.result[0] > 300) {
      this._alert.error('The expected range is between 30 to 300');
      this.result[0] = this.demandvalue;

    } else {
      let demandData = {
        "c19": this.result[0]
      }
      this._api.businessdatawrite("businessbasic", 2,
        demandData, apiname, 'businessbasiccasemanagementid').subscribe((data: any) => {
          if (data.status == "Success") {
            this.demandvalue = this.result[0];
          }

        }, (error: any) => {
          this.checkloading = false;
          this.checkdisable = false;
          this.driveerrorLog(error, apiname);
        })
    }
  }

  setIndex(i: number) {
    this.selectedIndex = i;
  }

  openDialog(): void {
    this.dialog.open(BusinessbasicFoodforthoughtComponent, {
      data: {},
    });


  }
}
