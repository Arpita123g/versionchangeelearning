import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-businesfoodforthought',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule,MatIconModule], 
  templateUrl: './businesfoodforthought.component.html',
  styleUrls: ['./businesfoodforthought.component.scss']
})
export class BusinesfoodforthoughtComponent extends AbstractComponent {
  res: any = [];
  // status:boolean = true;
  defaultcase: string = "";
  foodforthought = [
    {
      question: ["y5", "y5"], //y5

      option: [["z5", "z6", "z7"], ["z5", "z6", "z7"]], //z5,z6,z7

      feedback: [["aa5", "aa6", "aa7"], ["aa5", "aa6", "aa7"]], //aa5.aa6.aa7

      score: [["ab5", "ab6", "ab7"], ["ab5", "ab6", "ab7"]], //ab5,ab6,ab7

      rigor: [["ab51", "ab52", "ab53"], ["ab51", "ab52", "ab53"]], //ab51,ab52,ab53

      structuring: [["ac51", "ac52", "ac53"], ["ac51", "ac52", "ac53"]], //ac51,ac52,ac53

      synthesis: [["ad51", "ad52", "ad53"], ["ad51", "ad52", "ad53"]], //ad51,ad52,ad53

      business: [["ae51", "ae52", "ae53"], ["ae51", "ae52", "ae53"]], //ae51,ae52,ae53

    },
    {
      question: ["y9", "y9"], //y9

      option: [["z9", "z10", "z11"], ["z9", "z10", "z11"]], //z9,z10,z11

      feedback: [["aa9", "aa10", "aa11"], ["aa9", "aa10", "aa11"]], //aa9.aa10.aa11

      score: [["ab9", "ab10", "ab11"], ["ab9", "ab10", "ab11"]], //ab9,ab10,ab11

      rigor: [["ab54", "ab55", "ab56"], ["ab54", "ab55", "ab56"]], //ab54,ab55,ab56

      structuring: [["ac54", "ac55", "ac56"], ["ac54", "ac55", "ac56"]], //ac54,ac55,ac56

      synthesis: [["ad54", "ad55", "ad56"], ["ad54", "ad55", "ad56"]], //ad54,ad55,ad56

      business: [["ae54", "ae55", "ae56"], ["ae54", "ae55", "ae56"]], //ae54,ae55,ae56

    },
    {
      question: ["y13", "y13"], //y13

      option: [["z13", "z14"], ["z13", "z14"]], //z13,z14

      feedback: [["aa13", "aa14"], ["aa13", "aa14"]], //aa13.aa14

      score: [["ab13", "ab14"], ["ab13", "ab14"]], //ab13,ab14

      rigor: [["ab57", "ab58"], ["ab57", "ab58"]], //ab57,ab58

      structuring: [["ac57", "ac58"], ["ac57", "ac58"]], //ac57,ac58

      synthesis: [["ad57", "ad58"], ["ad57", "ad58"]], //ad57,ad58

      business: [["ae57", "ae58"], ["ae57", "ae58"]], //ae57,ae58

    },
    {
      question: ["y16", "y16"], //y16

      option: [["z16", "z17", "z18"], ["z16", "z17", "z18"]], //z16,z17,z18

      feedback: [["aa16", "aa17", "aa18"], ["aa16", "aa17", "aa18"]], //aa16,aa17,aa18

      score: [["ab16", "ab17", "ab18"], ["ab16", "ab17", "ab18"]], //ab16,ab17,ab18

      rigor: [["ab59", "ab60", "ab61"], ["ab59", "ab60", "ab61"]], //ab59,ab60,ab61

      structuring: [["ac59", "ac60", "ac61"], ["ac59", "ac60", "ac61"]], //ac59,ac60,ac61

      synthesis: [["ad59", "ad60", "ad61"], ["ad59", "ad60", "ad61"]], //ad59,ad60,ad61

      business: [["ae59", "ae60", "ae61"], ["ae59", "ae60", "ae61"]], //ae59,ae60,ae61

    },

    {
      question: ["y20", "y20"], //y20

      option: [["z20", "z21", "z22"], ["z20", "z21", "z22"]], //z20,z21,z22

      feedback: [["aa20", "aa21", "aa22"], ["aa20", "aa21", "aa22"]], //aa20,aa21,aa22

      score: [["ab20", "ab21", "ab22"], ["ab20", "ab21", "ab22"]], //ab20,ab21,ab22

      rigor: [["ab62", "ab63", "ab64"], ["ab62", "ab63", "ab64"]], //ab62,ab63,ab64

      structuring: [["ac62", "ac63", "ac64"], ["ac62", "ac63", "ac64"]], //ac62,ac63,ac64

      synthesis: [["ad62", "ad63", "ad64"], ["ad62", "ad63", "ad64"]], //ad62,ad63,ad64

      business: [["ae62", "ae63", "ae64"], ["ae62", "ae63", "ae64"]], //ae62,ae63,ae64

    },
    {
      question: ["y24", "y24"], //y24

      option: [["z24", "z25"], ["z24", "z25"]], //z24,z25

      feedback: [["aa24", "aa25"], ["aa24", "aa25"]], //aa24.aa25

      score: [["ab24", "ab25"], ["ab24", "ab25"]], //ab24,ab25

      rigor: [["ab65", "ab66"], ["ab65", "ab66"]], //ab65,ab66

      structuring: [["ac65", "ac66"], ["ac65", "ac66"]], //ac65,ac66

      synthesis: [["ad65", "ad66"], ["ad65", "ad66"]], //ad65,ad66

      business: [["ae65", "ae66"], ["ae65", "ae66"]], //ae65,ae66

    },
    {
      question: ["y27", "y27"], //y27

      option: [["z27", "z28", "z29"], ["z27", "z28", "z29"]], //z27,z28,z29

      feedback: [["aa27", "aa28", "aa29"], ["aa27", "aa28", "aa29"]], //aa27,aa28,aa29

      score: [["ab27", "ab28", "ab29"], ["ab27", "ab28", "ab29"]], //ab27,ab28,ab29

      rigor: [["ab67", "ab68", "ab69"], ["ab67", "ab68", "ab69"]], //ab67,ab68,ab69

      structuring: [["ac67", "ac68", "ac69"], ["ac67", "ac68", "ac69"]], //ac67,ac68,ac69

      synthesis: [["ad67", "ad68", "ad69"], ["ad67", "ad68", "ad69"]], //ad67,ad68,ad69

      business: [["ae67", "ae68", "ae69"], ["ae67", "ae68", "ae69"]], //ae67,ae68,ae69

    },
    {
      question: ["y31", "y31"], //y31

      option: [["z31", "z32", "z33"], ["z31", "z32", "z33"]], //z31,z32,z33

      feedback: [["aa31", "aa32", "aa33"], ["aa31", "aa32", "aa33"]], //aa31,aa32,aa33

      score: [["ab31", "ab32", "ab33"], ["ab31", "ab32", "ab33"]], //ab31,ab32,ab33

      rigor: [["ab70", "ab71", "ab72"], ["ab70", "ab71", "ab72"]], //ab70,ab71,ab72

      structuring: [["ac70", "ac71", "ac72"], ["ac70", "ac71", "ac72"]], //ac70,ac71,ac72

      synthesis: [["ad70", "ad71", "ad72"], ["ad70", "ad71", "ad72"]], //ad70,ad71,ad72

      business: [["ae70", "ae71", "ae72"], ["ae70", "ae71", "ae72"]], //ae70,ae71,ae72

    },
    {
      question: ["y35", "y35"], //y35

      option: [["z35", "z36"], ["z35", "z36"]], //z35,z36

      feedback: [["aa35", "aa36"], ["aa35", "aa36"]], //aa35.aa36

      score: [["ab35", "ab36"], ["ab35", "ab36"]], //ab35,ab36

      rigor: [["ab73", "ab74"], ["ab73", "ab74"]], //ab73,ab74

      structuring: [["ac73", "ac74"], ["ac73", "ac74"]], //ac73,ac74

      synthesis: [["ad73", "ad74"], ["ad73", "ad74"]], //ad73,ad74

      business: [["ae73", "ae74"], ["ae73", "ae74"]], //ae73,ae74

    },
    {
      question: ["y38", "y38"], //y35

      option: [["z38", "z39", "z40"], ["z38", "z39", "z40"]], //z35,z36

      feedback: [["aa38", "aa39", "aa40"], ["aa38", "aa39", "aa40"]], //aa35.aa36

      score: [["ab38", "ab39", "ab40"], ["ab38", "ab39", "ab40"]], //ab35,ab36

      rigor: [["ab75", "ab76", "ab77"], ["ab75", "ab76", "ab77"]], //ab73,ab74

      structuring: [["ac75", "ac76", "ac77"], ["ac75", "ac76", "ac77"]], //ac73,ac74

      synthesis: [["ad75", "ad76", "ad77"], ["ad75", "ad76", "ad77"]], //ad73,ad74

      business: [["ae75", "ae76", "ae77"], ["ae75", "ae76", "ae77"]], //ae73,ae74

    },
    {
      question: ["y42", "y42"], //y42

      option: [["z42", "z43", "z44"], ["z42", "z43", "z44"]], //z42,z43,z44

      feedback: [["aa42", "aa43", "aa44"], ["aa42", "aa43", "aa44"]], //aa42,aa43,aa44

      score: [["ab42", "ab43", "ab44"], ["ab42", "ab43", "ab44"]], //ab42,ab43,ab44

      rigor: [["ab78", "ab79", "ab80"], ["ab78", "ab79", "ab80"]], //ab78,ab79,ab80

      structuring: [["ac78", "ac79", "ac80"], ["ac78", "ac79", "ac80"]], //ac78,ac79,ac80

      synthesis: [["ad78", "ad79", "ad80"], ["ad78", "ad79", "ad80"]], //ad78,ad79,ad80

      business: [["ae78", "ae79", "ae80"], ["ae78", "ae79", "ae80"]], //ae78,ae79,ae80

    },
    {
      question: ["y46", "y46"], //y46

      option: [["z46", "z47"], ["z46", "z47"]], //z46,z47

      feedback: [["aa46", "aa47"], ["aa46", "aa47"]], //aa46.aa47

      score: [["ab46", "ab47"], ["ab46", "ab47"]], //ab46,ab47  

      rigor: [["ab81", "ab82"], ["ab81", "ab82"]], //ab81,ab82

      structuring: [["ac81", "ac82"], ["ac81", "ac82"]], //ac81,ac82

      synthesis: [["ad81", "ad82"], ["ad81", "ad82"]], //ad81,ad82

      business: [["ae81", "ae82"], ["ae81", "ae82"]], //ae81,ae82

    },

  ];
  Instructorelementdetailssub: Subscription;
  instructorcarddetails: any = [];
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
    this.Instructorelementdetailssub = this._global.instructorelementdetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }

  override ngOnInit(): void {
    // this.defaultcase = this.casemanagementcoursedata.defaultcase;
    this.getFetchData();
    let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
  }
  getFetchData() {
    //***********it will be uncommitted*******************/
    let getSelectTab = localStorage.getItem('selectedTab');
    if (getSelectTab == 'cesimcase') {
      let apiname = "/businessbasiccasemanagementmaster/fetchbusinessbasiccasemanagementmaster"
      this._api.fetchaCaseFromMaster1(this.instructorcarddetails.courseDetails.simulation, this.instructorcarddetails.courseDetails.createdcasename, this.instructorcarddetails.coursedetailsid).subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              for (let i = 0; i < this.foodforthought.length; i++) {
                this.foodforthought[i].question[0] = data.resultList[0][this.foodforthought[i].question[0]];
                for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                  this.foodforthought[i].option[0][j] = data.resultList[0][this.foodforthought[i].option[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                  this.foodforthought[i].feedback[0][j] = data.resultList[0][this.foodforthought[i].feedback[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
                  this.foodforthought[i].score[0][j] = data.resultList[0][this.foodforthought[i].score[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                  this.foodforthought[i].rigor[0][j] = data.resultList[0][this.foodforthought[i].rigor[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                  this.foodforthought[i].structuring[0][j] = data.resultList[0][this.foodforthought[i].structuring[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                  this.foodforthought[i].synthesis[0][j] = data.resultList[0][this.foodforthought[i].synthesis[0][j]];
                }
                for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                  this.foodforthought[i].business[0][j] = data.resultList[0][this.foodforthought[i].business[0][j]];
                }
              }
            }
            this.checkloading = false;

          }
          this.checkloading = false;
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })
    } else {
      let apiname = "/businessbasiccasemanagement/fetchbusinessbasiccasemanagement"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < this.foodforthought.length; i++) {
                  this.foodforthought[i].question[0] = data.resultList[0][this.foodforthought[i].question[0]];
                  for (let j = 0; j < this.foodforthought[i].option[0].length; j++) {
                    this.foodforthought[i].option[0][j] = data.resultList[0][this.foodforthought[i].option[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].feedback[0].length; j++) {
                    this.foodforthought[i].feedback[0][j] = data.resultList[0][this.foodforthought[i].feedback[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].score[0].length; j++) {
                    this.foodforthought[i].score[0][j] = data.resultList[0][this.foodforthought[i].score[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].rigor[0].length; j++) {
                    this.foodforthought[i].rigor[0][j] = data.resultList[0][this.foodforthought[i].rigor[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].structuring[0].length; j++) {
                    this.foodforthought[i].structuring[0][j] = data.resultList[0][this.foodforthought[i].structuring[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].synthesis[0].length; j++) {
                    this.foodforthought[i].synthesis[0][j] = data.resultList[0][this.foodforthought[i].synthesis[0][j]];
                  }
                  for (let j = 0; j < this.foodforthought[i].business[0].length; j++) {
                    this.foodforthought[i].business[0][j] = data.resultList[0][this.foodforthought[i].business[0][j]];
                  }
                }

              }
              this.checkloading = false;

            }
            this.checkloading = false;

          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }
  }

  writeFoodForThoughtValue(cellname: string, index: number, value: any) {
    let apiname = '/businessbasiccasemanagement/updatebusinessbasiccasemanagement'
    let body = {
      [cellname]: value,
    }
    this._api.updatecasemanagementdata(String(index + 1), "foodforthought", "no", 'businessbasiccasemanagement', body, {}, apiname, 'businessbasiccmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            // this.res[cellname][index] = value;
          } else {
            this.res[cellname][index] = this.res[cellname][index];
          }
        }, error: (error: any) => {
          this.checkloading = false;
          // this.driveerrorLog(error, apiname);
        }
      })
  }


  override ngOnDestroy(): void {
    this.Instructorelementdetailssub.unsubscribe();
  }
}
