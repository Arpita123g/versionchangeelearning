import { Component, OnInit, OnDestroy, ViewChild, ElementRef, signal, computed, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/service/global.service';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { RestapiService } from 'src/app/service/restapi.service';

interface Thought {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
  likes: number;
  comments: Comment[];
}

interface Comment {
  id: number;
  content: string;
  author: string;
  createdAt: Date;
  likes: number;
}

@Component({
  selector: 'app-foodforthoughtcommon',
  templateUrl: './foodforthought.component.html',
  styleUrls: ['./foodforthought.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTreeModule,
    MatGridListModule,
    MatRippleModule
  ]
})
export class FoodforthoughtComponent extends AbstractComponent {
  @Input() questionanswerpaper: any = [];
  @Input() gamename: string = "";
  fetchapiname: string = "";
  writeapiname: string = "";
  casemanagementidname: string = "";
  casemanagement: string = "";
  questionanswervalue: number = 0;
  // selectlanguage: any = 'hindi';
  languageid: number = 0;

  steps = [
    { label: 'Q 1', },
    { label: 'Q 2', },
    { label: 'Q 3', },
    { label: 'Q 4', },
    { label: 'Q 5', },
    { label: 'Q 6', },
    { label: 'Q 7', },
    { label: 'Q 8', },
    { label: 'Q 9', },
    { label: 'Q 10', },
    { label: 'Q 11', },
    { label: 'Q 12', }
  ];
  currentStep = 0;
  completed: boolean = false;
  data: any = {};
  answerData = {};
  jsondata = {};
  feedbackData: string = "";
  questionserialno: string = "";
  questionnumber: number = 0;
  questionNo: number = 0;
  lastquestion: boolean = false;
  lastquestionfeedback: string = "";
  completedstatus: any = [];
  submitcell: string = '';
  firstfeedback: boolean = true;
  casemanagementkeyname: string = "";
  totalQuestionNumber: number = 0;
  optionvalues: any = [];
  gamelmid: string = "";



  constructor(_router: Router, _global: GlobalService, _login: LoginService, _api: ApiService,
    _alert: SnackbaralertService, _restapiservice: RestapiService, private dialogRef: MatDialogRef<FoodforthoughtComponent>,
  ) {

    super(_login, _api, _alert, _global, _router, _restapiservice);


  }




  override ngOnInit(): void {
    if (this.gamename == "businessbasic") {
      this.fetchapiname = "/businessbasic/fetchbusinessbasic";
      this.writeapiname = "/businessbasic/singleinputbusinessbasic";
      this.casemanagementidname = "businessbasiccasemanagementid";
      this.casemanagement = "businessBasicCaseManagement"
      this.submitcell = 'h4';
      this.questionserialno = 'h5'
      this.casemanagementkeyname = 'businessbasiccasemanagementid'
      this.totalQuestionNumber = 12;
      this.fetchQuestionAnswerData();
    } else if (this.gamename == "consumerbehaviour") {
      this.fetchapiname = "/consumerbehaviour/fetchconsumerbehaviour";
      this.writeapiname = '/consumerbehaviour/singleinputconsumerbehaviour';
      this.casemanagementidname = "consumerbehaviourcmid"
      this.casemanagement = "consumerBehaviourCM"
      this.submitcell = 't76';
      this.questionserialno = 't77'
      this.casemanagementkeyname = 'consumerbehaviourcmid'
      this.totalQuestionNumber = 12;
      this.fetchQuestionAnswerData();
    }
    else if (this.gamename == "consumerbehaviournew") {
      this.fetchapiname = "/consumerbehaviournew/fetchconsumerbehaviournew";
      this.writeapiname = '/consumerbehaviournew/singleinputconsumerbehaviournew';
      this.casemanagementidname = "consumerbehaviournewcmid"
      this.casemanagement = "consumerBehaviourNewCM"
      this.submitcell = 't76';
      this.questionserialno = 't77'
      this.casemanagementkeyname = 'consumerbehaviournewcmid'
      this.totalQuestionNumber = 12;
      this.gamelmid = "consumerbehaviournewlmid"
      // this.fetchQuestionAnswerDataStaticLanguageCommon();
      this.fetchQuestionAnswerDataStaticLanguageforconsumer();
    } else if (this.gamename == "logistics") {
      this.fetchapiname = "/logistics/fetchlogistics";
      this.writeapiname = '/logistics/singleinputlogistics';
      this.casemanagementidname = "logisticscmid"
      this.casemanagement = "logisticsCM"
      this.submitcell = 'aw53';
      this.questionserialno = 'aw54'
      this.casemanagementkeyname = 'logisticscmid'
      this.totalQuestionNumber = 9;
      this.fetchQuestionAnswerData();
    } else if (this.gamename == "changemanagement") {
      this.fetchapiname = "/changemanagement/fetchchangemanagement";
      this.writeapiname = '/changemanagement/singleinputchangemanagement';
      this.casemanagementidname = "changemanagementcmid"
      this.casemanagement = "changeManagementCM"
      this.submitcell = 'bh6';
      this.questionserialno = 'bh7';
      this.casemanagementkeyname = 'changemanagementcmid';
      this.totalQuestionNumber = 6;
      this.fetchQuestionAnswerData();
    }
    else if (this.gamename == "changemanagementnew") {
      this.fetchapiname = "/changemanagementnew/fetchchangemanagementnew";
      this.writeapiname = '/changemanagementnew/singleinputchangemanagementnew';
      this.casemanagementidname = "changemanagementnewcmid"
      this.casemanagement = "changeManagementNewCM"
      this.submitcell = 'bh6';
      this.questionserialno = 'bh7';
      this.casemanagementkeyname = 'changemanagementnewcmid';
      this.totalQuestionNumber = 6;
      this.gamelmid = "changemanagementnewlmid";
      this.fetchQuestionAnswerDataStaticLanguageforchangemanagementnew();
    }
    else if (this.gamename == "financialanalysis") {
      this.fetchapiname = "/financialanalysis/fetchfinancialanalysis";
      this.writeapiname = '/financialanalysis/singleinputfinancialanalysis';
      this.casemanagementidname = "financialanalysiscmid"
      this.casemanagement = "financialanalysiscm"
      this.submitcell = 'am31';
      this.questionserialno = 'am32';
      this.casemanagementkeyname = 'financialanalysiscmid';
      this.totalQuestionNumber = 10;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "promotions") {
      this.fetchapiname = "/promotions/fetchpromotions";
      this.writeapiname = '/promotions/singleinputpromotions';
      this.casemanagementidname = "promotionscmid"
      this.casemanagement = "promotionsCM"
      this.submitcell = 'z20';
      this.questionserialno = 'z21';
      this.casemanagementkeyname = 'promotionscmid';
      this.totalQuestionNumber = 10;
      this.fetchQuestionAnswerDataStatic();
    } else if (this.gamename == "promotionsnew") {
      this.fetchapiname = "/promotionsnew/fetchpromotionsnew";
      this.writeapiname = '/promotionsnew/singleinputpromotionsnew';
      this.casemanagementidname = "promotionsnewcmid"
      this.casemanagement = "promoTionsNewCM"
      this.submitcell = 'z20';
      this.questionserialno = 'z21';
      this.casemanagementkeyname = 'promotionsnewcmid';
      this.totalQuestionNumber = 10;
      this.gamelmid = "promotionsnewlmid"

      this.fetchQuestionAnswerDataStaticLanguageforpromotion();
    }
    else if (this.gamename == "salestarget") {
      this.fetchapiname = "/salestarget/fetchsalestarget";
      this.writeapiname = "/salestarget/singleinputsalestarget";
      this.casemanagementidname = "salestargetcmid"
      this.casemanagement = "salesTargetCM"
      this.submitcell = 'bb7';
      this.questionserialno = 'bb8';
      this.casemanagementkeyname = 'salestargetcmid';
      this.totalQuestionNumber = 12;
      this.fetchQuestionAnswerDataStatic();
    } else if (this.gamename == "portfoliomanagement") {
      this.fetchapiname = "/portfoliomanagement/fetchportfoliomanagement";
      this.writeapiname = "/portfoliomanagement/singleinputportfoliomanagement";
      this.casemanagementidname = "portfoliomanagementcmid"
      this.casemanagement = "portfolioManagementCM"
      this.submitcell = 'ap15';
      this.questionserialno = 'ap16';
      this.casemanagementkeyname = 'portfoliomanagementcmid';
      this.totalQuestionNumber = 8;
      this.fetchQuestionAnswerDataStatic();
    } else if (this.gamename == "valuechain") {
      this.fetchapiname = "/valuechain/fetchvaluechain";
      this.writeapiname = "/valuechain/singleinputvaluechain";
      this.casemanagementidname = "valuechaincmid"
      this.casemanagement = "valueChainCM"
      this.submitcell = 'z42';
      this.questionserialno = 'z43';
      this.casemanagementkeyname = 'valuechaincmid';
      this.totalQuestionNumber = 8;
      this.fetchQuestionAnswerDataStatic();
    } else if (this.gamename == "valuechainnew") {
      this.fetchapiname = "/valuechainnew/fetchvaluechainnew";
      this.writeapiname = "/valuechainnew/singleinputvaluechainnew";
      this.casemanagementidname = "valuechainnewcmid"
      this.casemanagement = "valueChainNewCM"
      this.submitcell = 'z42';
      this.questionserialno = 'z43';
      this.casemanagementkeyname = 'valuechainnewcmid';
      this.totalQuestionNumber = 8;
      this.gamelmid = "valuechainnewlmid"
      this.fetchQuestionAnswerDataStaticLanguageforvaluechain();
    }
    else if (this.gamename == "cvpanalysis") {
      this.fetchapiname = "/cvpanalysis/fetchcvpanalysis";
      this.writeapiname = "/cvpanalysis/singleinputcvpanalysis";
      this.casemanagementidname = "cvpanalysiscmid"
      this.casemanagement = "cvpAnalysisCM"
      this.submitcell = 'ai8';
      this.questionserialno = 'ai9';
      this.casemanagementkeyname = 'cvpanalysiscmid';
      this.totalQuestionNumber = 8;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "accountinggame") {
      this.fetchapiname = "/accountinggame/fetchaccountinggame";
      this.writeapiname = "/accountinggame/singleinputaccountinggame";
      this.casemanagementidname = "accountinggamecmid"
      this.casemanagement = "accountinggameCM"
      this.submitcell = 'ag8';
      this.questionserialno = 'ag9';
      this.casemanagementkeyname = 'accountinggamecmid';
      this.totalQuestionNumber = 6;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "accountingarabic") {
      this.fetchapiname = "/accountingarabic/fetchaccountingarabic";
      this.writeapiname = "/accountingarabic/singleinputaccountingarabic";
      this.casemanagementidname = "accountingarabiccmid"
      this.casemanagement = "accountingArabicCM"
      this.submitcell = 'ag8';
      this.questionserialno = 'ag9';
      this.casemanagementkeyname = 'accountingarabiccmid';
      this.totalQuestionNumber = 6;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "pricinggame") {
      this.fetchapiname = "/pricinggame/fetchpricinggame";
      this.writeapiname = "/pricinggame/singleinputpricinggame";
      this.casemanagementidname = "pricinggamecmid"
      this.casemanagement = "pricingGameCM"
      this.submitcell = 'ab13';
      this.questionserialno = 'ab14';
      this.casemanagementkeyname = 'pricinggamecmid';
      this.totalQuestionNumber = 5;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "mergersacquisition") {
      this.fetchapiname = "/mergersacquisition/fetchmergersacquisition";
      this.writeapiname = "/mergersacquisition/singleinputmergersacquisition";
      this.casemanagementidname = "mergersacquisitioncmid"
      this.casemanagement = "mergersAcquisitionCM"
      this.submitcell = 'ac30';
      this.questionserialno = 'ac31';
      this.casemanagementkeyname = 'mergersacquisitioncmid';
      this.totalQuestionNumber = 8;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "hrplanning") {
      this.fetchapiname = "/hrplanning/fetchhrplanning";
      this.writeapiname = "/hrplanning/singleinputhrplanning";
      this.casemanagementidname = "hrplanningcmid"
      this.casemanagement = "hrPlanningCM"
      this.submitcell = 'ae49';
      this.questionserialno = 'ae50';
      this.casemanagementkeyname = 'hrplanningcmid';
      this.totalQuestionNumber = 12;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "hrplanningnew") {
      this.fetchapiname = "/hrplanningnew/fetchhrplanningnew";
      this.writeapiname = "/hrplanningnew/singleinputhrplanningnew";
      this.casemanagementidname = "hrplanningnewcmid"
      this.casemanagement = "hrPlanningNewCM"
      this.submitcell = 'ae49';
      this.questionserialno = 'ae50';
      this.casemanagementkeyname = 'hrplanningnewcmid';
      this.totalQuestionNumber = 12;
      this.gamelmid = "hrplanningnewlmid"
      this.fetchQuestionAnswerDataStaticLanguageforhrplanning();
    }
    else if (this.gamename == "designthinking") {
      this.fetchapiname = "/designthinking/fetchdesignthinking";
      this.writeapiname = "/designthinking/singleinputdesignthinking";
      this.casemanagementidname = "designthinkingcmid"
      this.casemanagement = "designthinkingCM"
      this.submitcell = 'af65';
      this.questionserialno = 'af66';
      this.casemanagementkeyname = 'designthinkingcmid';
      this.totalQuestionNumber = 8;
      this.fetchQuestionAnswerDataStatic();
    }
    // else if (this.gamename == "crmgame") {
    //   this.fetchapiname = "/crmgame/fetchcrmgame";
    //   this.writeapiname = "/crmgame/singleinputcrmgame";
    //   this.casemanagementidname = "crmgamecmid"
    //   this.casemanagement = "crmGameCM"
    //   this.submitcell = 'al96';
    //   this.questionserialno = 'al97';
    //   this.casemanagementkeyname = 'crmgamecmid';
    //   this.totalQuestionNumber = 9;
    //   this.gamelmid= "crmgamelmid"
    //   this.fetchQuestionAnswerDataStaticLanguage();
    // }
    else if (this.gamename == "crmgame") {
      this.fetchapiname = "/crmgame/fetchcrmgame";
      this.writeapiname = "/crmgame/singleinputcrmgame";
      this.casemanagementidname = "crmgamecmid"
      this.casemanagement = "crmGameCM"
      this.submitcell = 'al96';
      this.questionserialno = 'al97';
      this.casemanagementkeyname = 'crmgamecmid';
      this.totalQuestionNumber = 9;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "innovationgame") {
      this.fetchapiname = "/innovationgame/fetchinnovationgame";
      this.writeapiname = "/innovationgame/singleinputinnovationgame";
      this.casemanagementidname = "innovationgamecmid"
      this.casemanagement = "innovationGameCM"
      this.submitcell = 'ae89';
      this.questionserialno = 'ae90';
      this.casemanagementkeyname = 'innovationgamecmid';
      this.totalQuestionNumber = 12;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "orderingbasics") {
      this.fetchapiname = "/orderingbasics/fetchorderingbasics";
      this.writeapiname = "/orderingbasics/singleinputorderingbasics";
      this.casemanagementidname = "orderingbasicscmid"
      this.casemanagement = " orderingBasicsCM"
      this.submitcell = 'ap18';
      this.questionserialno = 'ap19';
      this.casemanagementkeyname = 'orderingbasicscmid';
      this.totalQuestionNumber = 8;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "stpgame") {
      this.fetchapiname = '/stpgame/fetchstpgame';
      this.writeapiname = "/stpgame/singleinputstpgame";
      this.casemanagementidname = "stpgamecmid"
      this.casemanagement = "stpGameCM"
      this.submitcell = 'cj121';
      this.questionserialno = 'cj122';
      this.casemanagementkeyname = 'stpgamecmid';
      this.totalQuestionNumber = 10;
      this.fetchQuestionAnswerDataStatic();
    }
    else if (this.gamename == "hrmgame") {
      this.fetchapiname = '/hrmgame/fetchhrmgame';
      this.writeapiname = "/hrmgame/singleinputhrmgame";
      this.casemanagementidname = "hrmgamecmid"
      this.casemanagement = "hrmGameCM"
      this.submitcell = 'd417';
      this.questionserialno = 'd418';
      this.casemanagementkeyname = 'hrmgamecmid';
      this.totalQuestionNumber = 12;
      this.fetchQuestionAnswerDataStaticForHRM();
    }
    else if (this.gamename == "ecommercegame") {
      this.fetchapiname = "/ecommercegame/fetchecommercegame";
      this.writeapiname = "/ecommercegame/singleinputecommercegame";
      this.casemanagementidname = "ecommercegamecmid"
      this.casemanagement = "ecommercegameCM"
      this.submitcell = 'aq168';
      this.questionserialno = 'aq169';
      this.casemanagementkeyname = 'ecommercegamecmid';
      this.totalQuestionNumber = 16;
      this.fetchQuestionAnswerDataStaticEcom();
    }
    else if (this.gamename == "cbgame") {
      this.fetchapiname = "/cbgame/fetchcbgame";
      this.writeapiname = "/cbgame/singleinputcbgame";
      this.casemanagementidname = "cbgamecmid"
      this.casemanagement = "cbgameCM"
      this.submitcell = 'ao39';
      this.questionserialno = 'ao40';
      this.casemanagementkeyname = 'cbgamecmid';
      this.totalQuestionNumber = 6;
      this.fetchQuestionAnswerDataStaticCommon('cbgamedata');
    }
    else if (this.gamename == "itmanagement") {
      this.fetchapiname = "/itmanagement/fetchitmanagement";
      this.writeapiname = "/itmanagement/singleinputitmanagement";
      this.casemanagementidname = "itmanagementcmid"
      this.casemanagement = "itManagementCM"
      this.submitcell = 'af96';
      this.questionserialno = 'af97';
      this.casemanagementkeyname = 'itmanagementcmid';
      this.totalQuestionNumber = 14;
      this.fetchQuestionAnswerDataStaticCommon('itmanagementdata');
    }
    else if (this.gamename == "projectmanagement") {
      this.fetchapiname = "/projectmanagement/fetchprojectmanagement";
      this.writeapiname = "/projectmanagement/singleinputprojectmanagement";
      this.casemanagementidname = "projectmanagementcmid"
      this.casemanagement = "projectmanagementCM"
      this.submitcell = 'af96';
      this.questionserialno = 'af97';
      this.casemanagementkeyname = 'projectmanagementcmid';
      this.totalQuestionNumber = 14;
      this.fetchQuestionAnswerDataStaticCommon('projectmanagementdata');
    }

  }


  fetchQuestionAnswerData() {
    // let apiname = "/businessbasic/fetchbusinessbasic"
    this._api.fetchGameData(this.fetchapiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0][this.casemanagementidname]);
            console.log("timr", this.timefinished)
            for (let i = 0; i < this.questionanswerpaper.length; i++) {
              this.questionanswerpaper[i].question[0] = data.resultList[0][this.casemanagement][this.questionanswerpaper[i].question[1]]

              for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                this.questionanswerpaper[i].option[0][j] = data.resultList[0][this.casemanagement][this.questionanswerpaper[i].option[1][j]]
                let value = data.resultList[0][this.questionanswerpaper[i].cellvalue[j]];
                if ((data.resultList[0][this.submitcell] == "yes") || (this.timefinished)) {
                  this.questionanswerpaper[i].disabled = true;
                }
                if (value == 1) {
                  this.questionanswerpaper[i].questionchecked[j] = true;

                  if (i < this.totalQuestionNumber) {
                    this.questionanswerpaper[i + 1].feedbackvalue = data.resultList[0][this.casemanagement][this.questionanswerpaper[i].feedback[1][j]];
                  }
                }
              }
            }
            this.questionanswervalue = data.resultList[0][this.questionserialno];
            if (this.questionanswervalue > 0) {
              this.firstfeedback = false;
            }
            if (this.questionanswervalue < this.totalQuestionNumber) {
              this.questionNo = this.questionanswervalue + 1
            } else {
              this.questionNo = this.questionanswervalue;
            }

            this.data = this.questionanswerpaper[this.questionanswervalue];
            this.optionvalues = this.data.option[0];
            if (this.questionanswervalue == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }


  fetchQuestionAnswerDataStaticEcom() {
    // let apiname = "/businessbasic/fetchbusinessbasic"
    this._api.fetchGameData(this.fetchapiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0][this.casemanagementidname]);
            if (data.resultList[0].ecommercegamedata) {
              for (let i = 0; i < this.questionanswerpaper.length; i++) {

                for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                  let value = data.resultList[0].ecommercegamedata[this.questionanswerpaper[i].cellvalue[j]];

                  if ((data.resultList[0].ecommercegamedata[this.submitcell] == "yes") || (data.resultList[0].ecommercegamedata[this.submitcell] == "Yes") || (this.timefinished)) {
                    this.questionanswerpaper[i].disabled = true;
                  }


                  if (value == 1) {
                    this.questionanswerpaper[i].questionchecked[j] = true;

                    if (i < this.totalQuestionNumber) {
                      this.questionanswerpaper[i + 1].feedbackvalue = this.questionanswerpaper[i].feedback[j];
                    }
                  }
                }
              }
            }

            if (data.resultList[0].ecommercegamedata) {
              this.questionanswervalue = Number(data.resultList[0].ecommercegamedata[this.questionserialno]);
            } else {
              this.questionanswervalue = 0;
            }

            if (Number(this.questionanswervalue) > 0) {
              this.firstfeedback = false;
            }
            if (Number(this.questionanswervalue) < this.totalQuestionNumber) {
              this.questionNo = Number(this.questionanswervalue) + 1
            } else {
              this.questionNo = Number(this.questionanswervalue);
            }

            this.data = this.questionanswerpaper[Number(this.questionanswervalue)];
            this.optionvalues = this.data.option;
            if (Number(this.questionanswervalue) == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }


  fetchQuestionAnswerDataStaticCommon(gamedata: string) {
    // let apiname = "/businessbasic/fetchbusinessbasic"
    this._api.fetchGameData(this.fetchapiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0][this.casemanagementidname]);
            if (data.resultList[0][gamedata]) {
              for (let i = 0; i < this.questionanswerpaper.length; i++) {

                for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                  let value = data.resultList[0][gamedata][this.questionanswerpaper[i].cellvalue[j]];

                  if ((data.resultList[0][gamedata][this.submitcell] == "yes") || (data.resultList[0][gamedata][this.submitcell] == "Yes") || (this.timefinished)) {
                    this.questionanswerpaper[i].disabled = true;
                  }


                  if (value == 1) {
                    this.questionanswerpaper[i].questionchecked[j] = true;

                    if (i < this.totalQuestionNumber) {
                      this.questionanswerpaper[i + 1].feedbackvalue = this.questionanswerpaper[i].feedback[j];
                    }
                  }
                }
              }
            }

            if (data.resultList[0][gamedata]) {
              this.questionanswervalue = Number(data.resultList[0][gamedata][this.questionserialno]);
            } else {
              this.questionanswervalue = 0;
            }

            if (Number(this.questionanswervalue) > 0) {
              this.firstfeedback = false;
            }
            if (Number(this.questionanswervalue) < this.totalQuestionNumber) {
              this.questionNo = Number(this.questionanswervalue) + 1
            } else {
              this.questionNo = Number(this.questionanswervalue);
            }

            this.data = this.questionanswerpaper[Number(this.questionanswervalue)];
            this.optionvalues = this.data.option;
            if (Number(this.questionanswervalue) == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }

  fetchQuestionAnswerDataStatic() {
    // let apiname = "/businessbasic/fetchbusinessbasic"
    this._api.fetchGameData(this.fetchapiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0][this.casemanagementidname]);
            for (let i = 0; i < this.questionanswerpaper.length; i++) {

              for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                let value = data.resultList[0][this.questionanswerpaper[i].cellvalue[j]];

                if ((data.resultList[0][this.submitcell] == "yes") || (data.resultList[0][this.submitcell] == "Yes") || (this.timefinished)) {
                  this.questionanswerpaper[i].disabled = true;
                }


                if (value == 1) {
                  this.questionanswerpaper[i].questionchecked[j] = true;

                  if (i < this.totalQuestionNumber) {
                    this.questionanswerpaper[i + 1].feedbackvalue = this.questionanswerpaper[i].feedback[j];
                  }
                }
              }
            }
            this.questionanswervalue = data.resultList[0][this.questionserialno];
            if (this.questionanswervalue > 0) {
              this.firstfeedback = false;
            }
            if (this.questionanswervalue < this.totalQuestionNumber) {
              this.questionNo = this.questionanswervalue + 1
            } else {
              this.questionNo = this.questionanswervalue;
            }

            this.data = this.questionanswerpaper[this.questionanswervalue];
            this.optionvalues = this.data.option;
            if (this.questionanswervalue == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }

  fetchQuestionAnswerDataStaticLanguage() {
    // let apiname = "/businessbasic/fetchbusinessbasic"
    this._api.fetchLanguageData(this.fetchapiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].crmGameCM[this.casemanagementidname]);
            this.languageid = data.resultList[0].crmGameLM.crmgamelmid;
            this.languageselect = this.languageselect.toLowerCase();
            for (let i = 0; i < this.questionanswerpaper.length; i++) {

              for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                let value = data.resultList[0].crmgamedata[this.questionanswerpaper[i].cellvalue[j]];
                // let value = 0;
                if ((data.resultList[0].crmgamedata[this.submitcell] == "yes") || (data.resultList[0].crmgamedata[this.submitcell] == "Yes") || (this.timefinished)) {
                  this.questionanswerpaper[i].disabled = true;
                }


                if (value == 1) {
                  this.questionanswerpaper[i].questionchecked[j] = true;

                  if (i < this.totalQuestionNumber) {
                    this.questionanswerpaper[i + 1].feedbackvalue = data.resultList[0].crmGameLM[this.languageselect][this.questionanswerpaper[i].feedback[j]];
                  }
                }
              }
            }
            this.questionanswervalue = Number(data.resultList[0].crmgamedata[this.questionserialno]);
            // this.questionanswervalue = 0;
            if (this.questionanswervalue > 0) {
              this.firstfeedback = false;
            }
            if (this.questionanswervalue < this.totalQuestionNumber) {
              this.questionNo = this.questionanswervalue + 1
            } else {
              this.questionNo = this.questionanswervalue;
            }

            this.data = this.questionanswerpaper[this.questionanswervalue];
            this.data.question[0] = data.resultList[0].crmGameLM[this.languageselect][this.data.question[0]];
            for (let i = 0; i < this.data.option.length; i++) {
              this.optionvalues[i] = data.resultList[0].crmGameLM[this.languageselect][this.data.option[i]];
            }

            if (this.questionanswervalue == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }




  fetchQuestionAnswerDataStaticForHRM() {
    // let apiname = "/businessbasic/fetchbusinessbasic"
    this._api.fetchGameData(this.fetchapiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0][this.casemanagementidname]);
            for (let i = 0; i < this.questionanswerpaper.length; i++) {

              for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                let value = data.resultList[0].decisions[this.questionanswerpaper[i].cellvalue[j]];
                if ((data.resultList[0].decisions[this.submitcell] == "yes") || (data.resultList[0].decisions[this.submitcell] == "Yes") || (this.timefinished)) {
                  this.questionanswerpaper[i].disabled = true;
                }
                if (value == 1) {
                  this.questionanswerpaper[i].questionchecked[j] = true;

                  if (i < this.totalQuestionNumber) {
                    this.questionanswerpaper[i + 1].feedbackvalue = this.questionanswerpaper[i].feedback[j];
                  }
                }
              }
            }
            this.questionanswervalue = data.resultList[0].decisions[this.questionserialno];
            if (this.questionanswervalue > 0) {
              this.firstfeedback = false;
            }
            this.questionanswervalue = Number(this.questionanswervalue);
            if (this.questionanswervalue < this.totalQuestionNumber) {
              this.questionNo = this.questionanswervalue + 1
            } else {
              this.questionNo = this.questionanswervalue;
            }

            this.data = this.questionanswerpaper[this.questionanswervalue];
            this.optionvalues = this.data.option;
            if (this.questionanswervalue == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }

  radiobtnselection(index: number) {
    if ((this.gamename == 'consumerbehaviournew') || (this.gamename == 'promotionsnew') ||
      (this.gamename == 'valuechainnew') || (this.gamename == 'hrplanningnew') || (this.gamename == 'changemanagementnew')) {
      this.questionAnswerDatawriteLanguage(index);
    } else {
      this.questionAnswerDatawrite(index);
    }
  }

  questionAnswerDatawrite(index: number) {
    let optionnumber = [0, 0, 0];
    optionnumber[index] = 1;
    let data = {}
    if (this.gamename == 'hrmgame') {
      data = {
        decisions: {
          [this.data.cellvalue[0]]: optionnumber[0],
          [this.data.cellvalue[1]]: optionnumber[1],
          [this.data.cellvalue[2]]: optionnumber[2],
          [this.questionserialno]: this.questionanswervalue + 1
        }

      }
    } else {
      if (this.data.cellvalue.length == 3) {
        data = {
          [this.data.cellvalue[0]]: optionnumber[0],
          [this.data.cellvalue[1]]: optionnumber[1],
          [this.data.cellvalue[2]]: optionnumber[2],
          [this.questionserialno]: this.questionanswervalue + 1
        }
      } else {
        data = {
          [this.data.cellvalue[0]]: optionnumber[0],
          [this.data.cellvalue[1]]: optionnumber[1],
          [this.questionserialno]: this.questionanswervalue + 1
        }
      }

    }

    this._api.businessdatawrite(this.gamename, this.noofattempt,
      data, this.writeapiname, this.casemanagementkeyname).subscribe(
        {
          next: (data: any) => {

            if (data.status == "Success") {
              this.firstfeedback = false;
              this.questionnumber = this.questionanswervalue + 1;
              if (this.questionnumber < this.totalQuestionNumber) {
                this._global.questionanswerpage.next(this.questionnumber);
              }
              if (this.questionnumber >= this.totalQuestionNumber) {
                this.lastquestion = true;
                this.lastquestionfeedback = "last feedback";
              }

              if ((this.gamename == "financialanalysis") || (this.gamename == "promotions") || (this.gamename == "salestarget")
                || (this.gamename == "portfoliomanagement") || (this.gamename == "valuechain")
                || (this.gamename == "cvpanalysis") || (this.gamename == "accountinggame") || (this.gamename == "pricinggame") || (this.gamename == "mergersacquisition")
                || (this.gamename == "accountingarabic") || (this.gamename == "hrplanning") || (this.gamename == "designthinking")
                || (this.gamename == "crmgame") || (this.gamename == "innovationgame") || (this.gamename == "orderingbasics") || (this.gamename == "stpgame")
              ) {
                this.fetchQuestionAnswerDataStatic();
              }
              else if (this.gamename == "ecommercegame") {
                this.fetchQuestionAnswerDataStaticEcom();
              }
              else if (this.gamename == "hrmgame") {
                this.fetchQuestionAnswerDataStaticForHRM();
              } else if (this.gamename == "cbgame") {
                this.fetchQuestionAnswerDataStaticCommon('cbgamedata');

              } else if (this.gamename == "itmanagement") {
                this.fetchQuestionAnswerDataStaticCommon('itmanagementdata');
              } else {
                this.fetchQuestionAnswerData();
              }
            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, this.writeapiname);
          }
        })
  }
  questionAnswerDatawriteLanguage(index: number) {
    let optionnumber = [0, 0, 0];
    optionnumber[index] = 1;
    let data = {}

    if (this.data.cellvalue.length == 3) {
      data = {
        [this.data.cellvalue[0]]: optionnumber[0],
        [this.data.cellvalue[1]]: optionnumber[1],
        [this.data.cellvalue[2]]: optionnumber[2],
        [this.questionserialno]: this.questionanswervalue + 1
      }
    } else {
      data = {
        [this.data.cellvalue[0]]: optionnumber[0],
        [this.data.cellvalue[1]]: optionnumber[1],
        [this.questionserialno]: this.questionanswervalue + 1
      }
    }



    this._api.Languagedatawrite(this.gamename, this.noofattempt,
      data, this.writeapiname, this.casemanagementkeyname, this.languageselect, this.languageid, this.gamelmid).subscribe(
        {
          next: (data: any) => {

            if (data.status == "Success") {
              this.firstfeedback = false;
              this.questionnumber = this.questionanswervalue + 1;
              if (this.questionnumber < this.totalQuestionNumber) {
                this._global.questionanswerpage.next(this.questionnumber);
              }
              if (this.questionnumber >= this.totalQuestionNumber) {
                this.lastquestion = true;
                this.lastquestionfeedback = "last feedback";
              }

              if ((this.gamename == "crmgame")
              ) {
                this.fetchQuestionAnswerDataStaticLanguage();
              } else if ((this.gamename == "consumerbehaviournew")) {
                this.fetchQuestionAnswerDataStaticLanguageforconsumer();
              } else if ((this.gamename == "promotionsnew")) {
                this.fetchQuestionAnswerDataStaticLanguageforpromotion();
              } else if ((this.gamename == "valuechainnew")) {
                this.fetchQuestionAnswerDataStaticLanguageforvaluechain();
              } else if ((this.gamename == "hrplanningnew")) {
                this.fetchQuestionAnswerDataStaticLanguageforhrplanning();
              } else if ((this.gamename == "changemanagementnew")) {
                this.fetchQuestionAnswerDataStaticLanguageforchangemanagementnew();
              }
              else {
                this.fetchQuestionAnswerData();
              }
            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, this.writeapiname);
          }
        })
  }
  closePage() {
    this.dialogRef.close();
  }


  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.completed = false;
    } else {
      this.completed = true;
    }
  }


  // its for common call in food for thought with language

  fetchQuestionAnswerDataStaticLanguageCommon() {
    this._api.fetchLanguageData(this.fetchapiname, this.noofattempt, this.languageselect).subscribe({
      next: (data: any) => {
        if (!data?.resultList?.[0]) return;

        const result = data.resultList[0];
        const cm = result[this.casemanagement];
        const lm = result[this.casemanagement.replace('CM', 'LM')];
        const dataBlock = result[this.casemanagement.toLowerCase().replace('cm', 'data')];

        this._global.casemanagementid.next(cm[this.casemanagementidname]);
        this.languageid = lm[`${this.casemanagementkeyname.toLowerCase().replace('cmid', 'lmid')}`];
        this.languageselect = this.languageselect.toLowerCase();

        for (let i = 0; i < this.questionanswerpaper.length; i++) {
          for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
            const value = dataBlock[this.questionanswerpaper[i].cellvalue[j]];

            if ((dataBlock[this.submitcell]?.toLowerCase?.() === 'yes') || this.timefinished) {
              this.questionanswerpaper[i].disabled = true;
            }

            if (value === 1) {
              this.questionanswerpaper[i].questionchecked[j] = true;

              if (i < this.totalQuestionNumber) {
                this.questionanswerpaper[i + 1].feedbackvalue =
                  lm[this.languageselect][this.questionanswerpaper[i].feedback[j]];
              }
            }
          }
        }

        this.questionanswervalue = Number(dataBlock[this.questionserialno]);
        this.firstfeedback = this.questionanswervalue <= 0;
        this.questionNo = this.questionanswervalue < this.totalQuestionNumber
          ? this.questionanswervalue + 1
          : this.questionanswervalue;

        this.data = this.questionanswerpaper[this.questionanswervalue];
        this.data.question[0] = lm[this.languageselect][this.data.question[0]];
        for (let i = 0; i < this.data.option.length; i++) {
          this.optionvalues[i] = lm[this.languageselect][this.data.option[i]];
        }

        if (this.questionanswervalue === this.totalQuestionNumber) {
          this.completed = true;
          this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, this.fetchapiname);
      }
    });
  }

  fetchQuestionAnswerDataStaticLanguageforconsumer() {
    // let apiname = "/businessbasic/fetchbusinessbasic"
    this._api.fetchLanguageData(this.fetchapiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].consumerBehaviourNewCM[this.casemanagementidname]);
            this.languageid = data.resultList[0].consumerBehaviourNewLM.consumerbehaviournewlmid;
            this.languageselect = this.languageselect.toLowerCase();
            for (let i = 0; i < this.questionanswerpaper.length; i++) {

              for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                let value = data.resultList[0].consumerbehaviournewdata[this.questionanswerpaper[i].cellvalue[j]];
                // let value = 0;
                if ((data.resultList[0].consumerbehaviournewdata[this.submitcell] == "yes") || (data.resultList[0].consumerbehaviournewdata[this.submitcell] == "Yes") || (this.timefinished)) {
                  this.questionanswerpaper[i].disabled = true;
                }


                if (value == 1) {
                  this.questionanswerpaper[i].questionchecked[j] = true;

                  if (i < this.totalQuestionNumber) {
                    this.questionanswerpaper[i + 1].feedbackvalue = data.resultList[0].consumerBehaviourNewLM[this.languageselect][this.questionanswerpaper[i].feedback[j]];
                  }
                } else {
                  this.questionanswerpaper[i].questionchecked[j] = false;
                }
              }
            }
            this.questionanswervalue = Number(data.resultList[0].consumerbehaviournewdata[this.questionserialno]);
            // this.questionanswervalue = 0;
            if (this.questionanswervalue > 0) {
              this.firstfeedback = false;
            }
            if (this.questionanswervalue < this.totalQuestionNumber) {
              this.questionNo = this.questionanswervalue + 1
            } else {
              this.questionNo = this.questionanswervalue;
            }
            this.optionvalues = [];

            this.data = this.questionanswerpaper[this.questionanswervalue];
            this.data.question[0] = data.resultList[0].consumerBehaviourNewLM[this.languageselect][this.data.question[0]];
            for (let i = 0; i < this.data.option.length; i++) {
              this.optionvalues[i] = data.resultList[0].consumerBehaviourNewLM[this.languageselect][this.data.option[i]];
            }

            if (this.questionanswervalue == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }
  fetchQuestionAnswerDataStaticLanguageforpromotion() {
    this._api.fetchLanguageData(this.fetchapiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].promoTionsNewCM[this.casemanagementidname]);
            this.languageid = data.resultList[0].promoTionsNewLM.promotionsnewlmid;
            this.languageselect = this.languageselect.toLowerCase();
            for (let i = 0; i < this.questionanswerpaper.length; i++) {

              for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                let value = data.resultList[0].promotionsnewdata[this.questionanswerpaper[i].cellvalue[j]];
                // let value = 0;
                if ((data.resultList[0].promotionsnewdata[this.submitcell] == "yes") || (data.resultList[0].promotionsnewdata[this.submitcell] == "Yes") || (this.timefinished)) {
                  this.questionanswerpaper[i].disabled = true;
                }


                if (value == 1) {
                  this.questionanswerpaper[i].questionchecked[j] = true;

                  if (i < this.totalQuestionNumber) {
                    this.questionanswerpaper[i + 1].feedbackvalue = data.resultList[0].promoTionsNewLM[this.languageselect][this.questionanswerpaper[i].feedback[j]];
                  }
                } else {
                  this.questionanswerpaper[i].questionchecked[j] = false;
                }
              }
            }
            this.questionanswervalue = Number(data.resultList[0].promotionsnewdata[this.questionserialno]);
            // this.questionanswervalue = 0;
            if (this.questionanswervalue > 0) {
              this.firstfeedback = false;
            }
            if (this.questionanswervalue < this.totalQuestionNumber) {
              this.questionNo = this.questionanswervalue + 1
            } else {
              this.questionNo = this.questionanswervalue;
            }
            this.optionvalues = [];

            this.data = this.questionanswerpaper[this.questionanswervalue];
            this.data.question[0] = data.resultList[0].promoTionsNewLM[this.languageselect][this.data.question[0]];
            for (let i = 0; i < this.data.option.length; i++) {
              this.optionvalues[i] = data.resultList[0].promoTionsNewLM[this.languageselect][this.data.option[i]];
            }

            if (this.questionanswervalue == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }
  fetchQuestionAnswerDataStaticLanguageforvaluechain() {
    // let apiname = "/businessbasic/fetchbusinessbasic"
    this._api.fetchLanguageData(this.fetchapiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].valueChainNewCM[this.casemanagementidname]);
            this.languageid = data.resultList[0].valueChainNewLM.valuechainnewlmid;
            this.languageselect = this.languageselect.toLowerCase();
            for (let i = 0; i < this.questionanswerpaper.length; i++) {

              for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                let value = data.resultList[0].valuechainnewdata[this.questionanswerpaper[i].cellvalue[j]];
                // let value = 0;
                if ((data.resultList[0].valuechainnewdata[this.submitcell] == "yes") || (data.resultList[0].valuechainnewdata[this.submitcell] == "Yes") || (this.timefinished)) {
                  this.questionanswerpaper[i].disabled = true;
                }


                if (value == 1) {
                  this.questionanswerpaper[i].questionchecked[j] = true;

                  if (i < this.totalQuestionNumber) {
                    this.questionanswerpaper[i + 1].feedbackvalue = data.resultList[0].valueChainNewLM[this.languageselect][this.questionanswerpaper[i].feedback[j]];
                  }
                } else {
                  this.questionanswerpaper[i].questionchecked[j] = false;
                }
              }
            }
            this.questionanswervalue = Number(data.resultList[0].valuechainnewdata[this.questionserialno]);
            // this.questionanswervalue = 0;
            if (this.questionanswervalue > 0) {
              this.firstfeedback = false;
            }
            if (this.questionanswervalue < this.totalQuestionNumber) {
              this.questionNo = this.questionanswervalue + 1
            } else {
              this.questionNo = this.questionanswervalue;
            }
            this.optionvalues = [];

            this.data = this.questionanswerpaper[this.questionanswervalue];
            this.data.question[0] = data.resultList[0].valueChainNewLM[this.languageselect][this.data.question[0]];
            for (let i = 0; i < this.data.option.length; i++) {
              this.optionvalues[i] = data.resultList[0].valueChainNewLM[this.languageselect][this.data.option[i]];
            }

            if (this.questionanswervalue == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }
  fetchQuestionAnswerDataStaticLanguageforhrplanning() {
    // let apiname = "/businessbasic/fetchbusinessbasic"
    this._api.fetchLanguageData(this.fetchapiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].hrPlanningNewCM[this.casemanagementidname]);
            this.languageid = data.resultList[0].hrPlanningNewLM.hrplanningnewlmid;
            this.languageselect = this.languageselect.toLowerCase();
            for (let i = 0; i < this.questionanswerpaper.length; i++) {

              for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                let value = data.resultList[0].hrplanningnewdata[this.questionanswerpaper[i].cellvalue[j]];
                // let value = 0;
                if ((data.resultList[0].hrplanningnewdata[this.submitcell] == "yes") || (data.resultList[0].hrplanningnewdata[this.submitcell] == "Yes") || (this.timefinished)) {
                  this.questionanswerpaper[i].disabled = true;
                }


                if (value == 1) {
                  this.questionanswerpaper[i].questionchecked[j] = true;

                  if (i < this.totalQuestionNumber) {
                    this.questionanswerpaper[i + 1].feedbackvalue = data.resultList[0].hrPlanningNewLM[this.languageselect][this.questionanswerpaper[i].feedback[j]];
                  }
                } else {
                  this.questionanswerpaper[i].questionchecked[j] = false;
                }
              }
            }
            this.questionanswervalue = Number(data.resultList[0].hrplanningnewdata[this.questionserialno]);
            // this.questionanswervalue = 0;
            if (this.questionanswervalue > 0) {
              this.firstfeedback = false;
            }
            if (this.questionanswervalue < this.totalQuestionNumber) {
              this.questionNo = this.questionanswervalue + 1
            } else {
              this.questionNo = this.questionanswervalue;
            }
            this.optionvalues = [];

            this.data = this.questionanswerpaper[this.questionanswervalue];
            this.data.question[0] = data.resultList[0].hrPlanningNewLM[this.languageselect][this.data.question[0]];
            for (let i = 0; i < this.data.option.length; i++) {
              this.optionvalues[i] = data.resultList[0].hrPlanningNewLM[this.languageselect][this.data.option[i]];
            }

            if (this.questionanswervalue == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }
  fetchQuestionAnswerDataStaticLanguageforchangemanagementnew() {
    // let apiname = "/businessbasic/fetchbusinessbasic"
    this._api.fetchLanguageData(this.fetchapiname, this.noofattempt, this.languageselect).subscribe(
      {
        next: (data: any) => {
          if (data.resultList != null) {
            this._global.casemanagementid.next(data.resultList[0].changeManagementNewCM[this.casemanagementidname]);
            this.languageid = data.resultList[0].changeManagementNewLM.changemanagementnewlmid;
            this.languageselect = this.languageselect.toLowerCase();
            for (let i = 0; i < this.questionanswerpaper.length; i++) {

              for (let j = 0; j < this.questionanswerpaper[i].option[0].length; j++) {
                let value = data.resultList[0].changemanagementnewdata[this.questionanswerpaper[i].cellvalue[j]];
                // let value = 0;
                if ((data.resultList[0].changemanagementnewdata[this.submitcell] == "yes") || (data.resultList[0].changemanagementnewdata[this.submitcell] == "Yes") || (this.timefinished)) {
                  this.questionanswerpaper[i].disabled = true;
                }


                if (value == 1) {
                  this.questionanswerpaper[i].questionchecked[j] = true;

                  if (i < this.totalQuestionNumber) {
                    this.questionanswerpaper[i + 1].feedbackvalue = data.resultList[0].changeManagementNewLM[this.languageselect][this.questionanswerpaper[i].feedback[j]];
                  }
                } else {
                  this.questionanswerpaper[i].questionchecked[j] = false;
                }
              }
            }
            this.questionanswervalue = Number(data.resultList[0].changemanagementnewdata[this.questionserialno]);
            // this.questionanswervalue = 0;
            if (this.questionanswervalue > 0) {
              this.firstfeedback = false;
            }
            if (this.questionanswervalue < this.totalQuestionNumber) {
              this.questionNo = this.questionanswervalue + 1
            } else {
              this.questionNo = this.questionanswervalue;
            }
            this.optionvalues = [];

            this.data = this.questionanswerpaper[this.questionanswervalue];
            this.data.question[0] = data.resultList[0].changeManagementNewLM[this.languageselect][this.data.question[0]];
            for (let i = 0; i < this.data.option.length; i++) {
              this.optionvalues[i] = data.resultList[0].changeManagementNewLM[this.languageselect][this.data.option[i]];
            }

            if (this.questionanswervalue == this.totalQuestionNumber) {
              this.completed = true;
              this.lastquestionfeedback = this.questionanswerpaper[this.totalQuestionNumber].feedbackvalue;
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, this.fetchapiname);
        }
      });
  }
}
