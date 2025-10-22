import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MarkdownModule } from 'ngx-markdown';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { PeriodicElement, PromptdialogComponent } from '../createprompt/createprompt.component';

interface PromptData {
  promptType: string;
  promptName: string;
  systemPrompt: string;
  generalPrompt: string;
  questionPrompt: string;
  questionSystemPrompt: string;
  questionGeneralPrompt: string;
}

@Component({
  selector: 'app-promptcreate',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MarkdownModule
  ],
  templateUrl: './promptcreate.component.html',
  styleUrls: ['./promptcreate.component.scss']
})
export class PromptcreateComponent implements OnInit {
  private api = inject(ApiService);
  private global = inject(GlobalService);
  private dialog = inject(MatDialog);
  private alert = inject(SnackbaralertService);

  selectedgame: string = '';
  promptname: string = '';
  systempromptvalue: string = '';
  generatepromptvalue: string = '';
  questionprompt: string = '';
  questionSystemPrompt: string = '';
  questionGeneralPrompt: string = '';

  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['simulation', 'promptName', 'systemPrompt', 'generatePrompt'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.fetchtabledata();
  }

  addcreatePrompt(): void {
    const promptData: PromptData = {
      promptType: this.selectedgame,
      promptName: this.promptname,
      systemPrompt: this.systempromptvalue,
      generalPrompt: this.generatepromptvalue,
      questionPrompt: this.questionprompt,
      questionSystemPrompt: this.questionSystemPrompt,
      questionGeneralPrompt: this.questionGeneralPrompt
    };
    console.log('Prompt Added:', promptData);
  }

  addPrompt(): void {
    if (this.selectedgame && this.promptname && this.systempromptvalue && this.generatepromptvalue) {
      const apiname = '/prompt/cudaiprompt';
      this.api.addPromptData(
        apiname,
        this.selectedgame,
        this.promptname,
        this.systempromptvalue,
        this.generatepromptvalue,
        0,
        'save'
      ).subscribe({
        next: (data: any) => {
          if (data.status === 'Success') {
            this.resetForm();
            this.fetchtabledata();
          }
        },
        error: (error: any) => {
          this.alert.error('Failed to add prompt');
        }
      });
    } else {
      this.alert.error('Please fill all the fields');
    }
  }

  private resetForm(): void {
    this.selectedgame = '';
    this.promptname = '';
    this.systempromptvalue = '';
    this.generatepromptvalue = '';
  }

  fetchtabledata(): void {
    const apiname = '/prompt/fetchaiprompt';
    this.api.fetchpaiprompt(apiname).subscribe({
      next: (data: any) => {
        if (data.status === 'Success') {
          this.ELEMENT_DATA = data.resultList;
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
          }
        } else {
          this.ELEMENT_DATA = [];
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
          this.alert.error(data.message);
        }
      },
      error: (error: any) => {
        this.alert.error('Failed to fetch prompt data');
      }
    });
  }

  openPromptDialog(element: any, prompttype: string): void {
    const dialogRef = this.dialog.open(PromptdialogComponent, {
      width: '50%',
      data: {
        value: element,
        prompttype: prompttype,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.fetchtabledata();
    });
  }
}
