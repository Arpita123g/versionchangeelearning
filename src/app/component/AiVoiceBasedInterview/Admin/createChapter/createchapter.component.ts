import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { Subscription } from 'rxjs';
import { RestapiService } from 'src/app/service/restapi.service';
import { DeleteComponent } from 'src/app/common/delete/delete/delete.component';
import { AnyAaaaRecord } from 'dns';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

interface Product {
  name: string;
  questions: string[];
}

interface Chapter {
  chaptername: string;
  products: Product[];
}

@Component({
  selector: 'app-createchapter',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule,
     MatPaginatorModule, MatTableModule,MatSelectModule, MatCardModule,
     MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,  
    MatTableModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,],
  templateUrl: './createchapter.component.html',
  styleUrls: ['./createchapter.component.scss']
})
export class CreateChapterComponent implements OnInit {
  Emailsub: Subscription;
  useremail: string | null | undefined;
  promptlist: any = [];
  cardsList: any[] = [];
  StatusClass = 'questionlist';
  chapters: any[] = [];
  promptlistindex: any
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen' },
  ];
  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['simulation', 'chapterName', 'chapterAttempts', 'promptName', 'update', 'delete'];
  displayedColumns1: string[] = ['game', 'chapter', 'product', 'list', 'questionlist'];
  gamename: string = "";
  gameListArray: any = [
  ]
  selectedGame: string = "";
  QustionListArray: any = []
  displayedColumnsexpand: string[] = ['questionlist'];
  public previouselement: any;
  public currentelement: any;
  public expandelement: any;
  isadd = false;
  selectedGameNameForTable: string = '';
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  createchaptergroup: FormGroup | undefined;
  questions: { id: number, text: string }[] = [];
  selectedProductType: string = '';
  dataSourceelement = new MatTableDataSource<PeriodicElement>();
  creategamegroup!: FormGroup;
  constructor(
    public form: FormBuilder,
    private _api: ApiService,
    public dialog: MatDialog,
    private _global: GlobalService,
    private _alert: SnackbaralertService,) {
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });
  }


  ngOnInit(): void {
    this.buildform();
    this.getGameList();
  }

  getGameList() {
    let apiname = '/aigame/fetchaigame';
    this._api.getAiGamelistData(apiname, 'Language Lab').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.gameListArray = data.resultList;
            this.getChapterList();
          }
        }, error: (error: any) => {

        }
      })
  }

  getChapterList() {
    let apiname = '/chapter/fetchaichapter';
    this._api.fetchpaichapter(apiname, 'all', '', 'webadmin', 'admin').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success" && data.resultList) {
            this.dataSource = new MatTableDataSource(data.resultList);
            this.dataSource.paginator = this.paginator;
          } else {
            this.dataSource = new MatTableDataSource(data.resultList);
            this.dataSource.paginator = this.paginator;
          }
        }, error: (error: any) => {

        }
      })
  }

  getAssesmentChapterList() {
    let apiname = '/chapter/fetchaichapter';
    this._api.fetchpaichapter(apiname, 'aigameid', this.selectedGameNameForTable, 'webadmin', 'admin').subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success" && data.resultList) {
            this.dataSource = new MatTableDataSource(data.resultList);
            this.dataSource.paginator = this.paginator;
          } else {
            this.dataSource = new MatTableDataSource(data.resultList);
            this.dataSource.paginator = this.paginator;
          }
        }, error: (error: any) => {

        }
      })

  }

  toggleadd() {
    this.isadd = !this.isadd;
  }

  searchFlag = "instructor"

  search() {

  }



  gameCreate() {
    let apiname = '/aigame/cudaigame';
    if (this.creategamegroup.valid) {
      let body = {
        email: this.useremail,
        usermode: 'admin',
        caller: 'webadmin',
        action: 'save',
        aigame: {
          aigamename: this.creategamegroup.value.gamename,
          producttype: this.creategamegroup.value.selectProductType,
          action: 'save',
        }
      };
      this._api.addAiGame(body, apiname).subscribe((data: any) => {
        if (data.status == 'Success') {
          this._alert.success(data.message);
          this.creategamegroup.reset();
          this.isadd = false; // ✅ THIS LINE CLOSES THE FORM
          this.getGameList();
        } else {
          this._alert.error(data.message)
        }
      });
    } else {
      this._alert.error("All field must be required")
    }

  }

  //get questionsetlist per game name wise
  getQuestionList(event: any) {
    const selectedProducttype = ((event.target as HTMLSelectElement).value);
    let apiname = '/aiquestion/fetchaiquestionset';
    this._api.getAiQuestionsetlistData(apiname, 'producttype', selectedProducttype).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.QustionListArray = data.resultList;
          }
        }, error: (error: any) => {

        }
      })

  }

  questionlist(e: any) {
    if (this.previouselement === e) {
      e.isExpanded = !e.isExpanded;

      // If collapsed, reset the previous element
      if (!e.isExpanded) {
        this.previouselement = null;
      }
    } else {
      // Collapse the previously opened row
      if (this.previouselement) {
        this.previouselement.isExpanded = false;
      }

      // Expand the new row
      e.isExpanded = true;
      this.previouselement = e;
    }
  }


  addCard() {
    this.cardsList.push({ productType: '', questionSet: '' });
  }


  selectedQuestionSet: any = null;

  get questionsArray(): FormArray {
    return this.createChapterGroup.get('questions') as FormArray;
  }

  onQuestionSetChange(event: Event) {
    const index = ((event.target as HTMLSelectElement).value);
    if (index !== '') {
      const selectedIndex = parseInt(index, 10);
      this.selectedQuestionSet = this.QustionListArray[selectedIndex];


      this.createChapterGroup.patchValue({
        evsystemprompt: this.selectedQuestionSet.aievsystemprompt,
        evgeneralprompt: this.selectedQuestionSet.aievgeneralprompt,
        fbsystemprompt: this.selectedQuestionSet.aifbsystemprompt,
        fbgeneralprompt: this.selectedQuestionSet.aifbgeneralprompt,
        systemprompt: this.selectedQuestionSet.aisystemprompt,
        generalprompt: this.selectedQuestionSet.aigeneralprompt,


      });
      this.questions = this.selectedQuestionSet.questions; // Assuming `questions` field exists

      // Populate FormArray
      this.questionsArray.clear();
      this.questions.forEach((q: any) => {
        this.questionsArray.push(
          new FormControl({ value: q.aiquestion, disabled: true }) // only aiquestion text is shown
        );
      });
    } else {
      this.selectedQuestionSet = null;
    }
  }


  createChapterGroup = new FormGroup({
    gameId: new FormControl('', Validators.required),
    chapterName: new FormControl('', Validators.required),
    chapterAttempts: new FormControl('', Validators.required),
    productType: new FormControl('', Validators.required),
    questionSet: new FormControl('', Validators.required),
    systemprompt: new FormControl(''),
    generalprompt: new FormControl(''),
    evsystemprompt: new FormControl(''),
    evgeneralprompt: new FormControl(''),
    fbsystemprompt: new FormControl(''),
    fbgeneralprompt: new FormControl(''),
    questions: this.form.array([]),
  });


  addChapter() {
    if (this.createChapterGroup.invalid) {
      this.createChapterGroup.markAllAsTouched();
      this._alert.error("Please fill all the field");
      return;
    }


    const aichapter = {
      aigameid: this.createChapterGroup.value.gameId,
      chaptername: this.createChapterGroup.value.chapterName,
      producttype: this.createChapterGroup.value.productType,
      chapterattempts: this.createChapterGroup.value.chapterAttempts,
      previousassignedattempts: this.createChapterGroup.value.chapterAttempts,
      aiquestionsetid: this.QustionListArray && this.createChapterGroup.value.questionSet != null && this.QustionListArray[this.createChapterGroup.value.questionSet]
        ? this.QustionListArray[this.createChapterGroup.value.questionSet].aiquestionsetid
        : null,
      action: 'save'
    };

    let apiname = '/chapter/cudaichapter';
    let body = {
      email: this.useremail,
      usermode: 'admin',
      caller: 'webadmin',
      action: 'save',
      aichapter: aichapter
    }


    this._api.addAiChapterset(body, apiname).subscribe((data: any) => {
      if (data.status === 'Success') {
        this._alert.success('Chapter saved successfully');
        this.createChapterGroup.reset();
        this.selectedProductType = '';
        this.fetchtabledata(); // 🔁 Refresh the table if needed
      } else {
        this._alert.error(data.message || 'Failed to save chapter');
      }
    }, (err: any) => {
      this._alert.error('Something went wrong!');
      console.error(err);
    });
  }


  public buildform() {
    this.creategamegroup = this.form.group({
      selectProductType: ['', [Validators.required]],
      gamename: ['', [Validators.required]],
    });


    this.createchaptergroup = this.form.group({
      simulation: ['', [Validators.required]],
      prompt: ['', [Validators.required]],
      chaptername: ['', [Validators.required]],

    });
  }

  questionSetList: any[] = [];

  fetchQuestionSetData() {
    const apiname = '/question-set/list';
    this._api.fetchQuestionSetList(apiname).subscribe((data: any) => {
      if (data.status === 'Success') {
        this.questionSetList = data.questionSets;
      } else {
        this._alert.error(data.message || 'Failed to fetch question sets');
        this.questionSetList = [];
      }
    }, (error) => {
      this._alert.error('Server error while fetching question sets');
      console.error('API Error:', error);
      this.questionSetList = [];
    });
  }


  //fetch chapter data
  fetchtabledata() {
    let apiname = '/chapter/fetchaichapter';
    this._api.fetchpaichapter(apiname, 'all', '', 'webadmin', 'admin').subscribe((data: any) => {
      if (data.status == "Success") {
        this.ELEMENT_DATA = data.resultList;

        this.dataSource = new MatTableDataSource<PeriodicElement>(
          this.ELEMENT_DATA
        );

        if (this.paginator) this.dataSource.paginator = this.paginator
        // this.dataSource.paginator = this.paginator;
      } else {
        this.ELEMENT_DATA = [];
        this.dataSource = new MatTableDataSource<PeriodicElement>(
          this.ELEMENT_DATA
        );
        this._alert.error(data.message);
      }
    })
  }

  //get prompt list depends on simulation name
  getPromptList(event: any) {
    let apiname = '/prompt/fetchaiprompt';
    this._api.getPromptlistData(apiname, event.target.value).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.promptlist = data.resultList;

          }
        }, error: (error: any) => {

        }
      })
  }

  getpromptvalue(event: any) {
    this.promptlistindex = event.target.value;
  }

  updatechapter(element: any) {
    const dialogRef = this.dialog.open(UpdateChapterComponent, {
      width: '50%',
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchtabledata();
    });
  }

  deletechapter(element: any) {
    let apiname = '/chapter/cudaichapter';
    const dialogRef = this.dialog.open(DeleteComponent, {
      width: '50%',
      data: element,
    });

    dialogRef.afterClosed().subscribe((result) => {

      if (result == true) {
        let body = {
          email: this.useremail,
          usermode: 'admin',
          caller: 'webadmin',
          aichapter: {
            aichapterid: element.aichapterid,
            simulationname: element.simulationname,
            aipromptid: element.aipromptid,
            chaptername: element.chaptername,
            action: 'delete'
          }
        };

        this._api.addChapter(body, apiname).subscribe((data: any) => {
          if (data.status == 'Success') {
            this.fetchtabledata();
            // this.dialogRef.close(this.data);
          } else {
            this._alert.error(data.message)
          }
        });
      }

    });
  }
}

@Component({
  selector: 'updatechapter',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule],
  templateUrl: 'updatechapter.component.html',
  styleUrls: ['./createchapter.component.scss'],
})

export class UpdateChapterComponent implements OnInit {

  Emailsub: Subscription;
  Rolesub: Subscription;
  useremail: string = '';
  userrole: string = '';
  promptlist: any = [];
  promptindex: any;
  changepromptname: boolean = false;
  createchaptergroup !: FormGroup
  constructor(
    public form: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _global: GlobalService,
    public _restapiservice: RestapiService,
    private _alert: SnackbaralertService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdateChapterComponent>,
    private _api: ApiService
  ) {

    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });

    this.Rolesub = this._global.usermode.subscribe((data: any) => {
      this.userrole = data;
    });

  }



  ngOnInit(): void {
    this.buildForm();
    this.getPromptList(this.data.simulationname)
  }

  getPromptList(simulation: string) {
    let apiname = '/prompt/fetchaiprompt';
    this._api.getPromptlistData(apiname, simulation).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.promptlist = data.resultList;
          }
        }, error: (error: any) => {

        }
      })
  }

  public buildForm() {
    this.createchaptergroup = this.form.group({
      chaptername: [this.data.chaptername],
      prompt: [this.data.promptname]
    });

  }
  getPromptValue(index: number) {
    this.changepromptname = true;
    this.promptindex = index - 1;

  }



  updatechapter() {
    let apiname = '/chapter/cudaichapter';
    let aipromptid = 0;
    if (this.changepromptname == false) {
      aipromptid = this.data.aipromptid;
    } else {
      aipromptid = this.promptlist[this.promptindex].aipromptid
    }
    if (this.createchaptergroup.valid) {

      let body = {
        email: this.useremail,
        usermode: 'admin',
        caller: 'webadmin',
        aichapter: {
          aichapterid: this.data.aichapterid,
          simulationname: this.data.simulationname,
          aipromptid: aipromptid,
          chaptername: this.createchaptergroup.value.chaptername,
          action: 'update'
        }
      };

      this._api.addChapter(body, apiname).subscribe((data: any) => {
        if (data.status == 'Success') {
          this._alert.success(data.message);
          this.dialogRef.close(this.data);
        } else {
          this._alert.error(data.message)
        }
      });
    } else {
      this._alert.error("All field must be required")
    }
  }

  ngOnDestroy() {
    this.Rolesub.unsubscribe();
    this.Emailsub.unsubscribe();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
}