import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatePipe, CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { NgxEditorModule, Toolbar, Editor } from 'ngx-editor';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chatbox',
  standalone: true, // ✅ Angular 17 standalone component
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatButtonModule, MatIconModule
    
    
    // 👉 Add Angular Material modules here if needed (MatButtonModule, MatIconModule, etc.)
  ],
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
  animations: [
    trigger('rotateIcon', [
      state('spin', style({ transform: 'rotate(360deg)' })),
      transition('* => spin', animate('800ms linear')),
    ]),
  ],
})
export class ChatboxComponent extends AbstractComponent {
  panelOpenState = false;
  iconRotationState: string = 'default';
  topics: any = [];
  subjectidarray: any = [];
  message: any = [];
  conversation = '';
  selectedDiv: any;
  showInviteCard = true;
  mainchathow = true;

  data: any = Array.from({ length: 10 }, () => ({
    subjectid: [],
    topics: [],
  }));

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @Input() chattype = '';
  subjectarray: any[] = [];
  conversationarray: any[] = [];
  roundclick = '';
  pageoffset = 0;
  subjectid = 0;
  selectedround = 0;
  chatname = '';
  previouschatarray: any[] = [];
  totalarray: any[] = [];
  lastconversationid = 0;
  loadmore = '';
  isforumshow = false;
  content = '';
  topic = '';
  forumname = '';
  username = '';
  caller = '';
  usertype = '';
  searchcontent = '';
  coursename = '';
  subject = '';
  instructorpanelid = 0;
  isListVisible = false;
  isDisabled = false;
  listnameshow = false;
  searchForm!: FormGroup;
  chatForm!: FormGroup;
  filteredOptions: any[] = [];
  options: any[] = [];
  studentmail = '';
  instructorname = '';
  instructormail = '';
  studentsctioniddata = 0;
  studentname = '';
  studentdata: any = [];
  selectround = '';
  selectname = '';
  notopic = true;

  @Input() apiNameForGame = '';
  @Input() gameNameLM = '';
  languagesub!: Subscription;
  language = '';
  bodyContent: any;
  @Input() forumTextBig = '';
  languageSelect: Record<string, string> = {};
  @Input() forumKeyIndividual = '';
  @Input() forumKeyCourse = '';
  @Input() gamename = '';
  editor!: Editor;   // editor instance
  html: string = ''; // bound content
  customMenus: Toolbar = [
    ['bold', 'italic', 'underline', 'strike'],
    ['bullet_list', 'ordered_list', 'blockquote'],
    ['link', 'image', 'code'],
    ['undo', 'redo']
  ];

  // for chat
  myControl = new FormControl();
  selectedOption = '';

  @Output() callParent = new EventEmitter<void>();

  constructor(
    _router: Router,
    _global: GlobalService,
    _login: LoginService,
    _api: ApiService,
    _alert: SnackbaralertService,
    _restapiservice: RestapiService,
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private sharedService: SharedserviceService
  ) {
    super(_login, _api, _alert, _global, _router, _restapiservice);

    this.searchForm = this.fb.group({
      searchInput: [''],
    });

    this.chatForm = this.fb.group({
      content: ['']
    });

    this.languagesub = this._global.language.subscribe((data) => {
      if (data) {
        this.language = data.toLowerCase();
      }
    });

    this.sharedService.bodyContent$.subscribe((content) => {
      this.bodyContent = content;
      if (this.bodyContent !== '' && this.noofattempt !== '') {
        this.getFetchData();
      }
    });
  }

  override ngOnInit(): void {
    this.editor = new Editor();
    this.buildForm();

    if (this.usermode === 'instructor') {
      this.caller = 'webinstructor';
      this.username = this.instructorelementdetailsvalue.courseDetails.instructorname;
      this.coursecode = this.coursecode;
      this.coursename = this.instructorelementdetailsvalue.courseDetails.coursename;
      this.userregisterid = this.instructorelementdetailsvalue.userregisterid;
      this.coursedetailsid = this.instructorelementdetailsvalue.coursedetailsid;
      this.instructorpanelid =
        this.instructorelementdetailsvalue.instructorpanelid;
      this.instructormail =
        this.instructorelementdetailsvalue.courseDetails.instructormailid;
      this.instructorname =
        this.instructorelementdetailsvalue.courseDetails.instructorname;

      if (this.gamename !== 'Product & Consumer New') {
        if (this.chattype === 'individual') {
          this.chatname =
            this.instructorelementdetailsvalue.courseDetails.instructorname;
          this.forumname = 'Individual';
          this.forumTextBig = 'FORUM';
        } else {
          this.chatname =
            this.instructorelementdetailsvalue.courseDetails.coursename;
          this.forumname = 'Course';
          this.forumTextBig = 'FORUM';
        }
      }
    } else {
      this.caller = 'webstudent';
      this.username = this.studentelementdetailsvalue.userRegister.username;
      this.coursename = this.studentelementdetailsvalue.courseDetails.coursename;
      this.studentsctioniddata = this.studentelementdetailsvalue.studentsectionid;
      this.studentname = this.studentelementdetailsvalue.userRegister.username;
      this.studentmail = this.studentelementdetailsvalue.userRegister.email;
      this.instructormail =
        this.studentelementdetailsvalue.courseDetails.instructormailid;
      this.instructorname =
        this.studentelementdetailsvalue.courseDetails.instructorname;
      this.selectedround = Number(this.noofattempt);

      if (this.gamename !== 'Product & Consumer New') {
        if (this.chattype === 'individual') {
          this.chatname = this.instructorname;
          this.forumname = 'Individual';
          this.forumTextBig = 'FORUM';
        } else {
          this.chatname = this.coursename;
          this.forumname = 'Course';
          this.forumTextBig = 'FORUM';
        }
      }
    }

    if (this.gamename === 'Product & Consumer New') {
      this.getFetchData();
    }
  }

  buildForm() {
    this.searchForm = this.fb.group({
      searchInput: [''],
    });
  }

  getFetchData() {
    let apiname = `${this.apiNameForGame}`
    this._api.fetchLanguageDataForToolbar(apiname, this.noofattempt, this.language.toLowerCase(), this.bodyContent.courseDetails.coursedetailsid).subscribe({
      next: (data: any) => {
        if (data.status == "Success") {
          if (data.resultList != null) {
            this.languageSelect = data.resultList[0][this.gameNameLM][this.language.toLowerCase()];

            if (this.usermode == "instructor") {

              if (this.caller === 'webinstructor') {
                if (this.chattype === 'individual') {
                  this.forumname = this.languageSelect[this.forumKeyIndividual] || 'Individual';
                } else {
                  this.forumname = this.languageSelect[this.forumKeyCourse] || 'Course';
                }
              }
            }
            else if (this.caller === 'webstudent') {
              if (this.chattype === 'individual') {
                this.forumname = this.languageSelect[this.forumKeyIndividual] || 'Individual';
              } else {
                this.forumname = this.languageSelect[this.forumKeyCourse] || 'Course';
              }
            }
            if (this.gamename === "Product & Consumer New") {
              this.forumTextBig = this.languageSelect['b5'];
            } else {
              this.forumTextBig = 'FORUM'
            }


          }

        }
      }, error: (error: any) => {
      }
    })
  }

  fetchTopic(phase: number) {
    this.showInviteCard = false;
    let apiname = "/chatsubject/fetchchatsubject";
    this._api.fetchSubjectName(this.caller, this.usermode, String(phase), this.coursename, this.coursecode, this.chattype,
      Number(this.studentsectionid), apiname,)
      .subscribe({
        next: (data: any) => {
          console.log('Topics for Round :', data);
          if (data.status == "Success") {
            if (data.resultList != null) {
              this.notopic = false;
              let j = 0;
              let roundno = 0
              for (let i = 0; i < data.resultList.length; i++) {
                roundno = data.resultList[0].roundno;
                this.data[roundno - 1].topics[i] = data.resultList[i].subject;
                this.data[roundno - 1].subjectid[i] = data.resultList[i].chatsubjectid;
              }
              this.roundclick = 'round' + roundno
            }
            else {
              this.notopic = true;
            }
          }
        },
        error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        },
      });
  }

  replysubjectapi() {
    let apiname = "/chatsubject/addchatsubject";

    this._api.addchatsubjectwithConversation(this.usermode, this.coursename,
      this.coursecode, Number(this.coursedetailsid), this.studentsctioniddata,
      this.studentname, this.studentmail, Number(this.instructorpanelid),
      this.instructormail, this.instructorname,
      this.selectedround, this.topic, this.chattype, this.content,
      Number(this.userregisterid), this.username, apiname)
      .subscribe({
        next: (data: any) => {
          if (data.status == "Success") {
            this.conversationarray = [];
            this.selectedDiv = -1;
            this.showforum();
            if (this.selectedround != 0) {
              this.fetchTopic(Number(this.selectedround));

            }

          }
        },
        error: (error: any) => {
          this.checkloading = false;
          this.driveerrorLog(error, apiname);
        },
      });
  }

  showforum() {
    this.isforumshow = !this.isforumshow;
  }

  override ngOnDestroy(): void {
    this.editor.destroy();
  }
  // rest of your methods remain unchanged...
}
