import { Component, Inject, inject, Input, OnInit, signal } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { GameConfigService } from 'src/app/service/game-config/game-configService';
import { gameConfig } from 'src/app/service/game-config/game-configforToolbar';

interface Material {
  headingname: string;
  description: string;
  fileurl: string;
}

@Component({
  selector: 'app-readingvideopopup',
  templateUrl: 'readingvideopopup.html',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class ReadingvideopopupComponent implements OnInit {
  videourl: string = '';
  safePdfUrl: SafeResourceUrl | undefined;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data);
  }
}

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class ReadingComponent extends AbstractComponent {
  instructorcarddetails: any = [];

  instructormaterialList: any = [];
  allMaterialList: any = [];

  @Input() gamename = "";


  cardlist: any = [
    {
      title: "",
      text: "",
      button: ""
    }
  ]


  pdfText: string = '';
  videourl: string = '';
  languagesub: Subscription;
  language: string = '';
  bodyContent: any;
  readingarray: any = [
    "Materials from Instructor", "Decision-making instruction",
    "The decision-making process is introduced in this document step-by-step", "A tutorial on making step-by-step decisions", "Reading",
    "Game Instructions", "Walkthrough video","Read","View"
  ];
  commonData: any = {};
  headingarray: any = [];
  commonarray: any[] = [];
  apiNameForGame: string = '';
  simulationName: string = '';
  gamenamesub: Subscription


  languageSelect: Record<string, string> = {};
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog, private sharedService: SharedserviceService,
    private gameConfigService: GameConfigService) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.languagesub = this._global.language.subscribe((data) => {
      this.language = data;
      if (this.language != null) {
        this.language = this.language.toLowerCase();
      }
    });
    this.gamenamesub = this._global.gamename.subscribe((data) => {
      this.simulationName = data;
    });

  }
  private hasFetched = false;
  override ngOnInit(): void {
    this.getTableData('webstudent', 'student');

    this.sharedService.bodyContent$.subscribe((content) => {
      this.bodyContent = content;

      if ((!this.hasFetched) && (this.bodyContent != "") && (this.noofattempt != "")) {
        this.getFetchData();
        this.hasFetched = true;
      }
    });




    // const gameNameMapping: Record<string, string> = {
    //   consumerbehaviournew: "Product & Consumer New",
    //   promotionsnew: "Promotions & Segments New",
    //   valuechainnew: "Value Chain New",
    //   hrplanningnew: "HRP New"
    // };
    // if (this.gamename) {
    //   const mappedKey = gameNameMapping[this.gamename.toLowerCase()];
    //   const config = gameConfig[mappedKey];

    //   if (config) {
    //     this.readingarray = config.readingkeys || [];
    //     this.getFetchData();
    //   } else {
    //     console.warn(`No config found for gamename: ${this.gamename}`);
    //   }
    // }


    // this.gameConfigService.getLanguageData(this.gamename, this.noofattempt, this.language, this.bodyContent.courseDetails.coursedetailsid)
    //   .subscribe((data) => {
    //     // overwrite only if backend gives something
    //     if (data.readingarray && data.readingarray.length) {
    //       this.readingarray = data.readingarray;
    //     }
    //   });
  }



  getFetchData() {
    const config = gameConfig[this.simulationName];  // dynamically fetch config
    if (!config) {
      console.warn("Game config not found:", this.simulationName);
      return;
    }

    let apiname = config.api;

    this._api.fetchLanguageDataForToolbar(apiname, this.noofattempt, this.language, this.bodyContent.courseDetails.coursedetailsid).subscribe({
      next: (data: any) => {
        if (data.status === "Success" && data.resultList) {
          if (config.type === "heading") {
            this.languageSelect = data.resultList[0][config.lmKey][this.language.toLowerCase()];
            this.readingarray = (config.readingkeys || []).map(
              (key: string) => this.languageSelect[key] || key  // fallback to key if missing
            );
          }
          else if (config.type === "common") {
            this.commonData = data.resultList[0][config.lmKey][`${config.commonPrefix}${this.language.toLowerCase()}`] || {};
            this.readingarray = (config.readingkeys || []).map(
              (key: string) => this.commonData[key] || key
            )
          }

        }
      },
      error: (error: any) => {
        console.error(error);
      }
    });


  }

  getTableData(caller: string, usermode: string) {
    let apiname = '/material/fetchmaterial';

    this._api.fetchMaterialData(
      caller,
      usermode,
      'student',
      this.studentelementdetailsvalue.courseDetails.simulation,
      'instructor',
      apiname,
      this.noofattempt
    ).subscribe({
      next: (data: any) => {

        if ((data.status == "Success")) {
          if (data.resultList != null) {
            for (let i = 0; i < data.resultList.length; i++) {
              if (usermode == 'student') {
                // Your important logic here
                this.instructormaterialList = data.resultList;
              }
            }
          }

          // Now call the second API only after the first is successful
          this._api.fetchMaterialData(
            caller,
            usermode,
            'student',
            this.studentelementdetailsvalue.courseDetails.simulation,
            'instructor',
            apiname,
            "all"
          ).subscribe({
            next: (data2: any) => {
              if (data2.status == "Success" && data2.resultList != null) {
                for (let i = 0; i < data2.resultList.length; i++) {
                  if (usermode == 'student') {
                    // Your important logic for the second call
                    this.allMaterialList = data2.resultList;
                  }
                }
              }
            },
            error: (error: any) => {
              // Handle error for second call
            }
          });
        }
      },
      error: (error: any) => {
        // Handle error for first call
      }
    });
  }

  // fileview(url: string) {

  //   window.open(url, '_blank');
  // }
  fileview(url: string) {
    if (url) {
      // Add https:// if missing
      if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
      }
      window.open(url, '_blank');
    }
  }

  openpdffordescription() {
    if (this.gamename == 'HRM_Fintech') {
      window.open('../../../assets/images/Fintech Case_HRM Simulation.pdf', '_blank');
    }
  }

  openpdf() {
    if (this.gamename == 'businessbasics') {
      window.open('../../../assets/images/Decision-making guide_Business Basics.pdf', '_blank');
    }
    else if ((this.gamename == 'productconsumer') || (this.gamename == 'consumerbehaviournew')) {
      window.open('../../../assets/images/Decision-making guide_Product and Consumer.pdf', '_blank');
    }
    else if (this.gamename == 'changemanagement') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Change Management.pdf', '_blank');
    } else if (this.gamename == 'changemanagementnew') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Change Management.pdf', '_blank');
    }
    else if (this.gamename == 'logistics') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Logistics.pdf', '_blank');
    }
    else if (this.gamename == 'Financial') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Financial Analysis.pdf', '_blank');
    }
    else if (this.gamename == 'Promotions & Segments') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Promotion.pdf', '_blank');
    }
    else if (this.gamename == 'Sales & Target') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Sales & Target.pdf', '_blank');
    }
    else if (this.gamename == 'portfolio') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Portfolio Management.pdf', '_blank');
    }
    else if (this.gamename == 'Value Chain') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Value Chain.pdf', '_blank');
    } else if (this.gamename == 'Value Chain New') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Value Chain.pdf', '_blank');
    } else if (this.gamename == 'CVP Analysis') {
      window.open('../../../assets/images/CESIM Decision Making Guide - CVP Analysis.pdf', '_blank');
    }
    else if ((this.gamename == 'Accounting') || (this.gamename == 'Accounting Arabic')) {
      window.open('../../../assets/images/CESIM Decision Making Guide - Accounting.pdf', '_blank');
    }
    else if (this.gamename == 'Pricing') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Pricing.pdf', '_blank');
    }
    else if (this.gamename == 'Design Thinking') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Design Thinking.pdf', '_blank');
    }
    else if (this.gamename == 'Mergers & Acquisition') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Mergers & Acquisition.pdf', '_blank');
    }
    else if (this.gamename == 'HRP') {
      window.open('../../../assets/images/CESIM Decision Making Guide - HRP.pdf', '_blank');
    }
    else if (this.gamename == 'Innovation') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Innovation.pdf', '_blank');
    }
    else if (this.gamename == 'CRM') {
      window.open('../../../assets/images/CESIM Decision Making Guide - CRM.pdf', '_blank');
    }
    else if (this.gamename == 'Ordering Basics') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Ordering.pdf', '_blank');
    }
    else if (this.gamename == 'STP') {
      window.open('../../../assets/images/CESIM Decision Making Guide - STP.pdf', '_blank');
    }
    else if (this.gamename == 'HRM_Fintech') {
      window.open('../../../assets/images/CESIM Decision Making Guide - HRM.pdf', '_blank');
    }
    else if (this.gamename == 'Capital Budgeting') {
      window.open('../../../assets/images/CESIM Decision Making Guide - Capital Budgeting.pdf', '_blank');
    }
    else if (this.gamename == 'Ecommerce') {
      window.open('../../../assets/images/CESIM Decision Making Guide - E-commerce.pdf', '_blank');
    }

  }

  workthroughvideo() {
    if (this.gamename == 'businessbasics') {
      this.videourl = 'https://www.youtube.com/embed/3XpL3LX-Gnk';
    } else if ((this.gamename == 'productconsumer') || (this.gamename == 'consumerbehaviournew')) {
      this.videourl = 'https://www.youtube.com/embed/KvhnO3XHreY';
    } else if (this.gamename == 'changemanagement') {
      this.videourl = 'https://www.youtube.com/embed/uhZuHZ1NNCw';
    } else if (this.gamename == 'changemanagementnew') {
      this.videourl = 'https://www.youtube.com/embed/uhZuHZ1NNCw';
    } 
    else if (this.gamename == 'logistics') {
      this.videourl = 'https://www.youtube.com/embed/oAdH5r4J6y4';
    } else if (this.gamename == 'Financial') {
      this.videourl = 'https://www.youtube.com/embed/fdGzYe54Fh4';
    } else if (this.gamename == 'Promotions & Segments') {
      this.videourl = 'https://www.youtube.com/embed/ml0rVY9uKxA?si=3Yyh9XsSkMGzeVJX';
    } else if (this.gamename == 'Sales & Target') {
      this.videourl = 'https://www.youtube.com/embed/gUnjCfjrXls';
    } else if (this.gamename == 'portfolio') {
      this.videourl = 'https://www.youtube.com/embed/bzV3dHOqA3g';
    } else if (this.gamename == 'Value Chain') {
      this.videourl = 'https://www.youtube.com/embed/uErnJLBiXGA';
    } else if (this.gamename == 'Value Chain New') {
      this.videourl = 'https://www.youtube.com/embed/uErnJLBiXGA';
    } else if (this.gamename == 'Accounting') {
      this.videourl = 'https://www.youtube.com/embed/u8rOTMjgimk';
    } else if (this.gamename == 'Pricing') {
      this.videourl = 'https://www.youtube.com/embed/yOrSkuFpopQ';
    } else if (this.gamename == 'HRP') {
      this.videourl = 'https://www.youtube.com/embed/3wb3k9x30G0';
    } else if (this.gamename == 'Design Thinking') {
      this.videourl = 'https://www.youtube.com/embed/sGlS3owNzwo';
    } else if (this.gamename == 'STP') {
      this.videourl = 'https://www.youtube.com/embed/788uUhMDbO4';
    } else if (this.gamename == 'Innovation') {
      this.videourl = 'https://www.youtube.com/embed/cVk1DulDblg';
    } else if (this.gamename == 'CRM') {
      this.videourl = 'https://www.youtube.com/embed/KQ6D4bZjG8I';
    } else if (this.gamename == 'Ordering Basics') {
      this.videourl = 'https://www.youtube.com/embed/fKnQSn1rYUo';
    } else if (this.gamename == 'Mergers & Acquisition') {
      this.videourl = 'https://www.youtube.com/embed/397uDuBwy-A';
    } else if (this.gamename == 'HRM_Fintech') {
      this.videourl = 'https://www.youtube.com/embed/Gsr-0bdZOj0';
    } else if (this.gamename == 'Ecommerce') {
      this.videourl = 'https://www.youtube.com/embed/A3N0uUYDDZY';
    }
    if (this.videourl != '') {
      const dialogRef = this.dialog.open(ReadingvideopopupComponent, {
        width: '50%',
        data: this.videourl
      });

      dialogRef.afterClosed().subscribe((result) => {
      });
    }
  }

  // getTableData(caller: string, usermode: string) {
  //   let apiname = '/material/fetchmaterial';
  //   this._api.fetchMaterialData(caller, usermode,
  //     'simulationname', this.cardlist.courseDetails.simulation, "instructor", apiname).subscribe(
  //       {
  //         next: (data: any) => {
  //           if (data.status == "Success") {
  //             if (data.resultList != null) {
  //               for (let i = 0; i < data.resultList.length; i++) {
  //                 if (usermode == 'instructor') {

  //                   this.cardlist.push(data.resultList[i])
  //                 }
  //                 // this.instructormaterialList = data.resultList;

  //                 else {
  //                   // this.adminmaterialList.push(data.resultList[i]);
  //                 }
  //               }


  //             }
  //             // if (this.doublecall == false) {
  //             //   this.getTableData('webadmin', 'admin');
  //             //   this.doublecall = true;
  //             // }


  //           } else {

  //           }
  //         }, error: (error: any) => {

  //         }
  //       })
  // }

}