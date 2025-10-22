import { Component, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-createprompt',
  templateUrl: './createprompt.component.html',
  styleUrls: ['./createprompt.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MarkdownModule
  ]
})
export class CreatepromptComponent implements OnInit {
  private readonly _api = inject(ApiService);
  private readonly _global = inject(GlobalService);
  private readonly _alert = inject(SnackbaralertService);
  private readonly dialog = inject(MatDialog);

  selectedgame: string = "";
  promptname: string = "";
  systempromptvalue: string = "";
  generatepromptvalue: string = "";
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  displayedColumns: string[] = ['simulation', 'promptName', 'systemPrompt', 'generatePrompt'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);

 
  ngOnInit(): void {
    this.fetchtabledata();
  }

  addPrompt(): void {
    if((this.selectedgame !== "") && (this.promptname !== "") && (this.systempromptvalue !== "") && (this.generatepromptvalue !== "")) {
      const apiname = '/prompt/cudaiprompt';
      console.log("selectedgame", this.selectedgame, "promptname", this.promptname, "systempromptvalue",
        this.systempromptvalue, "generatepromptvalue", this.generatepromptvalue);
  
      this._api.addPromptData(apiname, this.selectedgame, this.promptname, this.systempromptvalue,
        this.generatepromptvalue, 0, 'save').subscribe({
          next: (data: any) => {
            if (data.status === "Success") {
              this.selectedgame = "";
              this.promptname = "";
              this.systempromptvalue = "";
              this.generatepromptvalue = "";
              this.fetchtabledata();
            }
          },
          error: (error: any) => {
            this._alert.error("Failed to add prompt");
          }
        });
    } else {
      this._alert.error("Please fill all the fields");
    }
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

  fetchtabledata(): void {
    const apiname = '/prompt/fetchaiprompt';
    this._api.fetchpaiprompt(apiname).subscribe({
      next: (data: any) => {
        if (data.status === "Success") {
          this.ELEMENT_DATA = data.resultList;
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
          if (this.paginator) {
            this.dataSource.paginator = this.paginator;
          }
        } else {
          this.ELEMENT_DATA = [];
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
          this._alert.error(data.message);
        }
      },
      error: (error: any) => {
        this._alert.error("Failed to fetch prompts");
      }
    });
  }
}

@Component({
  selector: 'app-promptdialog',
  templateUrl: './promptdialog.html',
  styleUrls: ['./createprompt.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PromptdialogComponent implements OnInit {
  private readonly _api = inject(ApiService);
  private readonly dialogRef = inject(MatDialogRef<PromptdialogComponent>);
  private readonly data = inject(MAT_DIALOG_DATA);

  promptvalue: string = '';
  systempromptvalue: string = "";
  generalpromptvalue: string = "";

  ngOnInit(): void {
    if (this.data.prompttype === "systemPrompt") {
      this.promptvalue = this.data.value.systemprompt;
      this.systempromptvalue = this.promptvalue;
      this.generalpromptvalue = this.data.value.generalprompt;
    } else if (this.data.prompttype === "generatePrompt") {
      this.promptvalue = this.data.value.generalprompt;
      this.generalpromptvalue = this.promptvalue;
      this.systempromptvalue = this.data.value.systemprompt;
    }
  }

  updateprop(): void {
    const apiname = '/prompt/cudaiprompt';
    
    this._api.addPromptData(apiname, this.data.value.simulationname, this.data.value.promptname, 
      this.systempromptvalue, this.generalpromptvalue, this.data.value.aipromptid, 'update')
      .subscribe({
        next: (data: any) => {
          if (data.status === "Success") {
            this.dialogRef.close(this.data);
          }
        },
        error: (error: any) => {
          // Handle error
        }
      });
  }

  onTextareaInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    if (this.data.prompttype === "systemPrompt") {
      this.systempromptvalue = target.value;
    } else {
      this.generalpromptvalue = target.value;
    }
  }
}