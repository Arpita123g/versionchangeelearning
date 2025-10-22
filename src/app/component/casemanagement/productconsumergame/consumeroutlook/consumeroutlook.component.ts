import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditorConfig, NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';


@Component({
  selector: 'app-consumeroutlook',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, NgxSimpleTextEditorModule],
  templateUrl: './consumeroutlook.component.html',
  styleUrls: ['./consumeroutlook.component.scss']
})
export class ConsumeroutlookComponent extends AbstractComponent {
  defaultcase: string = "";
  outlooktextheading: any = []
  outlooktextcontent: any = []
  selectedround:number = 1;
  checked:boolean=false;
  headingvalue: string = '';
  contentvalue: string = '';
  selectedButton: string | null = 'Round 1';
  config: EditorConfig = {
    buttons: [],

  };

 
  constructor(_router: Router, _login: LoginService,
    _global: GlobalService, _alert: SnackbaralertService, _api: ApiService,
    _restapiservice: RestapiService, public dialog: MatDialog) { 
      super(_login, _api, _alert, _global, _router, _restapiservice);
    }

    override ngOnInit(): void {
      // this.defaultcase = this.casemanagementcoursedata.defaultcase;
      this.getOutlookData();
       let caseType = localStorage.getItem('selectedTab')
    if ((caseType == 'cesimcase') || (caseType == 'sharedcase')) {
      this.defaultcase = 'yes'
    } else {
      this.defaultcase = 'no'

    }
       }

    getOutlookData() {
      let apiname = "/consumerbehaviourcm/fetchconsumerbehaviourcm"
      this._api.fetchCaseManagementData(apiname).subscribe(
        {
          next: (data: any) => {
            if (data.status == "Success") {
              if (data.resultList != null) {
                for (let i = 0; i < data.resultList.length; i++) {
                  let outlookdata = data.resultList[i].b93;
                  //const sentences = outlookdata.split('.');
  
                  // if (sentences.length > 0) {
                  //   this.outlooktextheading[i] = sentences[0];
                  //   this.outlooktextcontent[i] = sentences.slice(1).join('.');
                  // } else {
                  //   this.outlooktextheading[i] = '';
                    this.outlooktextcontent[i] = outlookdata;
                  // }
                }
                // this.headingvalue = this.outlooktextheading[0];
                this.contentvalue = this.outlooktextcontent[0];
                }
  
            }
          }, error: (error: any) => {
            this.checkloading = false;
            this.driveerrorLog(error, apiname);
          }
        })
    }
  contentvaluechange() {
    let round = this.selectedround;
    let content = this.contentvalue
    this.outlooktextheading[round - 1] = this.headingvalue;
    this.outlooktextcontent[round - 1] = this.contentvalue;

    let apiname = '/consumerbehaviourcm/updateconsumerbehaviourcm'

    let body = {
      'b93': content,
    }
    this._api.updatecasemanagementdata(String(round), "normal", "no",'consumerbehaviourcm', body, {},apiname,'consumerbehaviourcmactivestatus').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            if (data.resultList != null) {

            }
          }
        }, error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        }
      })

  }
  roundclick(index: number,round:string) {
    this.selectedButton = round;
    this.checked = !this.checked;
    this.selectedround = index+1;
    // this.headingvalue = this.outlooktextheading[index];
    this.contentvalue = this.outlooktextcontent[index];

  }

  
}
