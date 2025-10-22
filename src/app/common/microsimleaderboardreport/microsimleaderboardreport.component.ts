import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { TableUtil } from "./tableUtil";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-microsimleaderboardreport',
  standalone: true,
  templateUrl: './microsimleaderboardreport.component.html',
  styleUrls: ['./microsimleaderboardreport.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ]
})
export class MicrosimleaderboardreportComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  checkloading: boolean = false;
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['Name', 'email', 'ranks', 'kpi1', 'kpi2', 'kpi3', 'quizmarks', 'Logs'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  Instructorcarddetailssub: Subscription;
  instructorcarddetails: any = [];
  selectedattemptValue: number = 1;
  dropdownvalue: any = [];
  Emailsub: Subscription;
  useremail: string = '';
  Coursecodesub: Subscription;
  coursecode: string = '';
  kpi1: string = "";
  kpi2: string = "";
  kpi3: string = "";
  searchString: RegExp = /[%INRmn]/g;
  replaceString: string = '';
  leaderboardvalue: any;
  pageSize = 10;
  currentPage = 0;

  ngAfterViewInit() {

  }
  constructor(
    private _api: ApiService,
    private _global: GlobalService,
    public _login: LoginService,

  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {

      this.useremail = data;
    });
    this.Coursecodesub = this._global.coursecode.subscribe((data) => {

      this.coursecode = data;
    });
    this.Instructorcarddetailssub = this._global.instructorcarddetails.subscribe((data) => {
      this.instructorcarddetails = data;
    });
  }


  ngOnInit(): void {
    this.kpinameUpdateasPerGame();
    if (this.instructorcarddetails.studentcourseattempts > 0) {
      for (let i = 1; i < this.instructorcarddetails.studentcourseattempts + 1; i++) {
        this.dropdownvalue[i - 1] = i
      }
    }
    this.search(1);

  }

  calculateRank(index: number): number {
    return this.currentPage * this.pageSize + index + 1;
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  kpinameUpdateasPerGame() {
    if (this.instructorcarddetails.courseDetails.simulation == 'Business Basics') {
      this.kpi1 = 'Margin %';
      this.kpi2 = 'Sales Forecasting Error %';
      this.kpi3 = 'Operating Profit, INR'
    } else if ((this.instructorcarddetails.courseDetails.simulation == 'Product & Consumer') || (this.instructorcarddetails.courseDetails.simulation == 'Product & Consumer New')) {
      this.kpi1 = 'Market Share %';
      this.kpi2 = 'Paying Customers %';
      this.kpi3 = 'Number of Users, mn'
    } else if (this.instructorcarddetails.courseDetails.simulation == 'Logistics') {
      this.kpi1 = 'Effectiveness %';
      this.kpi2 = 'Inbound Logistics Cost, INR';
      this.kpi3 = 'Outbound Logistics Cost, INR'
    } else if ((this.instructorcarddetails.courseDetails.simulation == 'Change Management') || (this.instructorcarddetails.courseDetails.simulation == 'Change Management Module')) {
      this.kpi1 = 'Performance Level %';
      this.kpi2 = 'Commitment Level %';
      this.kpi3 = 'Unutilized Budget, INR'
    }
    else if ((this.instructorcarddetails.courseDetails.simulation == 'Change Management New') || (this.instructorcarddetails.courseDetails.simulation == 'Change Management Module New')) {
      this.kpi1 = 'Performance Level %';
      this.kpi2 = 'Commitment Level %';
      this.kpi3 = 'Unutilized Budget, INR'
    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Financial Analysis') {
      this.kpi1 = 'Ratio Analysis Score %';
      this.kpi2 = 'Portfolio Name';
      this.kpi3 = '-';
    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Promotions & Segments') {
      this.kpi1 = 'ROAS %';
      this.kpi2 = 'Operating Margin %';
      this.kpi3 = 'Operating Profit/Loss, INR';
    } else if (this.instructorcarddetails.courseDetails.simulation == 'Promotions & Segments New') {
      this.kpi1 = 'ROAS %';
      this.kpi2 = 'Operating Margin %';
      this.kpi3 = 'Operating Profit/Loss, INR';
    } else if (this.instructorcarddetails.courseDetails.simulation == 'Sales & Target') {
      this.kpi1 = 'Operating Profit/Loss, k INR';
      this.kpi2 = 'Sales Cost, k INR';
      this.kpi3 = 'Revenue, k INR';
    } else if (this.instructorcarddetails.courseDetails.simulation == 'Portfolio Management') {
      this.kpi1 = 'Return over market';
      this.kpi2 = 'Risk over market';
      this.kpi3 = 'Capital at end of phase 3, k INR';
    } else if (this.instructorcarddetails.courseDetails.simulation == 'Value Chain') {
      this.kpi1 = 'Market Share %';
      this.kpi2 = 'Margin %';
      this.kpi3 = 'Emergency Loan, mn INR';
    } else if (this.instructorcarddetails.courseDetails.simulation == 'Value Chain New') {
      this.kpi1 = 'Market Share %';
      this.kpi2 = 'Margin %';
      this.kpi3 = 'Emergency Loan, mn INR';
    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Accounting') {
      this.kpi1 = 'Total Score, %';
      this.kpi2 = '1-Year Value Creation';
      this.kpi3 = '3-Year Value Creation';
    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Accounting Arabic') {
      this.kpi1 = 'المجموع الكلي للنقاط';
      this.kpi2 = 'إنشاء القيمة لمدة عام';
      this.kpi3 = 'إنشاء القيمة لمدة 3 أعوام';
    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'CVP Analysis') {
      this.kpi1 = 'Operating Margin, %';
      this.kpi2 = 'Market Share, %';
      this.kpi3 = 'Operating Profit/Loss, mn INR';

    }

    else if (this.instructorcarddetails.courseDetails.simulation == 'Pricing') {
      this.kpi1 = 'Operating Margin %';
      this.kpi2 = 'Unutilized capacity';
      this.kpi3 = 'Operating Profit, k INR';

    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Mergers & Acquisition') {
      this.displayedColumns = this.displayedColumns.filter(column => column !== 'ranks');
      this.kpi1 = 'Likelihood of Board Approval, Max 5';
      this.kpi2 = 'Offer Status';
      this.kpi3 = 'ASK - BID spread, INR million';

    }

    else if (this.instructorcarddetails.courseDetails.simulation == 'HRP') {
      this.kpi1 = 'Employee Satisfaction Score';
      this.kpi2 = 'Cost per employee, k INR';
      this.kpi3 = 'Average efficiency across organization, %';

    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'HRP New') {
      this.kpi1 = 'Employee Satisfaction Score';
      this.kpi2 = 'Cost per employee, k INR';
      this.kpi3 = 'Average efficiency across organization, %';

    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Design Thinking') {
      this.kpi1 = 'Operating Margin, %';
      this.kpi2 = 'Market Share, %';
      this.kpi3 = 'Attractiveness Score';

    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'CRM') {
      this.kpi1 = 'Value Creation, INR';
      this.kpi2 = 'Total Cost, INR';
      this.kpi3 = 'Expected New Value, INR';

    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Innovation') {
      this.kpi1 = 'Profit/Loss Year 3, k INR';
      this.kpi2 = 'Profit/Loss Year 1, k INR';
      this.kpi3 = 'Runaway, months';

    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Ordering Basics') {
      this.kpi1 = 'Service Level P2';
      this.kpi2 = 'Service Level P1';
      this.kpi3 = 'Cost, INR';

    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'STP') {
      this.kpi1 = 'Market Share, %';
      this.kpi2 = 'Operating Margin, %';
      this.kpi3 = 'Revenue, Mn INR';

    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'IT Management') {
      this.kpi1 = 'Performance';
      this.kpi2 = 'Security';
      this.kpi3 = 'Value Y3, INR';
    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'HRM_Fintech') {
      this.kpi1 = 'Stakeholder Satisfaction Score, Max 5';
      this.kpi2 = 'Employee Engagment Score, Max 5';
      this.kpi3 = 'Budget Overrun, k INR';
    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Ecommerce') {
      this.kpi1 = 'Operating Margin %';
      this.kpi2 = 'Average Order Value, INR';
      this.kpi3 = 'ROAS';
    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Capital Budgeting') {
      this.kpi1 = 'Net present value of cash stream, INR million';
      this.kpi2 = 'Present value of cash Stream, INR million';
      this.kpi3 = 'Average discount rate across projects, %';
    }
    else if (this.instructorcarddetails.courseDetails.simulation == 'Project Management') {
      this.kpi1 = 'Value Created, INR';
      this.kpi2 = 'Completion level';
      this.kpi3 = 'Optimization level';
    }

  }

  replacecharacter(value: string) {
    this.leaderboardvalue = Number(value.replace(this.searchString, this.replaceString));
    if (Number.isNaN(this.leaderboardvalue)) {
      this.leaderboardvalue = value;
    }
    return this.leaderboardvalue;
  }

  search(element: any) {
    // this.checkloading = true;
    // let searchtype = "attemptscount"

    // let body = {
    //   email: this.useremail,
    //   usermode: "instructor",
    //   caller: "webinstructor",
    //   searchtype: searchtype,
    //   searchcontent: element,
    //   coursecode: this.instructorcarddetails.coursecode
    // }


    // this._login.fetchkpiattempt(body).subscribe((data: any) => {
    //   if (data.status == 'Success') {
    //     if (data.resultList != null) {
    //       this.ELEMENT_DATA = data.resultList;
    //       this.dataSource = new MatTableDataSource<PeriodicElement>(
    //         this.ELEMENT_DATA
    //       );
    //       if (this.paginator) this.dataSource.paginator = this.paginator;
    //       this.checkloading = false;
    //     } else {
    //       this.dataSource = new MatTableDataSource<PeriodicElement>([]);
    //       if (this.paginator) this.dataSource.paginator = this.paginator;
    //       this.checkloading = false;
    //     }

    //   }
    //   else {
    //     this.dataSource = new MatTableDataSource<PeriodicElement>([]);
    //     if (this.paginator) this.dataSource.paginator = this.paginator;
    //     this.checkloading = false;
    //   }


    // }, (error: any) => {
    //   this.checkloading = false;
    // })

    this.checkloading = true;
    const body = {
      email: this.useremail,
      usermode: "instructor",
      caller: "webinstructor",
      searchtype: "attemptscount",
      searchcontent: element,
      coursecode: this.instructorcarddetails.coursecode,
      simulationname: this.instructorcarddetails.courseDetails.simulation

    };

    this._login.fetchkpiattempt(body).subscribe((data: any) => {
      this.ELEMENT_DATA = data.status == 'Success' && data.resultList ? data.resultList : [];
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      if (this.paginator) this.dataSource.paginator = this.paginator;
      this.checkloading = false;
    }, () => {
      this.checkloading = false;
    });

  }

  exportTable() {
    TableUtil.exportTableToExcel("exportTable");
  }

  ngOnDestroy() {
    this.Instructorcarddetailssub.unsubscribe();
    this.Emailsub.unsubscribe();
    this.Coursecodesub.unsubscribe();
  }


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
