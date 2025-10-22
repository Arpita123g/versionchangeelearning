import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { ProjectmanagementfoodforthoughtComponent } from '../projectmanagementfoodforthought/projectmanagementfoodforthought.component';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexNoData,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
}
@Component({
  selector: 'app-projectmanagementprojectmap',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule],
  templateUrl: './projectmanagementprojectmap.component.html',
  styleUrls: ['./projectmanagementprojectmap.component.scss'],
})
export class ProjectmanagementprojectmapComponent extends AbstractComponent {
  foodforthought: boolean = true;
  result: any = [];
  disabled: boolean[] = [];
  checkdisable: boolean = false;
  periodcellname: any;
  // projectmap: ChartOptions;

  tasks = [
    { id: 1, label: '1', x: 23, y: 100, next: [2] },
    { id: 2, label: '2', x: 100, y: 100, next: [3] },
    { id: 3, label: '3', x: 180, y: 100, next: [4] },
    { id: 4, label: '4', x: 260, y: 100, next: [5, 6] },
    { id: 5, label: '5', x: 340, y: 40, next: [16] },
    { id: 6, label: '6', x: 340, y: 160, next: [7] },
    { id: 7, label: '7', x: 420, y: 160, next: [8] },
    { id: 8, label: '8', x: 500, y: 160, next: [9, 10] },
    { id: 9, label: '9', x: 580, y: 100, next: [12] },
    { id: 10, label: '10', x: 580, y: 200, next: [11] },
    { id: 11, label: '11', x: 660, y: 160, next: [13] },
    { id: 12, label: '12', x: 660, y: 100, next: [13] },
    { id: 13, label: '13', x: 740, y: 130, next: [14] },
    { id: 14, label: '14', x: 820, y: 130, next: [15] },
    { id: 15, label: '15', x: 900, y: 130, next: [20] },
    { id: 16, label: '16', x: 420, y: 40, next: [17] },
    { id: 17, label: '17', x: 500, y: 40, next: [18] },
    { id: 18, label: '18', x: 580, y: 40, next: [19, 12] },
    { id: 19, label: '19', x: 660, y: 40, next: [20] },
    { id: 20, label: '20', x: 740, y: 40, next: [] }
  ];


  getTask(id: number) {
    return this.tasks.find(t => t.id === id);
  }

  // tasks: string[] = Array.from({ length: 20 }, (_, i) => `Task ${i + 1}`);

  // tasks: string[] = Array.from({ length: 20 }, (_, i) => `Task ${i + 1}`);
  databasecellname: string[] = ["ax8", "c5", "c6,c7,c8"];

  constructor(
    _router: Router,
    _login: LoginService,
    _global: GlobalService,
    _alert: SnackbaralertService,
    _api: ApiService,
    _restapiservice: RestapiService,
    public dialog: MatDialog,
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    // this.projectmap = {
    //   series: [
    //     {
    //       data: [
    //         { x: 'Task 1', y: [0, 1] },
    //         { x: 'Task 2', y: [1, 2] },
    //         { x: 'Task 3', y: [2, 3] },
    //         { x: 'Task 4', y: [3, 4] },
    //         { x: 'Task 5', y: [4, 5] },
    //         { x: 'Task 6', y: [4, 5] }, // same level as Task 5
    //         { x: 'Task 7', y: [5, 6] },
    //         { x: 'Task 8', y: [6, 7] },
    //         { x: 'Task 9', y: [7, 8] },
    //         { x: 'Task 10', y: [7, 8] }, // same as Task 9
    //         { x: 'Task 11', y: [8, 9] },
    //         { x: 'Task 12', y: [9, 10] },
    //         { x: 'Task 13', y: [9, 10] },
    //         { x: 'Task 14', y: [10, 11] },
    //         { x: 'Task 15', y: [11, 12] },
    //         { x: 'Task 16', y: [5, 6] }, // dependency from Task 5
    //         { x: 'Task 17', y: [6, 7] },
    //         { x: 'Task 18', y: [10, 11] },
    //         { x: 'Task 19', y: [11, 12] },
    //         { x: 'Task 20', y: [12, 13] },
    //       ],
    //     },
    //   ],
    //   chart: {
    //     height: 600,
    //     type: 'rangeBar',
    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: true,
    //       rangeBarGroupRows: true,
    //     },
    //   },
    //   dataLabels: {
    //     enabled: true,
    //   },
    //   xaxis: {
    //     type: 'numeric',
    //     title: { text: 'Timeline' },
    //   },
    // };
  }

  override ngOnInit(): void {
    this.getFetchData();
    this.result.projectmanagementdata = {}
  }

  getFetchData() {
    let apiName = '/projectmanagement/fetchprojectmanagement';
    // let apiname = '/consumerbehaviour/testforgame'
    this._api.fetchGameData(apiName, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success" && data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].projectmanagementcmid);

            if (data.resultList[0].projectmanagementCM.projectmanagementCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }
            this.result = data.resultList[0];

            // for (let i = 0; i < this.periodcellname.length; i++) {
            //   this.result[i] = data.resultList[0].projectmanagementCM[this.periodcellname[i]]
            // }
            if ((data.resultList[0].aw53 == 'yes') || (data.resultList[0].aw53 == 'Yes') || (this.timefinished)) {
              this.checkdisable = true;

            }
            // for (let i = 16; i < 33; i++) {
            //   this.result[i] = data.resultList[0][this.databasecellname[i - 16]];
            //   if (i > 18) {
            //     if (this.result[i] == "Yes") {
            //       this.result[i] = true;
            //     } else if (this.result[i] == "No") {
            //       this.result[i] = false;
            //     } else if (this.result[i] == "1") {
            //       this.result[i] = 'Yes';
            //     } else if (this.result[i] == "0") {
            //       this.result[i] = 'No';
            //     }
            //   }
            // }

            // if (data.resultList[0].projectmanagementCM.projectmanagementCMActiveStatus.emissionsstatus == "active") {
            //   this.showEmmisionStatus = true;
            // } else {
            //   this.showEmmisionStatus = false;
            // }

            // for (let i = 0; i < 3; i++) {
            //   this.jsonarray1.push({ 'x': data.resultList[0][this.truckinggraphvalue[i][0]], 'y': Number(data.resultList[0][this.truckinggraphvalue[i][1]]) });

            // }
            // this.Trucking.series = [{ "name": 'value', "data": this.jsonarray1 }]
            this.checkloading = false;
          } else {
            this.checkloading = false;
          }
        },
        error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiName);
        },
      });
  }


  projectmanagement(cellname: any) {
    let apiName = '/projectmanagement/singleinputprojectmanagement';
    let projectInputData = {
      [cellname]: this.result.projectmanagementdata[cellname],
      // "ax8":this.result[0],
    };
    console.log('Sending projectInputData:', projectInputData);

    // this._api
    //   .writeGameData(
    //     'projectmanagement',
    //     1,
    //     projectInputData,
    //     apiName,
    //     'projectmanagementcmid',
    //   )
    //   .subscribe(
    //     (data: any) => {
    //       if (data.status == 'Success') {
    //         this.getFetchData();
    //       }
    //     },
    //     (error: any) => {
    //       this.checkloading = false;
    //       this.checkdisable = false;
    //       this.driveerrorLog(error, apiName);
    //     },
    //   );
  }

  openDialog(): void {
    this.dialog.open(ProjectmanagementfoodforthoughtComponent, {
      data: {},
    });
  }
}
