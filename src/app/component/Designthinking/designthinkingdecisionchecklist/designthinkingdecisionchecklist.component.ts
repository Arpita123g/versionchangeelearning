import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { BlankinputlistComponent } from 'src/app/common/blankinputlist/blankinputlist.component';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
// DesignthinkingassesmentService not found in repo; implement local helper instead
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
@Component({
  selector: 'app-designthinkingdecisionchecklist',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule, FormsModule, MatIconModule, TippyDirective],
  templateUrl: './designthinkingdecisionchecklist.component.html',
  styleUrls: ['./designthinkingdecisionchecklist.component.scss']
})
export class DesignthinkingdecisionchecklistComponent extends AbstractComponent {
  inputdatacheckvalue: boolean = false;
  analysisshow: boolean = true;
  result: any = [];
  results = ['ss', 'dd'];
  isClass: boolean[] = [false, true, false];
  optional: any[] = [];
  playername: string = '';
  dropdownvalue: any = [];
  roundname: string = "";
  foodforthoughtQNo: number = 0;
  errorlist: any = [];
  previousResulList: any = [];
  responseresultcm: any = [];
  responseresultdatabase: any = [];
  assesment: string = "";
  assesmentbody: string = "";
  feedback: string = "";
  useranalysisvalue: any = {};
  useranalysisinput: string = "";
  submitprove: string = "";
  disabled: boolean = false;
  kpivaluearray: any = [];
  @Output() newItemEvent = new EventEmitter<any>();
  foodforthought: boolean = true;

  databasecellnamearray: any = ['af7', 'af8', 'af9', 'c17', 'd17', 'e17', 'c17', 'af24', 'af25', 'af26', 'af27', 'af28',//11
    'af29', 'af30', 'af31', 'd17', 'af35', 'af36', 'af37', 'af38', 'af39', 'af40', 'af41', 'af42', 'e17', 'af46', 'af47',//26
    'af48', 'af49', 'af50', 'af51', 'af52', 'af53', 'c49', 'af57', 'af58', 'af59', 'af60', 'af61', 'af62', 'af63',//40
  ];

  optionalcase: any = ['foodforthoughtstatus',];




  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.useranalysisinput = String(localStorage.getItem('useranalysis'));
    if ((this.useranalysisinput == null) || (this.useranalysisinput == "null")) {
      this.useranalysisinput = '';
    }
    if (Number(this.noofattempt) > 1) {
      this.getPreviousData(String(Number(this.noofattempt) - 1))
    } else {
      this.getFetchData(this.noofattempt);
    }
  }

  getPreviousData(attempt: string) {

    const apiname = '/designthinking/fetchdesignthinking';

    const updateList = (start: number, end: number) => {
      for (let i = start; i < end; i++) {
        this.previousResulList[i] = this.previousResulList[i] == 0 ? 'No' : 'Yes';
      }
    };

    const normalizeResultList = (data: any) => {
      for (let i = 0; i < this.databasecellnamearray.length; i++) {
        this.previousResulList[i] = Number(this.previousResulList[i]) == 0 ? "-" : data.resultList[0][this.databasecellnamearray[i]];
      }
    };

    this._api.fetchGameData(apiname, attempt).subscribe({
      next: (data: any) => {
        if (data.status === "Success" && data.resultList) {
          this.previousResulList = this.databasecellnamearray.map((cellName: string, i: number) => data.resultList[0][cellName]);

          updateList(8, 15);
          updateList(17, 24);
          updateList(26, 33);

          normalizeResultList(data);
          this.getFetchData(this.noofattempt);
        } else {
          this.checkloading = false;
        }
      },
      error: (error: any) => {
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    });
  }

  getFetchData(attempt: string) {
    this.checkloading = true;

    let apiname = '/designthinking/fetchdesignthinking';
    this._api.fetchGameData(apiname, attempt).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {
              if (data.resultList[0].designThinkingCM.designThinkingCMActiveStatus.foodforthoughtstatus == 'inactive') {
                this.foodforthought = false;
              } else {
                this.foodforthought = true;
              }
              let attempt = data.resultList[0].attempt;
              this.playername = data.resultList[0].userRegister.username;
              this.responseresultcm = data.resultList[0].designThinkingCM;
              this.responseresultdatabase = data.resultList[0];
              let roundvalue = "round" + Number(attempt);
              this._global.casemanagementid.next(data.resultList[0].designthinkingcmid);
              this.foodforthoughtQNo = data.resultList[0].af66;
              this.submitprove = data.resultList[0].af65;

              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                this.result[i] = data.resultList[0][this.databasecellnamearray[i]];

              }

              if ((this.submitprove == 'yes') || (this.submitprove == 'Yes') || (this.timefinished)) {
                this.disabled = true;
              } else {
                this.disabled = false;
              }

              if (data.resultList[0].aiAssessmentMaster != null) {
                let analysisshowdata = data.resultList[0].aiAssessmentMaster[roundvalue];
                if (analysisshowdata == 'yes') {
                  this.analysisshow = true
                } else {
                  this.analysisshow = false;
                }
              }

              for (let i = 0; i < this.optionalcase.length; i++) {
                const caseStatus = data.resultList[0].designThinkingCM.designThinkingCMActiveStatus[this.optionalcase[i]];
                if (caseStatus == "inactive") {
                  this.optional[i] = false;
                } else {
                  this.optional[i] = true;
                }
              }




              for (let i = 8; i < 15; i++) {
                if (this.result[i] == 0) {
                  this.result[i] = 'No'
                } else {
                  this.result[i] = 'Yes'
                }
              }
              for (let i = 17; i < 24; i++) {
                if (this.result[i] == 0) {
                  this.result[i] = 'No'
                } else {
                  this.result[i] = 'Yes'
                }
              }
              for (let i = 26; i < 33; i++) {
                if (this.result[i] == 0) {
                  this.result[i] = 'No'
                } else {
                  this.result[i] = 'Yes'
                }
              }
              // for (let i = 0; i < this.databasecellnamearray.length; i++) {
              //   if (Number(this.result[i]) == 0) {
              //     this.result[i] = "-"
              //   }
              // }



              for (let i = 0; i < this.databasecellnamearray.length; i++) {
                if (attempt > 1) {

                  if (this.result[i] == this.previousResulList[i]) {
                    this.isClass[i] = true;
                  } else {
                    this.isClass[i] = false;
                  }
                } else {
                  this.isClass[i] = true;
                }
              }

              this.roundname = "Round " + attempt;
              if (attempt > 0) {
                for (let i = 1; i < attempt + 1; i++) {
                  this.dropdownvalue[i - 1] = "Round " + i;
                }
              }

              if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
                this.useranalysisSubmit();
              } else {
                this.checkloading = false;
              }

              this.kpivaluearray = [Number((data.resultList[0].c84) * 100).toFixed(2),
              Number((data.resultList[0].c72) * 100).toFixed(2),
              Number(data.resultList[0].c71).toFixed(0)]
            }
          }
        }, error: (error: any) => {
          this.checkloading = false;

        }
      })
  }

  useranalysissave() {
    localStorage.setItem('useranalysis', this.useranalysisinput);
  }

  // useranalysisSubmit() {

  //   this.assesment = "\n\nFixed Data" +
  //     "\n\nObserve" +
  //     "\n" + this.responseresultcm.b5 +
  //     "\n\nUser Personas" +
  //     "\n" + "Rohan" + " " + "Age : 28 " +
  //     "Occupation : Software Engineer " +
  //     "Location : Bengaluru" +
  //     "Tech - savvy, loves gadgets and is fitness conscious. " +
  //     "Goals : Stay updated with tech, improve his health, manage work - life balance. " +
  //     "Pain Points : Wants a longer battery life, expects a sleek design without compromising functionality." +
  //     "\n" + "Aarti" + " " + "Age : 34 " +
  //     "Occupation : School Teacher " +
  //     "Location : Mumbai " +
  //     "Not very tech-savvy but wants to track her steps and calories. Also loves to swim. " +
  //     "Goals : Stay fit, keep track of her schedule, ensure the watch is water-resistant. " +
  //     "Pain Points : Wants an easy user interface, needs localized language support." +
  //     "\n" + "Vikram" + " " + "Age : 22 " +
  //     "Occupation : College Student " +
  //     "Location : Pune " +
  //     "Into fashion, looking for affordable options with a good look. " +
  //     "Goals : Make a style statement, stay connected, manage his college schedule. " +
  //     "Pain Points : Affordability, wishes for customizable watch faces to match his style." +
  //     "\n\nUser Interviews" +
  //     "\n" + "Rohan" + " " + "I love tech, but I hate having to charge devices often. " +
  //     "I wish my smartwatch could last at least 4 days on a single charge. Also, I want it to sync seamlessly " +
  //     "with my phone and laptop." +
  //     "\n" + "Aarti" + " " + "I need something simple to understand. It would be a plus " +
  //     "if it can have features in Hindi. Also, I swim daily, so water resistance is a must." +
  //     "\n" + "Vikram" + " " + "For me, it's about style and functionality. I want something " +
  //     "that looks great on my wrist but doesn't burn a hole in my pocket." +
  //     "\n\nUsual Journey Map" +
  //     "\n" + "Journey Map 1" + " " + "Discovery : Reads about the new smartwatch on a tech blog. " +
  //     "Consideration : Checks reviews on YouTube and compares with other brands. " +
  //     "Purchase : Buys it online during a sale. " +
  //     "Usage : Wears it daily, syncs with his devices, occasionally uses fitness features. " +
  //     "Advocacy : Recommends to friends if he finds the feature satisfactory." +
  //     "\n" + "Journey Map 2" + " " + "Discovery : Hears about the watch from a colleague. " +
  //     "Consideration : Visits a retail store to try it on. " +
  //     "Purchase : Buys it from the store for the feel-good factor. " +
  //     "Usage : Uses it mainly for fitness tracking and schedule reminders. " +
  //     "Advocacy : Shares experience with other if it's easy to use and helps stay organized." +
  //     "\n\nSentiment Analysis" +
  //     "\nHistorical data based on users feedback" +
  //     "\n" + this.responseresultcm.d22 + " " + Number(this.responseresultcm.e22) * 100 + "%" +
  //     "\n" + this.responseresultcm.d23 + " " + Number(this.responseresultcm.e23) * 100 + "%" +
  //     "\n" + this.responseresultcm.d24 + " " + Number(this.responseresultcm.e24) * 100 + "%" +
  //     "\n\n" + this.responseresultcm.d26 + " " + this.responseresultcm.e26 + " " + this.responseresultcm.f26 + " " + this.responseresultcm.g26 + " " + this.responseresultcm.h26 + " " + this.responseresultcm.i26 + " " + this.responseresultcm.j26 +
  //     "\n" + this.responseresultcm.d27 + " " + Number(this.responseresultcm.e27) * 100 + "%" + " " + Number(this.responseresultcm.f27) * 100 + "%" + " " + Number(this.responseresultcm.g27) * 100 + "%" + " " + this.responseresultcm.h27 + " " + this.responseresultcm.i27 + " " + this.responseresultcm.j27 +
  //     "\n" + this.responseresultcm.d28 + " " + Number(this.responseresultcm.e28) * 100 + "%" + " " + Number(this.responseresultcm.f28) * 100 + "%" + " " + Number(this.responseresultcm.g28) * 100 + "%" + " " +
  //     "\n" + this.responseresultcm.d29 + " " + Number(this.responseresultcm.e29) * 100 + "%" + " " + Number(this.responseresultcm.f29) * 100 + "%" + " " + Number(this.responseresultcm.g29) * 100 + "%" + " " + this.responseresultcm.h29 + " " + this.responseresultcm.i29 + " " + this.responseresultcm.j29 +
  //     "\n" + this.responseresultcm.d30 + " " + Number(this.responseresultcm.e30) * 100 + "%" + " " + Number(this.responseresultcm.f30) * 100 + "%" + " " + Number(this.responseresultcm.g30) * 100 + "%" + " " + this.responseresultcm.h30 + " " + this.responseresultcm.i30 + " " + this.responseresultcm.j30 +
  //     "\n" + this.responseresultcm.d31 + " " + Number(this.responseresultcm.e31) * 100 + "%" + " " + Number(this.responseresultcm.f31) * 100 + "%" + " " + Number(this.responseresultcm.g31) * 100 + "%" + " " + this.responseresultcm.h31 + " " + this.responseresultcm.i31 + " " + this.responseresultcm.j31 +
  //     "\n" + this.responseresultcm.d32 + " " + Number(this.responseresultcm.e32) * 100 + "%" + " " + Number(this.responseresultcm.f32) * 100 + "%" + " " + Number(this.responseresultcm.g32) * 100 + "%" + " " +
  //     "\n" + this.responseresultcm.d33 + " " + Number(this.responseresultcm.e33) * 100 + "%" + " " + Number(this.responseresultcm.f33) * 100 + "%" + " " + Number(this.responseresultcm.g33) * 100 + "%" + " " + this.responseresultcm.h33 + " " + this.responseresultcm.i33 + " " + this.responseresultcm.j33 +
  //     "\n" + this.responseresultcm.d34 + " " + Number(this.responseresultcm.e34) * 100 + "%" + " " + Number(this.responseresultcm.f34) * 100 + "%" + " " + Number(this.responseresultcm.g34) * 100 + "%" + " " + this.responseresultcm.h34 + " " + this.responseresultcm.i34 + " " + this.responseresultcm.j34 +
  //     "\n" + this.responseresultcm.d35 + " " + Number(this.responseresultcm.e35) * 100 + "%" + " " + Number(this.responseresultcm.f35) * 100 + "%" + " " + Number(this.responseresultcm.g35) * 100 + "%" + " " + this.responseresultcm.h35 + " " + this.responseresultcm.i35 + " " + this.responseresultcm.j35 +
  //     "\n\nSWOT Analysis" +
  //     "\nStrength " + " " + " Market Experience: Already have a 20% market share with fitness trackers in urban India. " +
  //     "Location : Based in Bengaluru, a tech hub, providing access to talent and innovation. " +
  //     "Consumer Insight : Historical data and research insights from past products. " +
  //     "\nWeakness " + " " + "New Segment : No experience in the smartwatch sector. " +
  //     "Resource Constraints : Might be limited in terms of R&D budget compared to global giants. " +
  //     "Brand Recognition : Not as globally recognized as competitors like Apple or Samsung." +
  //     "\nOpportunities " + " " + "Growing Market : Indian smartwatch market witnessing a 30% YoY growth. " +
  //     "Localized Features : 50% of surveyed individuals desired features like local language support and Indian " +
  //     "payment gateways. " +
  //     "Health Consciousness : Rising fitness awareness among urban populations." +
  //     "\nThreats " + " " + "Competition : Presence of established brands with deep pockets. " +
  //     "Tech Evolution : Rapidly changing technology may require frequent updates and iterations. " +
  //     "Price Sensitivity: With brands like Noise and Boat offering affordable options, pricing the " +
  //     "product competitively is crucial." +
  //     "\n\nGap Analysis" +
  //     "\nPoint 1 " + " " + "Battery Life : 85% preference, but most brands offer only 1-2 days of battery life. " +
  //     "Gap : Extended battery life of 3-4 days." +
  //     "\nPoint 2 " + " " + "Affordability : 65% users prioritize this, but top-tier smartwatches are expensive. " +
  //     "Gap : A mid-range smartwatch with premium features." +
  //     "\nPoint 3 " + " " + "Localization: 60% showed preference, but few international brands cater specifically to " +
  //     "Indian preferences. Gap : Features like regional language support and local payment integration." +
  //     "\n\nConstraints" +
  //     "\nPoint 1 " + " " + "Budget : Limited R&D funds compared to global competitors." +
  //     "\nPoint 2 " + " " + "Manufacturing : Achieving a balance between quality and affordability in production." +
  //     "\nPoint 3 " + " " + "Time : Rapidly evolving market; delay in launch might result in outdated technology." +
  //     "\nPoint 4 " + " " + "Market Perception : Being perceived as a local brand might be a challenge when competing " +
  //     "against international giants." +
  //     "\n\n" + this.responseresultcm.l23 + " " + this.responseresultcm.m23 +
  //     "\n" + this.responseresultcm.l24 + " " + this.responseresultcm.m24 +
  //     "\n" + this.responseresultcm.l25 + " " + this.responseresultcm.m25 +
  //     "\n\n" + this.responseresultcm.l27 + " " + this.responseresultcm.m27 +
  //     "\n" + this.responseresultcm.l28 + " " + this.responseresultcm.m28 +
  //     "\n" + this.responseresultcm.l29 + " " + this.responseresultcm.m29 +
  //     "\n\n" + this.responseresultcm.l31 + " " + this.responseresultcm.m31 +
  //     "\n" + this.responseresultcm.l32 + " " + this.responseresultcm.m32 +
  //     "\n" + this.responseresultcm.l33 + " " + this.responseresultcm.m33 +
  //     "\n\n" + this.responseresultcm.o6 + " " + this.responseresultcm.p6 + " " + this.responseresultcm.q6 + " " + this.responseresultcm.r6 + " " + this.responseresultcm.s6 + " " + this.responseresultcm.t6 + " " + this.responseresultcm.u6 + " " + this.responseresultcm.v6 +
  //     "\n" + this.responseresultcm.o7 + " " + "Features : Advanced health metrics, Ayurvedic wellness insights, ECG, " +
  //     "regional health advisories. " +
  //     "Target Segment : Health-conscious adults, especially from urban areas like Bengaluru. " +
  //     "Closest Competitor : Apple Watch Series 6 (Market Share: 30%, Revenue: INR 15,000 Crore). " +
  //     "Context : Rising health consciousness among urban Indians." + " " +
  //     this.responseresultcm.q7 + " " + this.responseresultcm.r7 + " " + this.responseresultcm.s7 + " " + this.responseresultcm.t7 + " " + this.responseresultcm.u7 + " " +
  //     "'The wellness insights tailored to Indian health metrics are a refreshing change. However, the regional health " +
  //     "advisories could be more diverse, covering a broader range of health concerns. '" +
  //     "Future Want : 'It would be beneficial to have more local diet plans integrated and possibly partnerships " +
  //     "with local fitness trainers.'" +
  //     "\n" + this.responseresultcm.o8 + " " + "Features : Support for multiple Indian languages, instant translation, " +
  //     "cultural event reminders. " +
  //     "Target Segment : Multilingual professionals and seniors who prefer regional languages. " +
  //     "Closest Competitor : Garmin Venu (Market Share: 10%, Revenue: INR 3,500 Crore). " +
  //     "Context : 50% of users desired localized features." + " " +
  //     this.responseresultcm.q8 + " " + this.responseresultcm.r8 + " " + this.responseresultcm.s8 + " " + this.responseresultcm.t8 + " " + this.responseresultcm.u8 + " " +
  //     "'The instant translation feature is a lifesaver for those of us who travel within India frequently. " +
  //     "However, the cultural event reminders seem limited to a few major events. '" +
  //     "Future Want : 'More comprehensive coverage of regional festivals and events would be appreciated.'" +
  //     "\n" + this.responseresultcm.o9 + " " + "Features : Solar-powered, carbon footprint tracker, sustainability tips tailored for Indian users. " +
  //     "Target Segment : Environmentalists and the young urban population. " +
  //     "Closest Competitor : Garmin Fenix 6X Pro Solar (Market Share: 8%, Revenue: INR 2,800 Crore). " +
  //     "Context : Sustainability as a rising global and national trend." + " " +
  //     this.responseresultcm.q9 + " " + this.responseresultcm.r9 + " " + this.responseresultcm.s9 + " " + this.responseresultcm.t9 + " " + this.responseresultcm.u9 + " " +
  //     "'The carbon footprint tracker is a fantastic addition and makes me more mindful. However, the solar charging seems a bit slower than I anticipated. '" +
  //     "Future Want : 'Further optimizations for faster solar charging and maybe a tutorial on best practices for eco-friendly gadget usage.'" +
  //     "\n" + this.responseresultcm.o10 + " " + "Features : Collaborations with Indian designers, Diwali-themed watch faces, festive reminders. " +
  //     "Target Segment : Fashion-forward youth of metros. " +
  //     "Closest Competitor : Fossil Gen 5 (Market Share: 12%, Revenue: INR 4,500 Crore). " +
  //     "Context : Merging tech with Indian fashion." + " " +
  //     this.responseresultcm.q10 + " " + this.responseresultcm.r10 + " " + this.responseresultcm.s10 + " " + this.responseresultcm.t10 + " " + this.responseresultcm.u10 + " " +
  //     "'Absolutely adore the designs and the festive themes. Though, I wish there were more customizable options. '" +
  //     "Future Want : 'Collaborations with more Indian designers and perhaps some limited edition festive releases.'" +
  //     "\n" + this.responseresultcm.o11 + " " + "Features : Location tracking with Indian landmarks, educational apps tailored to the Indian curriculum. " +
  //     "Target Segment : School-going children and their parents. " +
  //     "Closest Competitor : Fitbit Ace 2 (Market Share: 15%, Revenue: INR 5,500 Crore). " +
  //     "Context : Safety and education in the Indian context." + " " +
  //     this.responseresultcm.q11 + " " + this.responseresultcm.r11 + " " + this.responseresultcm.s11 + " " + this.responseresultcm.t11 + " " + this.responseresultcm.u11 + " " +
  //     "'The educational apps are really insightful, and the location tracking offers peace of mind. Some more entertainment options for kids would be a bonus. '" +
  //     "Future Want : 'More diverse educational content and perhaps some games that are both fun and educational.'" +
  //     "\n" + this.responseresultcm.o12 + " " + "Features : Yoga and meditation tutorials, Indian spiritual calendar, temple locator. " +
  //     "Target Segment : Spiritually inclined users. " +
  //     "Closest Competitor : No direct competitor. " +
  //     "Context : Catering to India's rich spiritual heritage." + " " +
  //     this.responseresultcm.q12 + " " + this.responseresultcm.r12 + " " + this.responseresultcm.s12 + " " + this.responseresultcm.t12 + " " + this.responseresultcm.u12 + " " +
  //     "'As someone deeply rooted in spirituality, the features resonate well. I did expect more diverse content from various spiritual schools of thought. '" +
  //     "Future Want : 'Deeper teachings, guided meditation sessions, and more collaboration with spiritual gurus.'" +
  //     "\n" + this.responseresultcm.o13 + " " + "Features : Integration with UPI and other Indian payment systems, local shopping deals. " +
  //     "Target Segment : Urban shoppers and professionals. " +
  //     "Closest Competitor : Samsung Galaxy Watch 3 (Market Share: 20%, Revenue: INR 10,000 Crore with Samsung Pay). " +
  //     "Context : Growing digital payment trend in India." + " " +
  //     this.responseresultcm.q13 + " " + this.responseresultcm.r13 + " " + this.responseresultcm.s13 + " " + this.responseresultcm.t13 + " " + this.responseresultcm.u13 + " " +
  //     "'UPI integration is seamless, and the shopping deals are a great touch. More clarity on the security features would be reassuring. '" +
  //     "Future Want: 'Integration with more local payment gateways and a feature to track personal expenses and savings.'" +
  //     "\n" + this.responseresultcm.o14 + " " + "Features : Reminders for Indian academic schedules, study tools tailored to Indian syllabi. " +
  //     "Target Segment : Indian students. " +
  //     "Closest Competitor : Amazfit Bip U (Market Share: 7%, Revenue: INR 2,500 Crore). " +
  //     "Context : Digital learning and productivity for Indian students." + " " +
  //     this.responseresultcm.q14 + " " + this.responseresultcm.r14 + " " + this.responseresultcm.s14 + " " + this.responseresultcm.t14 + " " + this.responseresultcm.u14 + " " +
  //     "'It syncs well with academic schedules, which is very helpful. However, more tools and integration with popular online learning platforms would enhance its utility. '" +
  //     "Future Want : 'Study group features, collaborations with Indian ed-tech platforms, and perhaps a feature for parents to track their child's academic progress.'" +
  //     "\n" + this.responseresultcm.o15 + " " + "Features : Indian dance workout routines, Indian diet plans, local fitness challenges. " +
  //     "Target Segment : Fitness enthusiasts in India. " +
  //     "Closest Competitor : Fitbit Versa 3 (Market Share: 25%, Revenue: INR 12,000 Crore). " +
  //     "Context : Fitness tailored to Indian preferences." + " " +
  //     this.responseresultcm.q15 + " " + this.responseresultcm.r15 + " " + this.responseresultcm.s15 + " " + this.responseresultcm.t15 + " " + this.responseresultcm.u15 + " " +
  //     "'The dance workout routines are a fun way to stay fit. A wider variety of routines would keep it from becoming monotonous. '" +
  //     "Future Want : 'Integration with popular fitness platforms in India and perhaps live workout sessions tailored to Indian fitness preferences.'" +
  //     "\n" + this.responseresultcm.o16 + " " + "Features : Guides to Indian tourist spots, Indian festival alerts, local transport integration. " +
  //     "Target Segment : Indian and international travelers in India. " +
  //     "Closest Competitor : Suunto 7 (Market Share: 5%, Revenue: INR 1,500 Crore). " +
  //     "Context : Enhancing the travel experience within India. " + " " +
  //     this.responseresultcm.q16 + " " + this.responseresultcm.r16 + " " + this.responseresultcm.s16 + " " + this.responseresultcm.t16 + " " + this.responseresultcm.u16 + " " +
  //     "'It's the perfect companion for someone who travels frequently. Would love more in-depth guides and not just overviews. '" +
  //     "Future Want : 'Partnerships with local travel agencies for exclusive deals, and a feature to connect with fellow travelers.'" +
  //     "\n\n" + this.responseresultcm.x6 + " " + this.responseresultcm.y6 +
  //     "\n" + this.responseresultcm.x7 + " " + this.responseresultcm.y7 +
  //     "\n" + this.responseresultcm.x8 + " " + this.responseresultcm.y8 +
  //     "\n" + this.responseresultcm.x9 + " " + this.responseresultcm.y9 +
  //     "\n" + this.responseresultcm.x10 + " " + this.responseresultcm.y10 +
  //     "\n" + this.responseresultcm.x11 + " " + this.responseresultcm.y11 +
  //     "\n\n" + this.responseresultcm.x13 + " " + this.responseresultcm.y13 +
  //     "\n" + this.responseresultcm.x14 + " " + this.responseresultcm.y14 +
  //     "\n" + this.responseresultcm.x15 + " " + this.responseresultcm.y15 +
  //     "\n" + this.responseresultcm.x16 + " " + this.responseresultcm.y16 +
  //     "\n" + this.responseresultcm.x17 + " " + this.responseresultcm.y17 +
  //     "\n" + this.responseresultcm.x18 + " " + this.responseresultcm.y18 +
  //     "\n\n" + this.responseresultcm.x20 + " " + this.responseresultcm.y20 +
  //     "\n" + this.responseresultcm.x21 + " " + this.responseresultcm.y21 +
  //     "\n" + this.responseresultcm.x22 + " " + this.responseresultcm.y22 +
  //     "\n" + this.responseresultcm.x23 + " " + this.responseresultcm.y23 +
  //     "\n" + this.responseresultcm.x24 + " " + this.responseresultcm.y24 +
  //     "\n" + this.responseresultcm.x25 + " " + this.responseresultcm.y25 +
  //     "\n\n" + this.responseresultcm.x27 + " " + this.responseresultcm.y27 +
  //     "\n" + this.responseresultcm.x28 + " " + this.responseresultcm.y28 +
  //     "\n" + this.responseresultcm.x29 + " " + this.responseresultcm.y29 +
  //     "\n" + this.responseresultcm.x30 + " " + this.responseresultcm.y30 +
  //     "\n" + this.responseresultcm.x31 + " " + this.responseresultcm.y31 +
  //     "\n" + this.responseresultcm.x32 + " " + this.responseresultcm.y32 +
  //     "\n" + this.responseresultcm.x32 + " " + this.responseresultcm.y32 +
  //     "\n\n" + this.responseresultcm.x34 + " " + this.responseresultcm.y34 +
  //     "\n" + this.responseresultcm.x35 + " " + this.responseresultcm.y35 +
  //     "\n" + this.responseresultcm.x36 + " " + this.responseresultcm.y36 +
  //     "\n" + this.responseresultcm.x37 + " " + this.responseresultcm.y37 +
  //     "\n" + this.responseresultcm.x38 + " " + this.responseresultcm.y38 +
  //     "\n" + this.responseresultcm.x39 + " " + this.responseresultcm.y39 +
  //     "\n\n" + this.responseresultcm.x41 + " " + this.responseresultcm.y41 +
  //     "\n" + this.responseresultcm.x42 + " " + this.responseresultcm.y42 +
  //     "\n" + this.responseresultcm.x43 + " " + this.responseresultcm.y43 +
  //     "\n" + this.responseresultcm.x44 + " " + this.responseresultcm.y44 +
  //     "\n" + this.responseresultcm.x45 + " " + this.responseresultcm.y45 +
  //     "\n" + this.responseresultcm.x46 + " " + this.responseresultcm.y46 +
  //     "\n" + this.responseresultcm.x47 + " " + this.responseresultcm.y47 +
  //     "\n\n" + this.responseresultcm.aa6 +
  //     "\n" + this.responseresultcm.aa7 + " " + this.responseresultcm.ab7 +
  //     "\n" + this.responseresultcm.aa8 + " " + this.responseresultcm.ab8 +
  //     "\n" + this.responseresultcm.aa9 + " " + this.responseresultcm.ab9 +
  //     "\n\n" + this.responseresultcm.aa11 + " " + this.responseresultcm.ab11 +
  //     "\n" + this.responseresultcm.aa12 + " " + this.responseresultcm.ab12 +
  //     "\n" + this.responseresultcm.aa13 + " " + this.responseresultcm.ab13 +
  //     "\n" + this.responseresultcm.aa14 + " " + this.responseresultcm.ab14 +
  //     "\n\n" + this.responseresultcm.aa16 +
  //     "\n" + this.responseresultcm.aa17 + " " + this.responseresultcm.ab17 + " " + this.responseresultcm.ac17 + " " + this.responseresultcm.ad17 +
  //     "\n" + this.responseresultcm.aa18 + " " + this.responseresultcm.ab18 + " " + this.responseresultcm.ac18 + " " + this.responseresultcm.ad18 +
  //     "\n" + this.responseresultcm.aa19 + " " + this.responseresultcm.ab19 + " " + this.responseresultcm.ac19 + " " + this.responseresultcm.ad19 +
  //     "\n" + this.responseresultcm.aa20 + " " + this.responseresultcm.ab20 + " " + this.responseresultcm.ac20 + " " + this.responseresultcm.ad20 +
  //     "\n" + this.responseresultcm.aa21 + " " + this.responseresultcm.ab21 + " " + this.responseresultcm.ac21 + " " + this.responseresultcm.ad21 +
  //     "\n" + this.responseresultcm.aa22 + " " + this.responseresultcm.ab22 + " " + this.responseresultcm.ac22 + " " + this.responseresultcm.ad22 +
  //     "\n\n" + this.responseresultcm.aa24 +
  //     "\n" + this.responseresultcm.aa25 + " " + this.responseresultcm.ab25 +
  //     "\n" + this.responseresultcm.aa26 + " " + this.responseresultcm.ab26 +
  //     "\n" + this.responseresultcm.aa27 + " " + this.responseresultcm.ab27 +
  //     "\n" + this.responseresultcm.aa28 + " " + this.responseresultcm.ab28 +
  //     "\n" + this.responseresultcm.aa29 + " " + this.responseresultcm.ab29 +
  //     "\n" + this.responseresultcm.aa30 + " " + this.responseresultcm.ab30 +
  //     "\n" + this.responseresultcm.aa31 + " " + this.responseresultcm.ab31 +
  //     "\n\n" + this.responseresultcm.aa33 + " " + this.responseresultcm.ab33 + " " + this.responseresultcm.ac33 + " " + this.responseresultcm.ad33 +
  //     "\n" + this.responseresultcm.aa34 + " " + this.responseresultcm.ab34 + " " + this.responseresultcm.ac34 + " " + this.responseresultcm.ad34 +
  //     "\n" + this.responseresultcm.aa35 + " " + this.responseresultcm.ab35 + " " + this.responseresultcm.ac35 + " " + this.responseresultcm.ad35 +
  //     "\n" + this.responseresultcm.aa36 + " " + this.responseresultcm.ab36 + " " + this.responseresultcm.ac36 + " " + this.responseresultcm.ad36 +
  //     "\n" + this.responseresultcm.aa37 + " " + this.responseresultcm.ab37 + " " + this.responseresultcm.ac37 + " " + this.responseresultcm.ad37 +
  //     "\n" + this.responseresultcm.aa38 + " " + this.responseresultcm.ab38 + " " + this.responseresultcm.ac38 + " " + this.responseresultcm.ad38 +
  //     "\n" + this.responseresultcm.aa39 + " " + this.responseresultcm.ab39 + " " + this.responseresultcm.ac39 + " " + this.responseresultcm.ad39 +
  //     "\n\n" + this.responseresultcm.aa41 +
  //     "\n" + this.responseresultcm.aa42 + " " + this.responseresultcm.ab42 + " " + this.responseresultcm.ac42 + " " + this.responseresultcm.ad42 + " " + this.responseresultcm.ae42 +
  //     "\n" + this.responseresultcm.aa43 + " " + this.responseresultcm.ab43 + " " + this.responseresultcm.ac43 + " " + this.responseresultcm.ad43 + " " + this.responseresultcm.ae43 +
  //     "\n" + this.responseresultcm.aa44 + " " + this.responseresultcm.ab44 + " " + this.responseresultcm.ac44 + " " + this.responseresultcm.ad44 + " " + this.responseresultcm.ae44 +
  //     "\n" + this.responseresultcm.aa45 + " " + this.responseresultcm.ab45 + " " + this.responseresultcm.ac45 + " " + this.responseresultcm.ad45 + " " + this.responseresultcm.ae45 +
  //     "\n" + this.responseresultcm.aa46 + " " + this.responseresultcm.ab46 + " " + this.responseresultcm.ac46 + " " + this.responseresultcm.ad46 + " " + this.responseresultcm.ae46 +
  //     "\n" + this.responseresultcm.aa47 + " " + this.responseresultcm.ab47 + " " + this.responseresultcm.ac47 + " " + this.responseresultcm.ad47 + " " + this.responseresultcm.ae47 +
  //     "\n\n" + this.responseresultcm.aa49 + " " + this.responseresultcm.ab49 + " " + this.responseresultcm.ac49 + " " + this.responseresultcm.ad49 + " " + this.responseresultcm.ae49 +
  //     "\n" + this.responseresultcm.aa50 + " " + this.responseresultcm.ab50 + " " + this.responseresultcm.ac50 + " " + this.responseresultcm.ad50 + " " + this.responseresultcm.ae50 +
  //     "\n" + this.responseresultcm.aa51 + " " + this.responseresultcm.ab51 + " " + this.responseresultcm.ac51 + " " + this.responseresultcm.ad51 + " " + this.responseresultcm.ae51 +
  //     "\n" + this.responseresultcm.aa52 + " " + this.responseresultcm.ab52 + " " + this.responseresultcm.ac52 + " " + this.responseresultcm.ad52 + " " + this.responseresultcm.ae52 +
  //     "\n" + this.responseresultcm.aa53 + " " + this.responseresultcm.ab53 + " " + this.responseresultcm.ac53 + " " + this.responseresultcm.ad53 + " " + this.responseresultcm.ae53 +
  //     "\n" + this.responseresultcm.aa54 + " " + this.responseresultcm.ab54 + " " + this.responseresultcm.ac54 + " " + this.responseresultcm.ad54 + " " + this.responseresultcm.ae54 +
  //     "\n\n" + this.responseresultcm.aa56 +
  //     "\n" + this.responseresultcm.aa57 + " " + this.responseresultcm.ab57 +
  //     "\n" + this.responseresultcm.aa58 + " " + this.responseresultcm.ab58 + " " + "Extremely low market attractiveness. " +
  //     "The product is likely not resonating with the target audience at all. Complete re-evaluation is needed. " +
  //     "There might be a fundamental mismatch with user needs or a significant gap in product promotion and distribution." +
  //     "\n" + this.responseresultcm.aa59 + " " + this.responseresultcm.ab59 + " " + "Very low attractiveness. " +
  //     "Some segments of the audience is showing interest. Deep dive into market. What aspects are users finding slightly " +
  //     "appealing? Can these be amplified? Also, identify glaring issues and work on immediate remedies." +
  //     "\n" + this.responseresultcm.aa60 + " " + this.responseresultcm.ab60 + " " + "Low attractiveness. " +
  //     "Some features or promotional activities are generating interest, but the product is still falling short. Prioritize " +
  //     "refinement. Focus on user behaviour to understand user needs and preferences better." +
  //     "\n" + this.responseresultcm.aa61 + " " + this.responseresultcm.ab61 + " " + "Below average attractiveness. " +
  //     "The product may have decent features, but execution might be overshadowing it. Indentify in ideation. What are " +
  //     "the closest product and their revenue? Consider revamping marketing strategies or enhancing product features." +
  //     "\n" + this.responseresultcm.aa62 + " " + this.responseresultcm.ab62 + " " + "Moderate attractiveness. " +
  //     "The product is at the market's average level, indicating it's on the right track but needs differentiation. " +
  //     "Focus on unique selling propositions (USPs). What can set your product apart? Amplify that in promotions and possibly invest more in distribution channels." +
  //     "\n" + this.responseresultcm.aa63 + " " + this.responseresultcm.ab63 + " " + "Above average attractiveness. " +
  //     "The product is resonating with many, but there's room for improvement. Continuous refinement. " +
  //     "Identify areas of improvement, and keep an eye on user trends." +
  //     "\n" + this.responseresultcm.aa64 + " " + this.responseresultcm.ab64 + " " + "High attractiveness. " +
  //     "The product is popular, with many factors working in its favor. Scale up. Consider increasing production " +
  //     "in future, expanding to new regions, or amplifying promotional activities." +
  //     "\n" + this.responseresultcm.aa65 + " " + this.responseresultcm.ab65 + " " + "Very high attractiveness. " +
  //     "The product is a major player in the market, only overshadowed by top competitors or certain external factors. " +
  //     "The future path is to Innovate. Introduce new features, collaborate with popular brands, or offer exclusive deals to consolidate the market position." +
  //     "\n" + this.responseresultcm.aa66 + " " + this.responseresultcm.ab66 + " " + "Extremely high attractiveness. " +
  //     "The product is a on a way to market leader in its niche category, with just a few minor areas of improvement. " +
  //     "Maintain and grow. Ensure consistent quality, customer service, and continuous minor innovations to stay ahead." +
  //     "\n" + this.responseresultcm.aa67 + " " + this.responseresultcm.ab67 + " " + "Peak market attractiveness. " +
  //     "The product has a good start in the niche segment. Dominate and expand into future. Look into adjacent market " +
  //     "segments,feature expansion, or diversifying the product line to leverage the strong brand reputation." +


  //     "\n\nPlayer's Input based on the system information" +
  //     "\n" + "Parameters" + " " + "Input" +
  //     "\n" + "Target: Battery Life, Days " + " " + this.result[0] +
  //     "\n" + "Target: Affordability, INR " + " " + this.result[1] +
  //     "\n" + "Target: Localization, % " + " " + this.result[2] * 100 + "%" +
  //     "\n" + "Idea 1 " + " " + this.result[3] +
  //     "\n" + "Idea 2 " + " " + this.result[4] +
  //     "\n" + "Idea 3 " + " " + this.result[5] +
  //     "\n" + "Product 1 " + " " + this.result[6] +
  //     "\n" + "Battery Life " + " " + this.result[7] * 100 + "%" +
  //     "\n" + "Design & Aesthetics " + " " + this.result[8] +
  //     "\n" + "Localized Language Support " + " " + this.result[9] +
  //     "\n" + "Seamless Syncing " + " " + this.result[10] +
  //     "\n" + "Water Resistance " + " " + this.result[11] +
  //     "\n" + "Customizable Watch Faces " + " " + this.result[12] +
  //     "\n" + "Unique Health Features " + " " + this.result[13] +
  //     "\n" + "Indian Payment System Integration " + " " + this.result[14] +
  //     "\n" + "Product 2 " + " " + this.result[15] +
  //     "\n" + "Battery Life " + " " + this.result[16] * 100 + "%" +
  //     "\n" + "Design & Aesthetics " + " " + this.result[17] +
  //     "\n" + "Localized Language Support " + " " + this.result[18] +
  //     "\n" + "Seamless Syncing " + " " + this.result[19] +
  //     "\n" + "Water Resistance " + " " + this.result[20] +
  //     "\n" + "Customizable Watch Faces " + " " + this.result[21] +
  //     "\n" + "Unique Health Features " + " " + this.result[22] +
  //     "\n" + "Indian Payment System Integration " + " " + this.result[23] +
  //     "\n" + "Product 3 " + " " + this.result[24] +
  //     "\n" + "Battery Life " + " " + this.result[25] * 100 + "%" +
  //     "\n" + "Design & Aesthetics " + " " + this.result[26] +
  //     "\n" + "Localized Language Support " + " " + this.result[27] +
  //     "\n" + "Seamless Syncing " + " " + this.result[28] +
  //     "\n" + "Water Resistance " + " " + this.result[29] +
  //     "\n" + "Customizable Watch Faces " + " " + this.result[30] +
  //     "\n" + "Unique Health Features " + " " + this.result[31] +
  //     "\n" + "Indian Payment System Integration " + " " + this.result[32] +
  //     "\n" + "Product Launch " + " " + this.result[33] +
  //     "\n" + "Price, INR " + " " + this.result[34] +
  //     "\n" + "Advertising, INR Million " + " " + this.result[35] +
  //     "\n" + "Warranty Period " + " " + this.result[36] +
  //     "\n" + "Distributor/Wholesaler, INR Million " + " " + this.result[37] +
  //     "\n" + "E-commerce, INR Million " + " " + this.result[38] +
  //     "\n" + "Telecom Partnerships, INR Million " + " " + this.result[39] +
  //     "\n" + "Direct-to-consumer, INR Million " + " " + this.result[40] +


  //     "\n\nSystem Generated Output based on the user Input " +
  //     "\n" + "Parameter " + " " + "Output" +
  //     "\n" + "Revenue " + " " + this.responseresultdatabase.c74 +
  //     "\n" + "Variable Cost " + " " + this.responseresultdatabase.c75 +
  //     "\n" + "Gross Profit " + " " + this.responseresultdatabase.c76 +
  //     "\n" + "Production Line Cost " + " " + this.responseresultdatabase.c77 +
  //     "\n" + "Administration Cost " + " " + this.responseresultdatabase.c78 +
  //     "\n" + "Market Research Cost " + " " + this.responseresultdatabase.c79 +
  //     "\n" + "Advertising Cost" + " " + this.responseresultdatabase.c80 +
  //     "\n" + "Channel Investment Cost " + " " + this.responseresultdatabase.c81 +
  //     "\n" + "Total Fixed Cost " + " " + this.responseresultdatabase.c82 +
  //     "\n" + "Profit " + " " + this.responseresultdatabase.c83 +
  //     "\nParameter" + " " + "Output" +
  //     "\n" + "Attractiveness Score " + " " + this.responseresultdatabase.c71 +
  //     "\n" + "Market Share, % " + " " + Number(this.responseresultdatabase.c72) * 100 + "%" +
  //     "\n" + "Units Sold " + " " + this.responseresultdatabase.c73 +
  //     "\n" + "Margin, %  " + " " + Number(this.responseresultdatabase.c84) * 100 + "%"



  //   this.feedback = this.assesment;
  //   console.log('assesmentlist', this.feedback);

  //   if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
  //     this.getuseranalysisValue();
  //   }
  // }

  private buildUserAnalysis(responseresultcm: any, result: any[], responseresultdatabase: any): string {
    try {
      const lines: string[] = [];
      lines.push('Participant analysis for microsimulation');
      // Key inputs (battery, affordability, localization)
      lines.push(`Targets → Battery Life (days): ${result?.[0] ?? '-'}, Affordability (INR): ${result?.[1] ?? '-'}, Localization (%): ${Number(result?.[2] ?? 0)}`);
      // Selected ideas summary
      const idea1 = responseresultcm?.d27 ?? '';
      const idea2 = responseresultcm?.d28 ?? '';
      const idea3 = responseresultcm?.d29 ?? '';
      if (idea1 || idea2 || idea3) {
        lines.push(`Ideas: ${[idea1, idea2, idea3].filter(Boolean).join(' | ')}`);
      }
      // Basic KPIs
      const revenue = responseresultdatabase?.c74;
      const variableCost = responseresultdatabase?.c75;
      const grossProfit = responseresultdatabase?.c76;
      const marginPct = Number(responseresultdatabase?.c84 ?? 0) * 100;
      lines.push(`KPIs → Revenue: ${revenue}, Variable Cost: ${variableCost}, Gross Profit: ${grossProfit}, Margin %: ${isNaN(marginPct) ? '-' : marginPct.toFixed(0)}%`);
      return lines.join('\n');
    } catch {
      return 'Participant analysis for microsimulation';
    }
  }

  useranalysisSubmit() {
    this.feedback = this.buildUserAnalysis(this.responseresultcm, this.result, this.responseresultdatabase);
    console.log('saving useranalysis', this.feedback);

    if ((this.analysisshow == true) && (this.submitprove == 'yes')) {
      this.getuseranalysisValue();
    }

  }


  getuseranalysisValue() {
    this._api.fetchassessment(this.coursecode, this.studentsectionid, 'student', Number(this.noofattempt), "coursecode").subscribe(
      (data: { status: string; resultList?: { studentsentiment: string }[] }) => {
        if (data.status === 'Success' && data.resultList?.length) {
          this.useranalysisinput = data.resultList[0].studentsentiment || '';
        } else {
          this.useranalysisinput = localStorage.getItem('useranalysis') || '';
        }
        this.checkloading = false;
      },
      () => this.checkloading = false // Error handling
    );

  }

  roundClick() {
    let attempt = this.roundname.split(" ");
    this.checkloading = true;
    this.getFetchData(attempt[1]);
  }

  decisionchecklistpopup() {
    this.inputDataCheck();
  }

  inputDataCheck() {
    this.errorlist = [];
    const checkConditions = (indices: number[], message: string) => {
      if (indices.every(index => this.result[index] == 'Not Launched')) {
        this.errorlist.push(message);
        this.inputdatacheckvalue = true;
      }
    };

    checkConditions([3, 4, 5], "To move ahead, kindly make your decisions in Ideate");
    checkConditions([6, 15, 24], "To move ahead, kindly make your decisions in Prototype & Test");

    if (this.errorlist.length > 0) {
      this.inputdatacheckvalue = true;
    }

    if (!this.inputdatacheckvalue) {
      this.saveDecisionChecklist();
    } else {
      const dialogRef = this.dialog.open(BlankinputlistComponent, {
        width: '60%',
        data: this.errorlist,
      });
      dialogRef.afterClosed().subscribe(result => { });
    }
  }

  saveDecisionChecklist() {
    if ((this.analysisshow && this.useranalysisinput.length < 10)) {
      this._alert.error("To move ahead, kindly Write your analysis");
      return;
    }

    if (this.noofattempt == "1" && this.foodforthought && this.foodforthoughtQNo != 8) {
      this._alert.error("To move ahead finish Food For Thought section");
      return;
    }
    this.useranalysisSubmit();
    const openDialog = () => {
      const dialogRef = this.dialog.open(DesignthinkingPopup, {
        data: {
          class: 'p-0',
          foodforthoughtqno: this.foodforthoughtQNo,
          participantsentiment: this.useranalysisinput,
          assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
          feedback: this.feedback,
          submitprove: this.submitprove,
          analysisshow: this.analysisshow,
          kpivaluearray: this.kpivaluearray,
        },
        panelClass: 'custom-dialog-container'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.newItemEvent.emit('report');
        }
      });
    };

    openDialog();
  }
  // saveDecisionChecklist() {
  //   if ((this.noofattempt == "1" && this.foodforthoughtQNo != 8)) {
  //     this._alert.error("To move ahead finish Food For Thought section");
  //     return;
  //   }

  //   if (this.analysisshow && this.useranalysisinput.length < 10) {
  //     this._alert.error("To move ahead, kindly Write your analysis");
  //     return;
  //   }

  //   const dialogRef = this.dialog.open(DesignthinkingPopup, {
  //     data: {
  //       class: 'p-0',
  //       foodforthoughtqno: this.foodforthoughtQNo,
  //       participantsentiment: this.useranalysisinput,
  //       assesment: "Participant analysis for microsimulation\n" + this.useranalysisinput + this.assesment,
  //       feedback: this.feedback,
  //       submitprove: this.submitprove,
  //       analysisshow: this.analysisshow,
  //       kpivaluearray: this.kpivaluearray,
  //     },
  //     panelClass: 'custom-dialog-container'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.newItemEvent.emit('report');
  //     }
  //   });

  // }
}


// Design Thinking POpUp

@Component({
  selector: 'app-designthinkingpopup',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule],
  templateUrl: './designthinkingpopup.html',
  styleUrls: ['./designthinkingdecisionchecklist.component.scss']
})

export class DesignthinkingPopup extends AbstractComponent {

  showtab: boolean = true;
  btndisabled: boolean = false;

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    private Sharedservice: SharedserviceService,
    _restapiservice: RestapiService, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DesignthinkingPopup>) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.checkloading = false;
  }

  save() {
    this.btndisabled = true;
    this.checkloading = true;
    const apiname = '/designthinking/singleinputdesignthinking';
    const decisionsubmitData = { "af65": "yes" };

    this._api.promotionsdatawrite("designthinking", 1, decisionsubmitData, apiname, 'designthinkingcmid').subscribe(
      (data: { status: string }) => {
        if (data.status === "Success") {
          this._login.savekpivalue(
            this.data.kpivaluearray[0],
            this.data.kpivaluearray[1],
            this.data.kpivaluearray[2],
            'update',
            this.noofattempt
          );

          if (['no', 'No'].includes(this.data.submitprove) && this.data.analysisshow) {
            this.sendAssesmentValue();
          } else {
            this.Sharedservice.enableTab();
            this.checkloading = false;

            this.dialogRef.close(true);
          }
        } else {
          this.btndisabled = false;
        }
        // this.checkloading = false;
      },
      (error: any) => {
        this.btndisabled = false;
        this.checkloading = false;
        this.driveerrorLog(error, apiname);
      }
    );
  }

  async sendfeedbackvalue() {
    let apiname = "/feedback/gptfeedback";
    await this._api.gptfeedback(this.noofattempt, this.data.feedback, apiname, "Desing Thinking").subscribe((data: any) => {

      if (data.status == "Success") {

      }

    }, (error: any) => {
      this.checkloading = false;
    })
  }

  async sendAssesmentValue() {
    let apiname = "/assessment/gptassessment";
    await this._api.gptassessment(this.noofattempt, this.data.participantsentiment, this.data.assesment,
      apiname, "Desing Thinking").subscribe((data: any) => {

        if (data.status == "Success") {

          setTimeout(() => {
            this.sendfeedbackvalue();
          }, 4000);
          setTimeout(() => {
            this.Sharedservice.enableTab();
            this.checkloading = false;
            this.dialogRef.close(true);
          }, 10000);
        } else {
          this.checkloading = false;
          this._alert.error(data.status);
        }

      }, (error: any) => {
        this.checkloading = false;
      })

  }

  close() {
    this.dialogRef.close(false);
  }
}