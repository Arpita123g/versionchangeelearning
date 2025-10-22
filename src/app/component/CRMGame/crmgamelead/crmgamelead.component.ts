import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CrmgamefoodforthoughtComponent } from '../crmgamefoodforthought/crmgamefoodforthought.component';
import { timeStamp } from 'console';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';

@Component({
  selector: 'app-crmgamelead',
  standalone:true,
  imports: [CommonModule, FormsModule,MatIconModule,NgApexchartsModule, TippyDirective],
  templateUrl: './crmgamelead.component.html',
  styleUrls: ['./crmgamelead.component.scss']
})
export class CrmgameleadComponent extends AbstractComponent {
  foodforthought: boolean = true;
  checkdisable: boolean = false;
  result: any = [];
  disabled: boolean[] = [];
  inputDisabled: boolean = false;
  headers: string[] = [];
  leads: any = [];
  fetchdata: any = [];
  languageid: number = 0;

  // fghjkldfghj


  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {

    this.getFetchData();
  }
  language: any = [];
  databasecellname: string[] = [
    'al9', 'al10', 'al11', 'al12', 'al13', 'al14', 'al15', 'al16', 'al17', 'al18', //9
    'al19', 'al20', 'al21', 'al22', 'al23', 'al24', 'al25', 'al26', 'al27', 'al28', //19
    'al29', 'al30', 'al31', 'al32', 'al33' //24
  ];
  languagecellname: string[] = [
    'b86', 'b87', 'b88', 'b89', 'b90',
    'b91', 'b92', 'b95', 'b96', 'b97', 'b98', 'b99'
  ]

  periodcellname: string[] = [
    'h6', 'i6', 'j6', 'k6', 'l6', 'm6', 'n6', 'o6', 'p6', 'q6', 'r6', //10
    'h7', 'i7', 'j7', 'k7', 'l7', 'm7', 'n7', 'o7', 'p7', 'q7', 'r7', //21
    'h8', 'i8', 'j8', 'k8', 'l8', 'm8', 'n8', 'o8', 'p8', 'q8', 'r8', //32
    'h9', 'i9', 'j9', 'k9', 'l9', 'm9', 'n9', 'o9', 'p9', 'q9', 'r9', //43
    'h10', 'i10', 'j10', 'k10', 'l10', 'm10', 'n10', 'o10', 'p10', 'q10', 'r10', //54
    'h11', 'i11', 'j11', 'k11', 'l11', 'm11', 'n11', 'o11', 'p11', 'q11', 'r11', //65
    'h12', 'i12', 'j12', 'k12', 'l12', 'm12', 'n12', 'o12', 'p12', 'q12', 'r12', //76
    'h13', 'i13', 'j13', 'k13', 'l13', 'm13', 'n13', 'o13', 'p13', 'q13', 'r13', //87
    'h14', 'i14', 'j14', 'k14', 'l14', 'm14', 'n14', 'o14', 'p14', 'q14', 'r14', //98
    'h15', 'i15', 'j15', 'k15', 'l15', 'm15', 'n15', 'o15', 'p15', 'q15', 'r15', //109
    'h16', 'i16', 'j16', 'k16', 'l16', 'm16', 'n16', 'o16', 'p16', 'q16', 'r16',  //120
    'h17', 'i17', 'j17', 'k17', 'l17', 'm17', 'n17', 'o17', 'p17', 'q17', 'r17', // 131
    'h18', 'i18', 'j18', 'k18', 'l18', 'm18', 'n18', 'o18', 'p18', 'q18', 'r18', // 142
    'h19', 'i19', 'j19', 'k19', 'l19', 'm19', 'n19', 'o19', 'p19', 'q19', 'r19', //153
    'h20', 'i20', 'j20', 'k20', 'l20', 'm20', 'n20', 'o20', 'p20', 'q20', 'r20', //164
    'h21', 'i21', 'j21', 'k21', 'l21', 'm21', 'n21', 'o21', 'p21', 'q21', 'r21', //175
    'h22', 'i22', 'j22', 'k22', 'l22', 'm22', 'n22', 'o22', 'p22', 'q22', 'r22', //186
    'h23', 'i23', 'j23', 'k23', 'l23', 'm23', 'n23', 'o23', 'p23', 'q23', 'r23', //197
    'h24', 'i24', 'j24', 'k24', 'l24', 'm24', 'n24', 'o24', 'p24', 'q24', 'r24', //208
    'h25', 'i25', 'j25', 'k25', 'l25', 'm25', 'n25', 'o25', 'p25', 'q25', 'r25', //219
    'h26', 'i26', 'j26', 'k26', 'l26', 'm26', 'n26', 'o26', 'p26', 'q26', 'r26', //230
    'h27', 'i27', 'j27', 'k27', 'l27', 'm27', 'n27', 'o27', 'p27', 'q27', 'r27', //241
    'h28', 'i28', 'j28', 'k28', 'l28', 'm28', 'n28', 'o28', 'p28', 'q28', 'r28', //252
    'h29', 'i29', 'j29', 'k29', 'l29', 'm29', 'n29', 'o29', 'p29', 'q29', 'r29', //263
    'h30', 'i30', 'j30', 'k30', 'l30', 'm30', 'n30', 'o30', 'p30', 'q30', 'r30', //274
    'h31', 'i31', 'j31', 'k31', 'l31', 'm31', 'n31', 'o31', 'p31', 'q31', 'r31', //285
  ];

  languageCellArray: any = [
    // ['b100', 'b101', 'b102', 'b103', 'b104', 'b105', 'b106', 'b107', 'b108', 'b109',
    //   'b110', 'b111', 'b112', 'b113', 'b114', 'b115', 'b116', 'b117', 'b118', 'b119',
    //   'b120', 'b121', 'b122', 'b123', 'b124'],//contact 0

    // ['b125', 'b126', 'b127', 'b128', 'b125', 'b126', 'b127', 'b125', 'b126', 'b127', 'b128',
    //   'b125', 'b126', 'b127', 'b125', 'b126', 'b127', 'b128', 'b125',
    //   'b126', 'b127', 'b125', 'b126', 'b127', 'b128'],//lead source 1

    // ['b129', 'b130', 'b131', 'b129', 'b131', 'b129', 'b130', 'b131', 'b129', 'b130', 'b129', 'b130', 'b131',
    //   'b129', 'b131', 'b130', 'b129', 'b131', 'b130', 'b129', 'b131', 'b130', 'b129', 'b131', 'b130',
    // ],//indutry 2
    // ['b80', 'b81', 'b82', 'b81', 'b80', 'b82', 'b80', 'b81', 'b82', 'b80', 'b82', 'b81', 'b80', 'b82', 'b81',
    //   'b80', 'b82', 'b81', 'b80', 'b82', 'b81', 'b80', 'b82', 'b81', 'b80'
    // ],//budget 3
    // ['b132', 'b133', 'b134', 'b132', 'b133', 'b134', 'b132', 'b134', 'b132', 'b133', 'b134', 'b132', 'b134',
    //   'b132', 'b133', 'b134', 'b132', 'b133', 'b134', 'b132', 'b134', 'b133', 'b134', 'b132', 'b134'
    // ],//urgency 4
    // ['b376', 'b377', 'b378', 'b379', 'b376', 'b377', 'b380', 'b376', 'b379', 'b377', 'b378',
    //   'b376', 'b377', 'b379', 'b376', 'b377', 'b387', 'b378', 'b376', 'b377', 'b379', 'b376', 'b377', 'b380', 'b378',
    // ],//lead status 5
    // ['b182', 'b183', 'b184', 'b183', 'b182', 'b183', 'b183', 'b185', 'b182', 'b183', 'b183', 'b184', 'b182', 'b183',
    //   'b183', 'b182', 'b183', 'b185', 'b184', 'b182', 'b183', 'b183', 'b182', 'b183', 'b185', 'b184'
    // ],//stage in state 6
    // ['b135', 'b136', 'b137', 'b138', 'b135', 'b136', 'b139', 'b135', 'b138', 'b136', 'b137', 'b135', 'b136',
    //   'b138', 'b135', 'b136', '-', 'b137', 'b135', 'b136', 'b138', 'b135', 'b136', 'b139', 'b137'
    // ],//next step 7
    // ['b140', 'b141', 'b140', 'b141', 'b140', 'b141', 'b142', 'b140', 'b141', 'b141', 'b140', 'b140', 'b141',
    //   'b141', 'b140', 'b141', '-', 'b140', 'b140', 'b141', 'b141', 'b140', 'b141', 'b142', 'b140'
    // ],//follow up action 8


    ['b100', 'b125', 'b129', 'b80', 'b132', 'b382', 'b182', 'b135', 'b140'],
    ['b101', 'b126', 'b130', 'b81', 'b133', 'b383', 'b183', 'b136', 'b141'],
    ['b102', 'b127', 'b131', 'b82', 'b134', 'b384', 'b184', 'b137', 'b140'],
    ['b103', 'b128', 'b129', 'b81', 'b132', 'b385', 'b183', 'b138', 'b141'],
    ['b104', 'b125', 'b131', 'b80', 'b133', 'b382', 'b182', 'b135', 'b140'],
    ['b105', 'b126', 'b129', 'b82', 'b134', 'b383', 'b183', 'b136', 'b141'],
    ['b106', 'b127', 'b130', 'b80', 'b132', 'b386', 'b183', 'b139', 'b142'],
    ['b107', 'b125', 'b131', 'b81', 'b134', 'b382', 'b185', 'b135', 'b140'],
    ['b108', 'b126', 'b129', 'b82', 'b132', 'b385', 'b182', 'b138', 'b141'],
    ['b109', 'b127', 'b130', 'b80', 'b133', 'b383', 'b183', 'b136', 'b141'],
    ['b110', 'b128', 'b129', 'b82', 'b134', 'b384', 'b183', 'b137', 'b140'],
    ['b111', 'b125', 'b130', 'b81', 'b132', 'b382', 'b184', 'b135', 'b140'],
    ['b112', 'b126', 'b131', 'b80', 'b134', 'b383', 'b182', 'b136', 'b141'],
    ['b113', 'b127', 'b129', 'b82', 'b132', 'b385', 'b183', 'b138', 'b141'],
    ['b114', 'b125', 'b131', 'b81', 'b133', 'b382', 'b183', 'b135', 'b140'],
    ['b115', 'b126', 'b130', 'b80', 'b134', 'b383', 'b182', 'b136', 'b141'],
    ['b116', 'b127', 'b129', 'b82', 'b132', 'b387', 'b183', '-', '-'],
    ['b117', 'b128', 'b131', 'b81', 'b133', 'b384', 'b185', 'b137', 'b140'],
    ['b118', 'b125', 'b130', 'b80', 'b134', 'b382', 'b184', 'b135', 'b140'],
    ['b119', 'b126', 'b129', 'b82', 'b132', 'b383', 'b182', 'b136', 'b141'],
    ['b120', 'b127', 'b131', 'b81', 'b134', 'b385', 'b183', 'b138', 'b141'],
    ['b121', 'b125', 'b130', 'b80', 'b133', 'b382', 'b183', 'b135', 'b140'],
    ['b122', 'b126', 'b129', 'b82', 'b134', 'b383', 'b182', 'b136', 'b141'],
    ['b123', 'b127', 'b131', 'b81', 'b132', 'b386', 'b183', 'b139', 'b142'],
    ['b124', 'b128', 'b130', 'b80', 'b134', 'b384', 'b184', 'b137', 'b140']
  ];



  periodCellArray: any = [
    { leadId: 'h7', leadScore: 'n7' },
    { leadId: 'h8', leadScore: 'n8' },
    { leadId: 'h9', leadScore: 'n9' },
    { leadId: 'h10', leadScore: 'n10' },
    { leadId: 'h11', leadScore: 'n11' },
    { leadId: 'h12', leadScore: 'n12' },
    { leadId: 'h13', leadScore: 'n13' },
    { leadId: 'h14', leadScore: 'n14' },
    { leadId: 'h15', leadScore: 'n15' },
    { leadId: 'h16', leadScore: 'n16' },
    { leadId: 'h17', leadScore: 'n17' },
    { leadId: 'h18', leadScore: 'n18' },
    { leadId: 'h19', leadScore: 'n19' },
    { leadId: 'h20', leadScore: 'n20' },
    { leadId: 'h21', leadScore: 'n21' },
    { leadId: 'h22', leadScore: 'n22' },
    { leadId: 'h23', leadScore: 'n23' },
    { leadId: 'h24', leadScore: 'n24' },
    { leadId: 'h25', leadScore: 'n25' },
    { leadId: 'h26', leadScore: 'n26' },
    { leadId: 'h27', leadScore: 'n27' },
    { leadId: 'h28', leadScore: 'n28' },
    { leadId: 'h29', leadScore: 'n29' },
    { leadId: 'h30', leadScore: 'n30' },
    { leadId: 'h31', leadScore: 'n31' },
    // ['h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13', 'h14', 'h15', 'h16', 'h17', 'h18', 'h19', 'h20',
    //   'h21', 'h22', 'h23', 'h24', 'h25', 'h26', 'h27', 'h28', 'h29', 'h30', 'h31',],
    // ['n7', 'n8', 'n9', 'n10', 'n11', 'n12', 'n13', 'n14', 'n15', 'n16', 'n17', 'n18', 'n19', 'n20',
    //   'n21', 'n22', 'n23', 'n24', 'n25', 'n26', 'n27', 'n28', 'n29', 'n30', 'n31',]
  ]

  populateLeadsupdate(fetchdata: any) {
    this.leads = [];
    this.leads = this.languageCellArray.map((row: any, index: any) => ({
      id: this.fetchdata.crmGameCM.crmgameperioddata[this.periodCellArray[index]?.leadId || null],
      score: this.fetchdata.crmGameCM.crmgameperioddata[this.periodCellArray[index]?.leadScore || null],
      name: this.language[row[0]],
      source: this.language[row[1]],
      industry: this.language[row[2]],
      budget: this.language[row[3]],
      urgency: this.language[row[4]],
      status: this.language[row[5]],
      stage: this.language[row[6]],
      nextSteps: this.language[row[7]],
      followUp: this.language[row[8]],
      priority: this.fetchdata.crmgamedata[this.databasecellname[index]], // assuming last value in row is Priority
    }));

  }



  // }


  updatePriority() {
    this.headers = this.result.slice(0, 12);
    // this.headers.push('Priority');
  }
  getFetchData() {
    let apiname = '/crmgame/fetchcrmgame';
    this._api.fetchLanguageData(apiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.fetchdata = data.resultList[0];
              this.language = data.resultList[0].crmGameLM[this.languageselect.toLowerCase()];
              this._global.casemanagementid.next(data.resultList[0].crmgamecmid);
              this.languageid = data.resultList[0].crmGameLM.crmgamelmid;
              if (data.resultList[0].crmGameCM.crmGameCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              }
              for (let i = 0; i < this.languagecellname.length; i++) {
                this.result[i] = this.language[this.languagecellname[i]];
              }

              // for (let i = 0; i < this.periodcellname.length; i++) {
              //   this.result[i] = data.resultList[0].crmGameCM[this.periodcellname[i]]
              // }

              for (let i = 286; i < 311; i++) {
                this.result[i] = data.resultList[0][this.databasecellname[i - 286]]
              }


              if ((String(data.resultList[0].crmgamedata.al96) == 'yes') ||
                (this.timefinished)) {
                this.inputDisabled = true;
              } else {
                this.inputDisabled = false;
              };
              this.populateLeadsupdate(this.fetchdata)
              // this.populateLeads();
              this.updatePriority();
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


  writePriorityData(index: number) {
    let apiname = '/crmgame/singleinputcrmgame';

    const cellName = this.databasecellname[index];
    const priorityValue = this.leads[index].priority;
    let priorityInputData = {
      [cellName]: priorityValue  // Dynamically set the key-value pair
    };
    this._api.writeLanguageData("crmgame", 3,
      priorityInputData, apiname, 'crmgamecmid', this.languageselect, this.languageid, 'crmgamelmid' ).subscribe((data: any) => {
         if (data.status == "Success") {
          // this.getFetchData();
        }

      }, (error: any) => {
        this.checkloading = false;
        this.checkdisable = false;
        this.driveerrorLog(error, apiname);
      })
  }



  openDialog(): void {
    this.dialog.open(CrmgamefoodforthoughtComponent, {
      data: {},
    });
  }


}


