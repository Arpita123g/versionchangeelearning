import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { DeleteComponent } from '../delete/delete/delete.component';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-materialview',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule ,FormsModule ,
    ReactiveFormsModule, MatButtonModule,
  ],
  templateUrl: './materialview.component.html',
  styleUrls: ['./materialview.component.scss']
})
export class MaterialviewComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  checkloading = true;
  instructoruploaddata: any[] = [];
  instructorcarddetails: any = [];
  instructormaterialList: any[] = [
    {
      headingname: 'Decision-making instruction',
      description: 'The decision-making process is introduced in this document step-by-step',
      fileurl: ''
    },
    {
      headingname: 'Walkthrough video',
      description: 'A tutorial on making step-by-step decisions',
      fileurl: ''
    }
  ];
  instructormaterialList1: any[] = [];
  adminmaterialList: any[] = [
    {
      headingname: 'Instructor platform',
      description: 'A tutorial on using the platform for managing the entire course.',
      fileurl: ''
    },
    {
      headingname: 'Instructor guide',
      description: 'Guidebook for the specific microsimulation.',
      fileurl: ''
    },
    {
      headingname: 'Case customization guide',
      description: 'This document explains what custom cases are and how to create and use them.',
      fileurl: ''
    },
    {
      headingname: 'Teaching notes',
      description: 'The notes specific to the microsimulation for debriefing.',
      fileurl: ''
    },
  ];
  doublecall = false;
  gamename = "";

  private dialog = inject(MatDialog);
  private _api = inject(ApiService);
  private _global = inject(GlobalService);

  constructor() {
    this._global.instructorcarddetails
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.instructorcarddetails = data;
      });
  }

  ngOnInit(): void {
    this.gamename = this.instructorcarddetails.courseDetails?.simulation ?? '';
    this.assignMaterialUrls(this.gamename);
    this.getTableData('webinstructor', 'instructor');
  }

  private assignMaterialUrls(game: string) {
    if (game === 'Business Basics') {
      this.instructormaterialList[0].fileurl = '../../../assets/images/Decision-making guide_Business Basics.pdf';
      this.instructormaterialList[1].fileurl = 'https://youtu.be/3XpL3LX-Gnk';
      this.adminmaterialList[2].fileurl = '../../../assets/images/Case Customization Guide - Business Basics.pdf';
      this.adminmaterialList[3].fileurl = '../../../assets/images/Teaching Note_Business Basics.pdf';
    }
  }

  fileupload() {
    const dialogRef = this.dialog.open(MaterialUploadComponent, {
      width: '40%',
      // autoFocus: true,
      // restoreFocus: false
      // panelClass: 'material_popup',
      // panelClass: 'material-upload-dialog-panel'
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getTableData('webinstructor', 'instructor');
    });
  }

  fileviewstatic(url: string) {
    if (url) window.open(url, '_blank');
  }

  getTableData(caller: string, usermode: string) {
    const apiname = '/material/fetchmaterial';
    this._api.fetchMaterialData(
      caller,
      usermode,
      'instructor',
      this.instructorcarddetails.courseDetails.simulation,
      usermode,
      apiname,
      "0"
    ).subscribe({
      next: (data: any) => {
        if (data.status === "Success" && data.resultList) {
          if (usermode === 'instructor') {
            this.instructormaterialList1 = data.resultList;
          } else {
            this.adminmaterialList.push(...data.resultList);
          }
        }
        if (!this.doublecall) {
          this.getTableData('webadmin', 'admin');
          this.doublecall = true;
        }
      }
    });
  }

  deleteFile(caller: string, usermode: string, materialid: string) {
    const apiname = "/material/deletematerial";
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {
        apiname,
        body: "Are you sure you want to delete the material? It can’t be recovered from system",
        heading: "Delete material",
      },
      panelClass: 'centertop-dialog',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this._api.deleteMaterialData(caller, usermode, apiname, materialid)
          .subscribe((data: any) => {
            if (data.status === 'Success') {
              this.checkloading = false;
              this.getTableData('webinstructor', 'instructor');
            }
          });
      }
    });
  }

  fileview(url: string) {
    if (url) {
      if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
      window.open(url, '_blank');
    }
  }
}



@Component({
  selector: 'materialupload',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: 'materialupload.component.html',
  styleUrls: ['./materialview.component.scss'],
})
export class MaterialUploadComponent implements OnInit {
  file: File | undefined;
  contentType = '';
  materialTitle = '';
  description = '';
  selectedFile: File | null = null;
  link = '';
  round = 'all';
  createcoursegroup!: FormGroup;

  private form = inject(FormBuilder);
  private _global = inject(GlobalService);
  private _restapiservice = inject(RestapiService);
  private _alert = inject(SnackbaralertService);
  private dialog = inject(MatDialog);
  private dialogRef = inject(MatDialogRef<MaterialUploadComponent>);
  private _api = inject(ApiService);

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.createcoursegroup = this.form.group({
      materialtitle: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onChange(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        this._alert.error("File size exceeds 5 MB. Please choose a smaller file.");
        event.target.value = null;
        return;
      }
      if (!this.isPDF(selectedFile.type)) {
        this._alert.error("Please choose a PDF file.");
        event.target.value = null;
        return;
      }
      this.file = selectedFile;
    }
  }

  private isPDF(fileType: string): boolean {
    return fileType === 'application/pdf';
  }

  private createDummyPDF(): File {
    const pdfContent = new Uint8Array([0x25, 0x50, 0x44, 0x46]);
    return new File([pdfContent], "default.pdf", { type: "application/pdf" });
  }

  uploadFile() {
    if (!this.materialTitle || !this.description || !this.contentType || (this.contentType === 'link' && !this.link)) {
      this._alert.error("Please fill all the fields");
      return;
    }
    if (this.contentType === 'file' && !this.file) {
      this._alert.error("Please select a file.");
      return;
    }

    let fileToSend = this.file;
    if (this.contentType === 'link' && !this.file) {
      fileToSend = this.createDummyPDF();
    }

    const apiname = "/material/savematerial";
    this._api.upload(
      fileToSend,
      apiname,
      this.materialTitle,
      this.description,
      this.contentType,
      this.round,
      this.link,
      'instructor',
      'webinstructor'
    ).subscribe((data: any) => {
      if (data.status === 'Success') {
        this._alert.success(data.message);
        this.dialogRef.close();
      } else {
        this._alert.error(data.message);
      }
    });
  }
}
