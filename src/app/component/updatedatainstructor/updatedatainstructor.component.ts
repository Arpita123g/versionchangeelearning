import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

@Component({
  selector: 'app-updatedatainstructor',
  templateUrl: './updatedatainstructor.component.html',
  styleUrls: ['./updatedatainstructor.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class UpdatedatainstructorComponent extends AbstractComponent {

  constructor() {
    super();
  }

  override ngOnInit(): void {
    this.fetchDefaultStaticData();
  }

  fetchDefaultStaticData() {
    let data = {
      "instructoremail": "instructor2@gmail.com",
      "usermode": "instructor",
      "searchtype": "all",
      "searchcontent": "",
      "coursecode": "JlGGR",
      "instructorpanelid": 2398,
      "attempt": "1",
      "coursedetailsid": 2397
    }
    let apiname = '/businessbasics/fetchbusinessbasicsdefault';
    this._api.fetchdata(apiname).subscribe(
      {
        next: (data: any) => {
          if (data.status == "success") {
            if (data.resultList != null) {

              //****************code will be write****************/

            } else {
              this.checkloading.set(false);
            }
          } else {
            this.checkloading.set(false);
          }
        }, error: (error: any) => {
          this.checkloading.set(false);
          this.driveerrorLog(error, apiname);
        }
      }
    )
  }

  saveOrUpdateDefaultStaticData() {
    let apiname = '/businessbasiccasemanagement/cudbusinessbasiccasemanagement';
    let body = {
      "instructoremail": "instructor2@gmail.com",
      "usermode": "instructor",
      "coursecode": "JlGGR",
      "instructorpanelid": 2398,
      "attempt": "1",
      "coursedetailsid": 2397,
      "coursename": "businessbasic",
      "c4": "600000",
      "b7": "Jayanagar - Bengaluru University",
      "b8": "Whitefield - ITPL Corporate Park",
      "c7": "80000",
      "c8": "120000",
      "d7": "150",
      "d8": "500",
      "b11": "In-House Compliance",
      "b12": "Outsourcing to Compliance Agencies",
      "c11": "25000",
      "c12": "45000",
      "d11": "5",
      "d12": "0",
      "e11": "The company will hire one resource who will have complete oversight over the store's compliance needs. The resource will provide customized solutions as per the business needs. The one drawback would be without expert insights there may be blind spots which will cause delays in operations. ",
      "e12": "The outsourcing agency is ISBI Bank, these professionals are trained to stay up to date on changing regulations. There is the possibility of a quicker turnaround on getting compliant due to their experience. The drawback is they are expensive and relying on a third party for compliance might not always align with the company's business objective.",
      "b15": "Interest Cost/month",
      "c15": "0.75%",
      "g6": "Total Population",
      "g7": "Tea Drinker",
      "g8": "Number of Cups a day",
      "g9": "Sales a day",
      "g10": "Competition",
      "g11": "Sales/Competition",
      "g12": "Monthly Sale/Seller",
      "g13": "Days",
      "h6": "25000",
      "h7": "2500",
      "h8": "3",
      "h9": "7500",
      "h10": "10",
      "h11": "750",
      "h12": "19500",
      "h13": "26",
      "i6": "30000",
      "i7": "1500",
      "i8": "2.8",
      "i9": "4200",
      "i10": "5",
      "i11": "840",
      "i12": "18480",
      "i13": "22",
      "g20": "Jan",
      "g21": "Feb",
      "g22": "Mar",
      "g23": "Apr",
      "g24": "May",
      "g25": "Jun",
      "g26": "Jul",
      "g27": "Aug",
      "g28": "Sep",
      "g29": "Oct",
      "g30": "Nov",
      "g31": "Dec",
      "h20": "2227",
      "h21": "3",
      "h22": "33",
      "h23": "33",
      "h24": "3",
      "h25": "3",
      "h26": "33",
      "h27": "33",
      "h28": "33",
      "h29": "33",
      "h30": "33",
      "h31": "33",
      "i20": "2227",
      "i21": "3",
      "i22": "33",
      "i23": "33",
      "i24": "3",
      "i25": "3",
      "i26": "33",
      "i27": "33",
      "i28": "33",
      "i29": "33",
      "i30": "33",
      "i31": "33",
      "i16":"",
      "h17":"",
      "l5":"",
      "l6":"",
      "m5":"",
      "m6":"",
      "n5":"",
      "n6":"",
      "l9":"",
      "l10":"",
      "m9":"",
      "m10":"",
      "n9":"",
      "n10":"",
      "l13":"",
      "l14":"",
      "m13":"",
      "m14":"",
      "n13":"",
      "n14":"",
      "l17":"",
      "l18":"",
      "l19":"",
      "m17":"",
      "m18":"",
      "m19":"",
      "n17":"",
      "n18":"",
      "n19":"",
      "o17":"",
      "o18":"",
      "o19":"",
      "l22":"",
      "l23":"",
      "l24":"",
      "l25":"",
      "l26":"",
      "l27":"",
      "l28":"",
      "l29":"",
      "l30":"",
      "l32":"",
      "l33":"",
      "m23":"",
      "m24":"",
      "n23":"",
      "n24":"",
      "m26":"",
      "m27":"",
      "n26":"",
      "n27":"",
      "m29":"",
      "m30":"",
      "n29":"",
      "n30":"",
      "m33":"",
      "n33":"",
      "q6":"",
      "q7":"",
      "q8":"",
      "q9":"",
      "q10":"",
      "q11":"",
      "q12":"",
      "q13":"",
      "r6":"",
      "r7":"",
      "r8":"",
      "r9":"",
      "r10":"",
      "r11":"",
      "r12":"",
      "r13":"",
      "q17":"",
      "q18":"",
      "q19":"",
      "q20":"",
      "q21":"",
      "q22":"",
      "q23":"",
      "q24":"",
      "r17":"",
      "r18":"",
      "r19":"",
      "r20":"",
      "r21":"",
      "r22":"",
      "r23":"",
      "r24":"",
      "q27":"",
      "q28":"",
      "r27":"",
      "r28":"",
      "s27":"",
      "s28":"",
      "q31":"",
      "q32":"",
      "r31":"",
      "r32":"",
      "s31":"",
      "s32":"",
      "q35":"",
      "q36":"",
      "q37":"",
      "r35":"",
      "r36":"",
      "r37":"",
      "s35":"",
      "s36":"",
      "s37":"",
      "q40":"",
      "q41":"",
      "q42":"",
      "r40":"",
      "r41":"",
      "r42":"",
      "s40":"",
      "s41":"",
      "s42":"",
      "q45":"",
      "q46":"",
      "q47":"",
      "r45":"",
      "r46":"",
      "r47":"",
      "s45":"",
      "s46":"",
      "s47":"",
      "q50":"",
      "q51":"",
      "q52":"",
      "r50":"",
      "r51":"",
      "r52":"",
      "s50":"",
      "s51":"",
      "s52":"",
      "q55":"",
      "q56":"",
      "q57":"",
      "r55":"",
      "r56":"",
      "r57":"",
      "s55":"",
      "s56":"",
      "s57":"",
      "w5":"",
      "w6":"",
      "w7":"",
      "w9":"",
      "w10":"",
      "w11":"",
      "w13":"",
      "w14":"",
      "w16":"",
      "w17":"",
      "w18":"",
      "w20":"",
      "w21":"",
      "w22":"",
      "w24":"",
      "w25":"",
      "w27":"",
      "w28":"",
      "w29":"",
      "w31":"",
      "w32":"",
      "w33":"",
      "w35":"",
      "w36":"",
      "w38":"",
      "w39":"",
      "w40":"",
      "w42":"",
      "w43":"",
      "w44":"",
      "w46":"",
      "w47":"",
      

       "columnkey": "",
      "columnvalue": "",
      "columnvisiblestatus": "Yes",
      "staticfield": "Yes",
      "action": "save"
    }

    this._api.staticUpdateDataWrite("businessbasic", this.noofattempt,
      body, apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              this.fetchDefaultStaticData();
            } else {
              this.checkloading.set(false);
            }
          }, error: (error: any) => {
            this.checkloading.set(false);
            this.driveerrorLog(error, apiname);
          }
        })

  }

}
