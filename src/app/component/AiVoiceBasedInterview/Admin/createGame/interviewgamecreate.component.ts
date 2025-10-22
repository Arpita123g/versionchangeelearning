import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger, } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { PasswordDialogComponent } from 'src/app/admin/password-dialog/password-dialog.component';
import { NgxSimpleTextEditorModule } from 'ngx-simple-text-editor';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
interface Game {
  aigameid: string;
  aigamename: string;
}
@Component({
  selector: 'app-interviewgamecreate',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatPaginatorModule,
     MatTableModule, NgxSimpleTextEditorModule,MatButtonModule,
     MatInputModule, MatCardModule,MatFormFieldModule, MatSelectModule,MatIconModule],
  templateUrl: './interviewgamecreate.component.html',
  styleUrls: ['./interviewgamecreate.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('0.2s ease-out', style({ height: 180, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 180, opacity: 1 }),
        animate('0.2s ease-in', style({ height: 0, opacity: 0 })),
      ]),

    ]),
    trigger('detailExpand', [
      state('collapsed', style({ height: 0, minHeight: '0', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),

    ])
  ]
})


export class InterviewgamecreateComponent implements OnInit {
  Emailsub: Subscription;
  useremail: string | null | undefined;
  selectedGame: string | null = '';
  showAIDetailsCard: boolean = false;
  creategamegroup!: FormGroup;
  createquestionsetgroup!: FormGroup;
  questions: { aiquestion: string }[] = [];
  questionCounter: number = 1;
  isGameNotSelected: boolean = true;
  isQuestionNotSelected: boolean = true;
  isadd = false;
  StatusClass = 'questionlist';
  public previouselement: any;
  public currentelement: any;
  public expandelement: any;
  selectedProductType: string = '';
  selectedGameList: string = "";
  // displayedColumns: string[] = ['game', 'product', 'questionSet', 'questionlist'];
  displayedColumnsexpand: string[] = ['questionlist'];
  dataSourceelement = new MatTableDataSource<PeriodicElement>();
  gamename: string = "";
  gameListArray: any = []
  QustionListArray: any = [];
  tableData: any = [];
  selectedQuestionSetName: string = "";
  generalprompt: string = "";
  systemprompt: string = "";
  evgeneralprompt: string = "";
  evsystemprompt: string = "";
  fbgeneralprompt: string = "";
  fbsystemprompt: string = "";
  selectedQuestionset: string | null = '';
  questionsetid: number = 0;
  studentemailsearch = '';
  searchFlag = "instructor"
  dropdownOpen = false;

  instructormailidforsearch: any;
  isPasswordMatched: boolean = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  search() {
    if (this.searchFlag == 'instructor') {
      let body = {
        email: this.useremail,
        status: 'active',
        caller: 'webadmin',
        usermode: 'admin',
        searchtype: 'instructormail',
        searchcontent: this.instructormailidforsearch,
      };
    }
  }

  expandedElement: any | null = null;
  selectedProductTypeForTable: string = 'All';
  dataSource = new MatTableDataSource<any>([]); 

  displayedColumns: string[] = ['game', 'product', 'questionSet', 'questionlist'];
  constructor(
    public form: FormBuilder,
    private _api: ApiService,
    public dialog: MatDialog,
    private _global: GlobalService,
    private _alert: SnackbaralertService,
    private fb: FormBuilder) {
    this.Emailsub = this._global.useremail.subscribe((data) => {
      this.useremail = data;
    });
  }


  ngOnInit() {
    this.buildform();
    this.getTableData();

  }

  public buildform() {
    this.creategamegroup = this.form.group({
      selectProductType: ['', [Validators.required]],
      gamename: ['', [Validators.required]],
    });

    this.createquestionsetgroup = this.fb.group({
      questionSetName: ['', Validators.required],
      systemPrompt: [''],
      generalPrompt: [''],
      evaluationSystemPrompt: [''],
      evaluationGeneralPrompt: [''],
      feedbackSystemPrompt: [''],
      feedbackGeneralPrompt: [''],
      questions: this.fb.array([])
    });
  }

  //game create per product type wise
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

          // this.fetchtabledata();
        } else {
          this._alert.error(data.message)
        }
      });
    } else {
      this._alert.error("All field must be required")
    }

  }

  //get game name list per product type wise
  getGameList(event: any) {
    // this.selectedProductType = event.target.value;
    // this.setConditionalValidators(event.target.value);
    let apiname = '/aigame/fetchaigame';
    this._api.getAiGamelistData(apiname, event.target.value).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.createquestionsetgroup.reset();
            this.gameListArray = data.resultList;
            this.QustionListArray = [];
            this.selectedQuestionset = "";
            this.showAIDetailsCard = false;
            this.selectedGame = "";
            this.isQuestionNotSelected = true;
          }
        }, error: (error: any) => {

        }
      })
  }

  //get questionsetlist per game name wise
  getQuestionList(event: any) {
    const selectedId = ((event.target as HTMLSelectElement).value);
    const selectedGame = this.gameListArray.find((game: Game) => game.aigameid === selectedId);
    this.isGameNotSelected = selectedGame === ''; // If empty, hide the button

    let apiname = '/aiquestion/fetchaiquestionset';
    this._api.getAiQuestionsetlistData(apiname, 'aigameid', selectedId).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success") {
            this.createquestionsetgroup.reset();
            this.selectedQuestionset = "";
            this.isQuestionNotSelected = true;
            this.showAIDetailsCard = false;
            this.QustionListArray = data.resultList;
          }
        }, error: (error: any) => {

        }
      })

  }

  //get tabledata per producttype wise
  getTableData() {
    let apiname = '/aiquestion/fetchaiquestionset';
    let paramValue = this.selectedProductTypeForTable === 'All' ? 'allproducttypes' : 'producttype';
    this._api.getAiQuestionsetlistData(apiname, paramValue, this.selectedProductTypeForTable).subscribe(
      {
        next: (data: any) => {
          if (data.status == "Success" && data.resultList) {
            // this.dataSource = new MatTableDataSource(data.resultList);
            this.dataSource.data = data.resultList || [];
            this.dataSource.paginator = this.paginator;
          } else {
            // this.dataSource = new MatTableDataSource(data.resultList);
            this.dataSource.data = data.resultList || [];
            this.dataSource.paginator = this.paginator;
          }
        }, error: (error: any) => {

        }
      })

  }


  //questionset save function
  saveClicked(type: string) {
    const filteredQuestions = this.questions.filter(q => q.aiquestion.trim() !== '');
    if (this.selectedProductType == 'Non-Ai') {
      if (!this.selectedGame ||
        !this.createquestionsetgroup.get('questionSetName')?.value ||
        !this.createquestionsetgroup.get('evaluationGeneralPrompt')?.value ||
        !this.createquestionsetgroup.get('evaluationSystemPrompt')?.value ||
        filteredQuestions.length === 0) {
        this._alert.error('Please fill all required fields for Non-Ai product type.');
        return;
      }
    } else if (this.selectedProductType == 'Non-AI-Coach') {
      if (!this.selectedGame ||
        !this.createquestionsetgroup.get('questionSetName')?.value ||
        !this.createquestionsetgroup.get('evaluationGeneralPrompt')?.value ||
        !this.createquestionsetgroup.get('evaluationSystemPrompt')?.value ||
        !this.createquestionsetgroup.get('feedbackGeneralPrompt')?.value ||
        !this.createquestionsetgroup.get('feedbackSystemPrompt')?.value ||
        filteredQuestions.length === 0) {
        this._alert.error('Please fill all required fields for Non-AI-Coach product type.');
        return;
      }
    } else {
      if (!this.selectedGame ||
        !this.createquestionsetgroup.get('questionSetName')?.value ||
        !this.createquestionsetgroup.get('generalPrompt')?.value ||
        !this.createquestionsetgroup.get('systemPrompt')?.value ) {
        this._alert.error('Please fill all required fields.');
        return;
      }
    }

    let aiquestionset: any = {};
    if (this.selectedProductType == 'Non-Ai') {
      aiquestionset = {
        aigameid: this.selectedGame,
        producttype: this.selectedProductType,
        aiquestionsetname: this.createquestionsetgroup.get('questionSetName')?.value,
        aievgeneralprompt: this.createquestionsetgroup.get('evaluationGeneralPrompt')?.value,
        aievsystemprompt: this.createquestionsetgroup.get('evaluationSystemPrompt')?.value,
        questions: filteredQuestions,
        action: type
      };
    } else if (this.selectedProductType == 'Non-AI-Coach') {
      aiquestionset = {
        aigameid: this.selectedGame,
        producttype: this.selectedProductType,
        aiquestionsetname: this.createquestionsetgroup.get('questionSetName')?.value,
        aievgeneralprompt: this.createquestionsetgroup.get('evaluationGeneralPrompt')?.value,
        aievsystemprompt: this.createquestionsetgroup.get('evaluationSystemPrompt')?.value,
        aifbgeneralprompt: this.createquestionsetgroup.get('feedbackGeneralPrompt')?.value,
        aifbsystemprompt: this.createquestionsetgroup.get('feedbackSystemPrompt')?.value,
        questions: filteredQuestions,
        action: type
      };
    } else {
      aiquestionset = {
        aigameid: this.selectedGame,
        producttype: this.selectedProductType,
        aiquestionsetname: this.createquestionsetgroup.get('questionSetName')?.value,
        aigeneralprompt: this.createquestionsetgroup.get('generalPrompt')?.value,
        aisystemprompt: this.createquestionsetgroup.get('systemPrompt')?.value,
        questions: filteredQuestions,
        action: type
      };
    }
    if (type === 'update') {
      aiquestionset.aiquestionsetid = this.questionsetid;
    }

    let apiname = '/aiquestion/cudaiquestionset';
    let body = {
      email: this.useremail,
      usermode: 'admin',
      caller: 'webadmin',
      action: type,
      aiquestionset: aiquestionset
    }

    this._api.addAiQuestionset(body, apiname).subscribe((data: any) => {
      if (data.status == 'Success') {
        this._alert.success(data.message);
        this.createquestionsetgroup.reset();
        this.selectedProductType = "";
        this.selectedGame = "";
        this.selectedQuestionset = "";
        this.questions = [];
        this.isQuestionNotSelected = true;
        this.showAIDetailsCard = false;
        this.getTableData();
      } else {
        this._alert.error(data.message)
      }
    });
  }

  //all details show as per questionset select
  onQuestionSelect(event: Event) {
    if (this.isPasswordMatched) {
      this.questionselect(event);
    } else {
      this.passwordcheck().then((isMatched) => {
        if (!isMatched) {
          this.selectedQuestionset = "";
          this.isQuestionNotSelected = true;
          this.isPasswordMatched = false;
          console.log("Password not matched", isMatched);
          return; // ⛔️ Stop execution if password doesn't match
        }
        this.questionselect(event);

      });
    }

  }

  questionselect(event: Event) {
    const selectedIndex = (event.target as HTMLSelectElement).value;
    this.isPasswordMatched = true;
    if (selectedIndex !== "") {
      this.selectedQuestionSetName = this.QustionListArray[selectedIndex].questionname;
      this.questionsetid = this.QustionListArray[selectedIndex].aiquestionsetid;
      this.isQuestionNotSelected = false; // Enable "Create" button
      this.questions = [];
      this.createquestionsetgroup.patchValue({
        questionSetName: this.QustionListArray[selectedIndex].aiquestionsetname,
        generalPrompt: this.QustionListArray[selectedIndex].aigeneralprompt,
        systemPrompt: this.QustionListArray[selectedIndex].aisystemprompt,
        evaluationGeneralPrompt: this.QustionListArray[selectedIndex].aievgeneralprompt,
        evaluationSystemPrompt: this.QustionListArray[selectedIndex].aievsystemprompt,
        feedbackGeneralPrompt: this.QustionListArray[selectedIndex].aifbgeneralprompt,
        feedbackSystemPrompt: this.QustionListArray[selectedIndex].aifbsystemprompt,
      });

      // Populate the questions array in the form group
      const questionsArray = this.createquestionsetgroup.get('questions') as FormArray;
      questionsArray.clear(); // Clear existing questions if any

      // Add the questions to the form array
      this.QustionListArray[selectedIndex].questions.forEach((question: any) => {
        questionsArray.push(this.fb.group({
          aiquestion: [question.aiquestion]  // Set the aiquestion value
        }));
      });

      this.questions = this.QustionListArray[selectedIndex].questions.map((q: any) => ({ aiquestion: q.aiquestion }));

    } else {
      this.createquestionsetgroup.reset();
      this.selectedQuestionSetName = "";
      this.questions = [];
      this.isQuestionNotSelected = true;
      this.showAIDetailsCard = false;
    }
  }




  questionlist(e: any) {
    // If you're clicking the same element again
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


  toggleRow(element: any) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  toggleadd() {
    this.isadd = !this.isadd;
  }

  showAIDetails() {
    if (this.isPasswordMatched) {
      this.showAIDetailsCard = true;
    } else {
      this.passwordcheck().then((isMatched) => {
        if (!isMatched) {
          return;
        }
        this.showAIDetailsCard = true;
      });
    }
  }

  hideAIDetails() {
    this.showAIDetailsCard = false;
  }


  addQuestion() {
    this.questions.push({ aiquestion: '' });
  }

  // If you're setting from server data:
  loadFromExisting(index: number) {
    const selected = this.QustionListArray[index];
    this.questions = selected.questions.map((q: any) => ({ aiquestion: q.aiquestion }));
  }

  passwordcheck(): Promise<boolean> {
    return new Promise((resolve) => {
      const dialogRef = this.dialog.open(PasswordDialogComponent, {
        width: '300px',
        panelClass: 'custom-password-dialog',
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(password => {
        if (password !== null && password !== '') {
          this.verifyPassword(password).then((isMatched) => {
            resolve(isMatched);
          });
        } else {

          console.log('Password entry cancelled.');
          resolve(false);
        }
      });
    });
  }

  verifyPassword(password: string): Promise<boolean> {
    let body = {
      email: "administrator@cesim.in",
      caller: 'webadmin',
      usermode: 'admin',
      password: password,
    };

    return new Promise((resolve) => {
      this._api.checkPromptPassword(body).subscribe(
        (response: any) => {
          if (response.status === 'Success') {
            resolve(true);
          } else {
            this._alert.error('Incorrect password. Please try again.');
            resolve(false);
          }
        },
        (error: any) => {
          this._alert.error('Error verifying password. Please try again later.');
          resolve(false);
        }
      );
    });
  }





  setConditionalValidators(productType: string) {
    const f = this.createquestionsetgroup;

    // Reset all
    f.get('systemPrompt')?.clearValidators();
    f.get('generalPrompt')?.clearValidators();
    f.get('evaluationSystemPrompt')?.clearValidators();
    f.get('evaluationGeneralPrompt')?.clearValidators();
    f.get('feedbackSystemPrompt')?.clearValidators();
    f.get('feedbackGeneralPrompt')?.clearValidators();

    // Apply conditionally
    if (productType === 'Others') {
      f.get('systemPrompt')?.setValidators(Validators.required);
      f.get('generalPrompt')?.setValidators(Validators.required);
    }

    if (productType === 'Non-Ai' || productType === 'Non-AI-Coach') {
      f.get('evaluationSystemPrompt')?.setValidators(Validators.required);
      f.get('evaluationGeneralPrompt')?.setValidators(Validators.required);
    }

    if (productType === 'Non-AI-Coach') {
      f.get('feedbackSystemPrompt')?.setValidators(Validators.required);
      f.get('feedbackGeneralPrompt')?.setValidators(Validators.required);
    }

    // Update all validity
    Object.keys(f.controls).forEach((key) => {
      f.get(key)?.updateValueAndValidity();
    });
  }

  ngOnDestroy() {
    this.Emailsub?.unsubscribe();

  }


}

export interface PeriodicElement {
  name: string;
  position: number;
}
