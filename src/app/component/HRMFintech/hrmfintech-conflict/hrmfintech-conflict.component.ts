import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { HrmfintechFoodforthoughtComponent } from '../hrmfintech-foodforthought/hrmfintech-foodforthought.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hrmfintech-conflict',
  standalone: true,
  imports: [CommonModule, MatDialogModule, RouterModule,NgApexchartsModule,MatIconModule, FormsModule],
  templateUrl: './hrmfintech-conflict.component.html',
  styleUrls: ['./hrmfintech-conflict.component.scss']
})
export class HrmfintechConflictComponent extends AbstractComponent {

  attempt: number = 0;
  result: any = [];
  inputDisabled: boolean = false;
  selectedIndex: number = 0;
  selectedScenario: number = 0;
  lockactionclicked: boolean = false;
  foodforthought: boolean = true;
  studentAnalysisCell: any = ['i394', 'i395', 'i396', 'i397', 'i398', 'i399'];

  //multiple question and answer json
  scenarios: any = [
    {
      scenariono: 1,
      case: "d356",
      options: [
        {
          optno: 1,
          title: "d357",
          inputcell: "e395"
        },
        {
          optno: 2,
          title: "d358",
          inputcell: "f395"
        },
        {
          optno: 3,
          title: "d359",
          inputcell: "g395"
        },
        {
          optno: 4,
          title: "d360",
          inputcell: "h395"
        },
      ],
      description: "",

    },
    {
      scenariono: 2,
      case: "d364",
      options: [
        {
          optno: 1,
          title: "d365",
          inputcell: "e396"
        },
        {
          optno: 2,
          title: "d366",
          inputcell: "f396"
        },
        {
          optno: 3,
          title: "d367",
          inputcell: "g396"
        },
        {
          optno: 4,
          title: "d368",
          inputcell: "h396"
        },
      ],
      description: "",

    },
    {
      scenariono: 3,
      case: "d372",
      options: [
        {
          optno: 1,
          title: "d373",
          inputcell: "e397"
        },
        {
          optno: 2,
          title: "d374",
          inputcell: "f397"
        },
        {
          optno: 3,
          title: "d375",
          inputcell: "g397"
        },
        {
          optno: 4,
          title: "d376",
          inputcell: "h397"
        },
      ],
      description: "",

    },
    {
      scenariono: 4,
      case: "d380",
      options: [
        {
          optno: 1,
          title: "d381",
          inputcell: "e398"
        },
        {
          optno: 2,
          title: "d382",
          inputcell: "f398"
        },
        {
          optno: 3,
          title: "d383",
          inputcell: "g398"
        },
        {
          optno: 4,
          title: "d384",
          inputcell: "h398"
        },
      ],
      description: "",

    },
    {
      scenariono: 5,
      case: "d388",
      options: [
        {
          optno: 1,
          title: "d389",
          inputcell: "e399"
        },
        {
          optno: 2,
          title: "d390",
          inputcell: "f399"
        },
        {
          optno: 3,
          title: "d391",
          inputcell: "g399"
        },
        {
          optno: 4,
          title: "d392",
          inputcell: "h399"
        },
      ],
      description: "",

    }
  ]


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

  }

  override ngOnInit(): void {
    this.attempt = Number(this.noofattempt) - 1;
    this.getFetchData();
  }

  getFetchData() {
    let apiname = '/hrmgame/fetchhrmgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].hrmGameCM.hrmgamecmid);
            this.result = data.resultList[0];

            //if submit prove yes or time finish then all input should be disabled
            if ((data.resultList[0].decisions.d417 == 'yes') || (this.timefinished)) {
              this.inputDisabled = true;
            }

            //After getting student analysis and lock..then it will be disabled
            this.scenarios[this.attempt].description = this.result.decisions[this.studentAnalysisCell[this.noofattempt]]
            if ((this.scenarios[this.attempt].description) != "0") {
              this.lockactionclicked = true;
            }

            //foodforthought enabled or disabled depend on status
            if (data.resultList[0].hrmGameCM.hrmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
              this.foodforthought = false;
            }
            this.checkloading = false;
          }
        }
        this.checkloading = false;
      }, error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    })
  }

  //Any input submit or write call
  submitClick(index: any) {
    let apiname = "/hrmgame/singleinputhrmgame";
    // Construct the decisions object
    let decisions: { [key: string]: number } = {};

    // Iterate over all indices (assuming there are 4)
    for (let i = 0; i < 4; i++) {
      const inputCell = this.scenarios[Number(this.noofattempt) - 1].options[i].inputcell;
      decisions[inputCell] = i === index ? 1 : 0;
    }
    let body = {
      decisions
    }

    this._api.writeGameData("hrmgame", 3,
      body, apiname, 'hrmgamecmid').subscribe((data: any) => {
        if (data.status == "Success") {
          this.lockactionclicked = true;
          // this.inputDisabled = true;
        }

      }, (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      })
  }

  //after putting student analysis call lock action function
  lockaction(studentanalysistext: string) {
    if (studentanalysistext.length < 2) {
      return this._alert.error("Please write something");
    }
    const apiname = "/hrmgame/singleinputhrmgame";
    const body = { decisions: { [this.studentAnalysisCell[this.noofattempt]]: studentanalysistext } };

    this._api.writeGameData("hrmgame", 3, body, apiname, 'hrmgamecmid').subscribe(
      (data: any) => {
        if (data.status === "Success") {
          this.lockactionclicked = true;
        }
      },
      (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    );
  }

  openDialog(): void {
    this.dialog.open(HrmfintechFoodforthoughtComponent, {
      data: {},
    });
  }

}


