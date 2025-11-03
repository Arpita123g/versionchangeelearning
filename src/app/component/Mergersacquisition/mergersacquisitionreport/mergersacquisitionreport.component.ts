import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexMarkers,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EditorConfig } from 'ngx-simple-text-editor';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SheetdataService } from 'src/app/service/sheet/sheetdata.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MarkdownModule } from 'ngx-markdown';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

interface RadarChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-mergersacquisitionreport',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule,
     MarkdownModule, TippyDirective, MatDialogModule],
  templateUrl: './mergersacquisitionreport.component.html',
  styleUrls: ['./mergersacquisitionreport.component.scss']
})
export class MergersacquisitionreportComponent extends AbstractComponent {
  rigorcharts: RadarChart;
  jsonarray1: any = [];
  jsonarray2: any = [];
  jsonarray3: any = [];
  jsonarray4: any = [];
  jsonarray5: any = [];
  jsonarray6: any = [];
  jsonarray7: any = [];
  resultbody: any = [];
  roundname: string = "";
  dropdownvalue: any = [];
  result: any = [];
  platform: any = [];
  platformnames: any = [];
  optional: any[] = [];
  coursename: string = "";
  getallvalues: any = '';
  submitprove: string = "";
  incomepercent: any = [];
  incomepercentnames: any = [];
  cashfromfinancing: number = 0;
  optionalcase: any = ['foodforthoughtstatus'];
  contentvalue: string = '';
  defaultcase: string = "";
  config: EditorConfig = {
    buttons: [],

  };
  resultcellname: any = ['b24', 'j24', 'h24', 'i24', 'f24', 'g24', 'c29', 'h29', 'g28', 'c35', 'c36', 'c37', 'k24',//12
    'f38', 'f39', 'l24'];

  abc: any = "<div>Profile: Pioneer in AI-driven sustainable solutions for EVs, including smart energy consumption.</div><div><br></div><div>Advantage: Boosts vehicle efficiency by up to 20%.</div><div><br></div><div>Financials & Valuation:</div><div><br></div><div>Revenue: INR 500M</div><div>Gross Margin: 40%</div><div>Net Margin: 18%</div><div>Valuation: INR 3B</div><div><br></div><div>Shareholder Structure: Privately owned, major stakes held by tech magnates.</div>"

  xyz: any = "<div><span style=\"font-size: 13.2px;\">Strategic Alignment: AI enhancements align with the global trend of smart, connected vehicles.</span></div><div><span style=\"font-size: 13.2px;\">Financial Feasibility: Reasonably priced, allowing for a balanced financing mix.</span></div><div><span style=\"font-size: 13.2px;\">Risk Assessment: Integrating AI solutions into existing product lines might pose initial challenges.</span></div><div><span style=\"font-size: 13.2px;\">Potential Returns: Sales boost from advanced vehicle features, potential new revenue streams from AI-driven services.</span></div>"

  rigorchartsrange: any = [
    ['Rigor', 'u41', '85', '65'],
    ['Structuring', 'u42', '87', '60'],
    ['Synthesis', 'u43', '82', '64'],
    ['Business Judgement', 'u44', '84', '68'],
  ]


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private excelsheetservice: SheetdataService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.rigorcharts = {
      series: [],
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      title: {
        text: ''
      },
      stroke: {
        width: 2
      },
      fill: {
        opacity: 0.1
      },
      markers: {
        size: 0
      },
      xaxis: {
        categories: ['Rigor', 'Structuring', 'Synthesis', 'Business Jugement',]
      },
      yaxis: {
        show: false,
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },

    };

  }

  override ngOnInit(): void {
    this.getFetchData(this.noofattempt);
  }

  roundClick() {
    this.checkloading = true;
    let attempt = this.roundname.split(" ");
    this.getFetchData(attempt[1]);
  }


  getFetchData(attempt: string) {
    let apiname = '/mergersacquisition/fetchmergersacquisition';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.jsonarray1 = [];
              this.jsonarray2 = [];
              this.jsonarray3 = [];
              this.jsonarray4 = [];
              this.result = [];
              this.submitprove = data.resultList[0].ac30;
              if ((this.submitprove == "No") || (this.submitprove == "no") || (this.submitprove == null)) {
                this.getFetchData(String(Number(this.noofattempt) - 1));
              } else {
                this._global.casemanagementid.next(data.resultList[0].mergersacquisitioncmid);
                let attempt = data.resultList[0].attempt;
                this.roundname = "Round " + attempt;
                if (attempt > 0) {
                  for (let i = 1; i < attempt + 1; i++) {
                    this.dropdownvalue[i - 1] = "Round " + i;
                  }
                }
                for (let i = 0; i < this.resultcellname.length; i++) {
                  this.result[i] = data.resultList[0][this.resultcellname[i]];
                }
                this.cashfromfinancing = Number(this.result[3]) + Number(this.result[4])


                for (let i = 0; i < this.optionalcase.length; i++) {
                  const caseStatus = data.resultList[0].mergersAcquisitionCM.mergersAcquisitionCMActiveStatus[this.optionalcase[i]];
                  if (caseStatus == "inactive") {

                    this.optional[i] = false;
                  } else {
                    this.optional[i] = true;
                  }
                }

                //Rigorchar

                for (let i = 0; i < this.rigorchartsrange.length; i++) {
                  this.jsonarray1.push({ 'x': this.rigorchartsrange[i][0], 'y': data.resultList[0][(this.rigorchartsrange[i][1])] * 100 });
                  this.jsonarray2.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][2]) });
                  this.jsonarray3.push({ 'x': this.rigorchartsrange[i][0], 'y': Number(this.rigorchartsrange[i][3]) });
                }
                this.rigorcharts.series = [{ "name": "You", "data": this.jsonarray1 }, { "name": "90% Percentile", "data": this.jsonarray2 }, { "name": "Average", "data": this.jsonarray3 }]
               
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


  downloadreportmergersacquisition() {
    let apiname = '/mergersacquisition/fetchmergersacquisition';
    this.excelsheetservice.downloadReportforgame(apiname, "mergersacquisition", this.useremail, this.coursecode, this.studentsectionid, this.noofattempt, this.studentelementdetailsvalue.courseDetails.coursename,
      this.studentelementdetailsvalue.coursedetailsid);

  }

}
