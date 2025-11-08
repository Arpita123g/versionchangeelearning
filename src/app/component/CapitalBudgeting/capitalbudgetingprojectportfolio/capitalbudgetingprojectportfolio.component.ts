import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { CapitalbudgetingfoodforthoughtComponent } from '../capitalbudgetingfoodforthought/capitalbudgetingfoodforthought.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TippyDirective } from 'src/app/common/directive/tippy.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capitalbudgetingprojectportfolio',
  standalone: true,
  imports: [CommonModule, MatDialogModule, NgApexchartsModule,MatIconModule,TippyDirective,FormsModule],
  templateUrl: './capitalbudgetingprojectportfolio.component.html',
  styleUrls: ['./capitalbudgetingprojectportfolio.component.scss']
})
export class CapitalbudgetingprojectportfolioComponent extends AbstractComponent {
  foodforthought: boolean = true;
  inputDisabled: boolean = false;
  result: any = [];
  marketExpression = [
    {
      heading: "Global Outreach Initiative",
      img: "assets/images/capitalbudgeting/globleoutreach.svg",
      body: [
            { title: "j5", value: "j6" },
            { title: "k5", value: "k6" },
            { title: "l5", value: "l6" },
            { title: "m5", value: "m6" },
          ],
      description: "Expand market presence internationally through strategic partnerships and digital marketing.",
      ExpectedRate: 'ap7',
    },
    {
      heading: "Regional Domination Campaign",
      img: "assets/images/capitalbudgeting/reginoaldemination.svg",
      body: [
            { title: "j5", value: "j7" },
            { title: "k5", value: "k7" },
            { title: "l5", value: "l7" },
            { title: "m5", value: "m7" },
          ],
      description: "Strengthen market dominance in a specific region through targeted advertising and customer engagement.",
      ExpectedRate: 'ap8',
    },
    {
      heading: "Digital Transformation Drive",
      img: "assets/images/capitalbudgeting/digitaltransformationderive.svg",
      body: [
            { title: "j5", value: "j8" },
            { title: "k5", value: "k8" },
            { title: "l5", value: "l8" },
            { title: "m5", value: "m8" },
          ],
      description: "Implement advanced digital solutions to enhance customer experience and attract tech-savvy markets.",
      ExpectedRate: 'ap9',
    },
    {
      heading: "Emerging Markets Expansion",
      img: "assets/images/capitalbudgeting/emergingmarketexpension.svg",
      body: [
            { title: "j5", value: "j9" },
            { title: "k5", value: "k9" },
            { title: "l5", value: "l9" },
            { title: "m5", value: "m9" },
          ],
      description: "Enter emerging markets with tailored insurance products to capitalize on rising demand.",
      ExpectedRate: 'ap10',
    },
  ];

  operationalEfficiency = [
    {
      heading: "Efficiency Overhaul Program",
      img: "assets/images/capitalbudgeting/efficiencyoverhaulprogram.svg",
      body: [
        { title: "j5", value: "j10" },
        { title: "k5", value: "k10" },
        { title: "l5", value: "l10" },
        { title: "m5", value: "m10" },
      ],
      description: "Optimize internal processes and workflows to reduce operational costs and enhance efficiency.",
      ExpectedRate: 'ap11',
    },
    {
      heading: "Supply Chain Optimization",
      img: "assets/images/capitalbudgeting/supplychainoptimization.jpg",
      body: [
        { title: "j5", value: "j11" },
        { title: "k5", value: "k11" },
        { title: "l5", value: "l11" },
        { title: "m5", value: "m11" },
      ],
      description: "Streamline the supply chain to minimize lead times and reduce inventory costs.",
      ExpectedRate: 'ap12',
    },
    {
      heading: "Employee Training Enhancement",
      img: "assets/images/capitalbudgeting/employeetraningenhenchment.svg",
      body: [
        { title: "j5", value: "j12" },
        { title: "k5", value: "k12" },
        { title: "l5", value: "l12" },
        { title: "m5", value: "m12" },
      ],
      description: "Invest in employee training programs to improve skills and boost productivity.",
      ExpectedRate: 'ap13',
    },
  ];

  processImprovement = [
    {
      heading: "Automated Claims Processing",
      img: "assets/images/capitalbudgeting/automotedclaimprocessing.svg",
      body: [
        { title: "j5", value: "j13" },
        { title: "k5", value: "k13" },
        { title: "l5", value: "l13" },
        { title: "m5", value: "m13" },
      ],
      description: "Implement AI-driven systems to automate the claims processing workflow.",
      ExpectedRate: 'ap14',
    },
    {
      heading: "Customer Onboarding Redesign",
      img: "assets/images/capitalbudgeting/customeronboarding.svg",
      body: [
        { title: "j5 ", value: "j14" },
        { title: "k5: ", value: "k14" },
        { title: "l5", value: "l14" },
        { title: "m5", value: "m14" },
      ],
      description: "Revamp the customer onboarding process for a seamless and efficient experience.",
      ExpectedRate: 'ap15',
    },
    {
      heading: "Regulatory Compliance Enhancement",
      img: "assets/images/capitalbudgeting/regulatorycomplaince.svg",
      body: [
        { title: "j5", value: "j15" },
        { title: "k5", value: "k15" },
        { title: "l5", value: "l15" },
        { title: "m5", value: "m15" },
      ],
      description: "Invest in technologies and processes to enhance compliance with evolving regulatory standards.",
      ExpectedRate: 'ap16',
    },
    {
      heading: "Data Security Strengthening",
      img: "assets/images/capitalbudgeting/datasucuritystrenght.svg",
      body: [
        { title: "j5", value: "j16" },
        { title: "k5", value: "k16" },
        { title: "l5", value: "l16" },
        { title: "m5", value: "m16" },
      ],
      description: "Upgrade data security protocols to protect customer information and enhance trust.",
      ExpectedRate: 'ap17',
    },
  ];

  productExpansion = [
    {
      heading: "Innovative Insurance Products",
      img: "assets/images/capitalbudgeting/insurance.svg",
      body: [
        { title: "j5", value: "j17" },
        { title: "k5", value: "k17" },
        { title: "l5", value: "l17" },
        { title: "m5", value: "m17" },
      ],
      description: "Develop and launch innovative insurance products to meet evolving customer needs.",
      ExpectedRate: 'ap18',
    },
    {
      heading: "Partnership for New Market Entry",
      img: "assets/images/capitalbudgeting/pernership.svg",
      body: [
        { title: "j5", value: "j18" },
        { title: "k5", value: "k18" },
        { title: "l5", value: "l18" },
        { title: "m5", value: "m18" },
      ],
      description: "Form strategic partnerships to enter new markets and diversify the product portfolio.",
      ExpectedRate: 'ap19',
    },
    {
      heading: "Customizable Policy Options",
      img: "assets/images/capitalbudgeting/policy.svg",
      body: [
        { title: "j5", value: "j19" },
        { title: "k5", value: "k19" },
        { title: "l5", value: "l19" },
        { title: "m5", value: "m19" },
      ],
      description: "Introduce customizable insurance policy options to cater to diverse customer preferences.",
      ExpectedRate: 'ap20',
    },
  ];

  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) {
    super(_login, _api, _alert, _global, _router, _restapiservice);
  }

  override ngOnInit(): void {
    this.getFetchData();
  }



  getFetchData() {
    let apiname = '/cbgame/fetchcbgame';
    this._api.fetchGameData(apiname, this.noofattempt).subscribe(
      {
        next: (data: any) => {
          this.checkloading = false;
          if (data.status !== "Success" || !data.resultList) return;

          this.result = data.resultList[0];
          this._global.casemanagementid.next(this.result.cbgameid);
          this.foodforthought = this.result.cbGameCM.cbGameCMActiveStatus.foodforthoughtstatus !== 'inactive';

          if (this.result.cbgamedata) {
            this.inputDisabled = this.result.cbgamedata.ao39 === 'yes' || this.timefinished;
          }


        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })

  }

  writegameData(event: any, cell: string) {
  let value = Math.min(Math.max(event.target.value, 0), 30);
    if (value !== Number(event.target.value)) {
       value = 0;
       event.target.value = 0;
        this._alert.error("range between 0% to 30%");
    }

    this._api.writeGameData("cbgame", 1, { [cell]: value/100 }, "/cbgame/singleinputcbgame", 'cbgamecmid')
        .subscribe(
            (data: any) => data.status === "Success" && this.getFetchData?.(),
            (error: any) => {
                this.checkloading = false;
                this.driveerrorLog(error, "/cbgame/singleinputcbgame");
            }
        );
}



  openDialog(): void {
    this.dialog.open(CapitalbudgetingfoodforthoughtComponent, {
      data: {},
    });
  }
}
