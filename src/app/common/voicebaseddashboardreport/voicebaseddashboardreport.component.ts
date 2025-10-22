import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import pdfMake from 'pdfmake/build/pdfmake';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { TableUtil } from "./tableUtil";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-voicebaseddashboardreport',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, 
    MatPaginatorModule, MatTableModule,MatSelectModule, MatCardModule,MatRadioModule],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  templateUrl: './voicebaseddashboardreport.component.html',
  styleUrls: ['./voicebaseddashboardreport.component.scss']
})
export class VoicebaseddashboardreportComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['Name', 'email', 'KPI1', 'KPI2', 'KPI3', 'KPI4', 'KPI5', 'KPI6',
    'Transcript', 'Avrecord', 'Logs'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  Instructorcarddetailssub: Subscription;
  instructorcarddetails: any = [];
  selectedattemptValue: number = 1;
  dropdownvalue: any = [];
  Emailsub: Subscription;
  useremail: string = '';
  Coursecodesub: Subscription;
  coursecode: string = '';
  kpiname: any = [];
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
  constructor(
    private _api: ApiService,
    private _global: GlobalService,
    public _login: LoginService,
    private dialog: MatDialog

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
    if (this.instructorcarddetails.studentcourseattempts > 0) {
      for (let i = 1; i < this.instructorcarddetails.studentcourseattempts + 1; i++) {
        this.dropdownvalue[i - 1] = i
      }
    }
    this.search(1);

  }

  justificationpopup(element: any) {
    const dialogRef = this.dialog.open(JustificationpopupComponent, {
      panelClass: "achivemodal",
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
    })
  }

  search(element: any) {
    let apiname = ''
    if ((this.instructorcarddetails.courseDetails.simulation == 'Non-Ai') ||
      (this.instructorcarddetails.courseDetails.simulation == 'Non-AI-Coach') ||
      (this.instructorcarddetails.courseDetails.simulation == 'Language Lab') ||
      (this.instructorcarddetails.courseDetails.simulation == 'Others')) {
      apiname = '/nonaivoicereport/fetchvoicereport';
    } else {
      apiname = '/voicereport/fetchvoicereport';
    }

    // this._api.fetchvoicereportforall(apiname,'report',element,this.instructorcarddetails.coursecode,'0').subscribe((data: any) => {
    this._api.fetchvoicereportforall(apiname, 'report', element, this.instructorcarddetails.coursecode, '0', 'instructor', 'instructor', 0).subscribe((data: any) => {
      if (data.status == 'Success') {
        this.ELEMENT_DATA = data.resultList;
        this.dataSource = new MatTableDataSource<PeriodicElement>(
          this.ELEMENT_DATA
        );
        if (this.paginator) this.dataSource.paginator = this.paginator;
        for (let i = 0; i < 6; i++) {
          this.kpiname[i] = data.resultList[0]['kpi' + (i + 1)]
        }

      }
      else {
        this.dataSource = new MatTableDataSource<PeriodicElement>([]);
        if (this.paginator) this.dataSource.paginator = this.paginator;
      }


    })


  }



  transcriptdownload(attempt: string, coursedetailsid: string, coursename: string, coursecode: string, studentsectionid: string, studentname: string) {
    // let apiname = "/nonaivoiceinterview/downloadvoiceconversation"
    let apiname = ''
    if ((this.instructorcarddetails.courseDetails.simulation == 'Non-Ai') ||
      (this.instructorcarddetails.courseDetails.simulation == 'Non-AI-Coach') ||
      (this.instructorcarddetails.courseDetails.simulation == 'Language Lab') ||
      (this.instructorcarddetails.courseDetails.simulation == 'Others')) {
      apiname = '/nonaivoiceinterview/downloadvoiceconversation';
    } else {
      apiname = '/voiceconversation/downloadvoiceconversation';
    }
    this._api.fetchAivoiceconversationforinstructorReport(apiname, attempt, coursedetailsid, coursename, coursecode, studentsectionid).subscribe(
      (data: any) => {
        if (data.status == 'Success') {
          const openaiResponseString = data.openaiResponse;
          if (openaiResponseString) {
            const chatData = JSON.parse(openaiResponseString);
            // let username = localStorage.getItem("username");
            let username = studentname;
            if (username && username != '') {
              username = username.toUpperCase();
            } else {
              username = 'USER'
            }
            const headerText = 'Chat transcript between ' + username + ' and AI for round number ' + attempt + ' of course code ' + coursename + ' downloaded on ' + new Date().toLocaleString('en-GB');
            const filename = headerText + '.pdf';
            const docDefinition = {
              content: [
                { text: headerText, style: 'header' },
                ...chatData.map((msg: any) => {
                  return {
                    text: `${msg.role === 'user' ? username : 'ASSISTANT'} : ${msg.content}`,
                    style: msg.role === 'user' ? 'userMessage' : 'assistantMessage',
                  };
                }),
              ],
              styles: {
                header: {
                  fontSize: 14,
                  bold: true,
                  marginBottom: 15,
                },
                userMessage: {
                  bold: true,
                  color: 'black',
                  margin: 5,
                },
                assistantMessage: {
                  bold: true,
                  color: 'darkblue',
                  margin: 5,
                },
              },
            };

            pdfMake.createPdf(docDefinition).download(filename);
          }
        } else {

        }
      }
    )

  }

  private download(url: string): void {
    const a = document.createElement('a');
    a.href = url;
    a.download = ''; // If you want to use the default file name from the server, leave it empty
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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

@Component({
  selector: 'app-justificationpopup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, 
    MatPaginatorModule, MatTableModule,MatSelectModule, MatCardModule,MatRadioModule],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  templateUrl: './justificationpopup.html',
  styleUrls: ['./voicebaseddashboardreport.component.scss']
})
export class JustificationpopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,) {

  }


  ngOnInit(): void {

  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}