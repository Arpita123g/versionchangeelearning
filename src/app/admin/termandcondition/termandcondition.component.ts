import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AbstractComponent } from 'src/app/AbstractComponent';
import { LoginService } from 'src/app/service/auth/login.service';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { RestapiService } from 'src/app/service/restapi.service';
import { SnackbaralertService } from 'src/app/service/snackbaralert.service';
import { VoicebasedService } from '../../service/speech/voicebased.service';

interface TermData {
  content: string[];
  instructiontext: string[];
  contenttext2: string;
  gamename?: string;
}

@Component({
  selector: 'app-termandcondition',
  templateUrl: './termandcondition.component.html',
  styleUrls: ['./termandcondition.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class TermandconditionComponent extends AbstractComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private login = inject(LoginService);
  private global = inject(GlobalService);
  private alert = inject(SnackbaralertService);
  private api = inject(ApiService);
  private restapiservice = inject(RestapiService);
  private dialog = inject(MatDialog);
  private voicebasedService = inject(VoicebasedService);

  acceptTermsub: Subscription;
  termdata: TermData = {
    content: [],
    instructiontext: [],
    contenttext2: ''
  };
  gamenamesub: Subscription;
  gamename: string = "";
  showdownload: boolean = false;
  acceptTerm: boolean = false;
  currenttabb: number = 0;
  isaccepted: boolean = false;
  voiceconversationid: number = 0;
  showAll: boolean[] = [false, false, false];

  constructor() {
    super(
      inject(LoginService),
      inject(ApiService),
      inject(SnackbaralertService),
      inject(GlobalService),
      inject(Router),
      inject(RestapiService)
    );
    
    this.acceptTermsub = this.global.acceptTerm.subscribe((data) => {
      this.acceptTerm = data;
    });
    
    this.gamenamesub = this.global.gamename.subscribe((data) => {
      this.gamename = data;
    });
  }

  override ngOnInit(): void {
    if (this.gamename === "Negotiation") {
      this.termdata = this.termdataconditiontext[0];
    } else if (this.gamename === "Ethics") {
      this.termdata = this.termdataconditiontext[1];
    } else if (this.gamename === "Communication") {
      this.showdownload = true;
      this.termdata = this.termdataconditiontext[2];
    } else if (this.gamename === "Interview") {
      this.termdata = this.termdataconditiontext[3];
    } else {
      this.termdata = this.termdataconditiontext[3];
    }
    this.chatFetch(this.noofattempt);
  }

  turncatedtext(textline: string): string {
    return (textline.substring(0, 150) + (textline.length > 150 ? '. . .' : ''));
  }

  toggleshow(index: number): void {
    this.showAll[index] = !this.showAll[index];
  }

  openconditonpop(): void {
    const dialogRef = this.dialog.open(TermconditionpopupComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe();
  }

  chatFetch(attempt: string): void {
    const apiname = "/voiceconversation/fetchvoiceconversation";
    this.api.fetchvoiceconversation(apiname, attempt).subscribe(
      (data: any) => {
        if (data.status === 'Success') {
          if (data.resultList[0].termscondition === 'yes') {
            this.acceptTerm = true;
            this.isaccepted = true;
          } else {
            this.acceptTerm = false;
          }
          this.voiceconversationid = data.resultList[0].voiceconversationid;
        }
      }
    );
  }

  gotToAIinterview(): void {
    if (!this.acceptTerm) {
      this.alert.error("To move ahead, the terms & conditions need to be accepted.");
    } else {
      this.voicebasedService.changeTabState(1);
    }
  }

  toggleStartButton(event: any): void {
    if (event?.target?.checked !== undefined) {
      this.global.acceptTerm.next(event.target.checked);
    }

    const apiname = "/voiceconversation/updatetermscondition";
    const requestParameter = event.target.checked ? 'yes' : 'no';

    this.api.updatetermcondition(apiname, requestParameter, Number(this.voiceconversationid)).subscribe(
      (data: any) => {
        if (data.status === 'Success') {
          this.isaccepted = true;
          this.voicebasedService.istermandconditionchangeState(true);
        }
      }
    );
  }

  readonly termdataconditiontext: TermData[] = [
    {
      content: [
        "Voice-based sim is here to help you prepare for the challenging world of Negotiations. In this task, you are representing Mr. Desai, who wants to buy a Duesenberg Model J, a fancy car. There are only 5 of these cars around, and one is owned by Mr. Raj in Mumbai. Luckily, Mr. Raj wants to sell it because he's moving away. Mr. Desai has set a budget of $600,000 for this purchase."
      ],
      instructiontext: [
        "	Approach the negotiation as if it were a real-life scenario.",
        "	Dress appropriately and maintain a professional demeanor.",
        "	To ensure an immersive experience, grant access to your audio and video functionalities.",
        "	The simulation is capable of understanding English, Hindi, Gujarati, Kannada, Marathi, Tamil, Telugu, Urdu, Bhojpuri, Bengali, Punjabi, and Malayalam.",
        "	The responses from the system will be provided exclusively in English.",
        "	Respond clearly, promptly, and precisely in conversations to simulate real-time negotiation dynamics.",
        "	As a negotiator, you can be creative with the responses to close the deal.",
        "	The end simulation option will record the response and end the current round.",
      ],
      contenttext2: "Remember, practice makes negotiation perfect!",
    },
    {
      content: ["Voice-based sim is here to help you prepare for the challenging world of business dilemmas. In this task, as a founder at Investz Easy, a pioneering stock brokerage firm dedicated to democratize finance, you're faced with a pivotal situation. The market is abuzz with speculation surrounding the stock of Duestop, a retail store selling gaming cassettes. Despite technological advancements rendering the business somewhat obsolete, there's intense speculation about the stock's future. Large funds (Institutional Investors) in the Indian market are actively betting against Duestop's stock, anticipating a further decline in its price. This is due to bad fundamentals of the company and bleak future due to technological advancements. The overall economy is also weak with negative sentiments running through the market. However, a community of retail investors (Individuals) decides to rally behind Duestop, purchasing its stock in a bid to counteract the actions of the large funds. This grassroots movement leads to a sudden surge in Duestop's stock price, drawing in many individual investors. ",
        "However, the rapid increase in demand for the stock raises concerns among market observers about potential market manipulation or speculative trading practices. Consequently, several stockbroking apps have decided to restrict trading of Duestop stock on their platforms to mitigate potential risks. Amid this scenario, Investz Easy chooses not to intervene, opting to allow trading to continue on its platform. This decision attracts the attention of Capitalz, a multi-billion-dollar investment company that has invested heavily in Investz Easy. The cash left with the firm to continue operations is estimated to be less than 6 months.  The senior partner from Capitalz has reached out to you for a discussion. As the founder, you must navigate the interests of Investz Easy's vision, its investors, and the broader market dynamics in your meeting with Capitalz. "
      ],
      instructiontext: [
        "	Approach the business dilemma as if it were a real-life scenario. ",
        "	Dress appropriately and maintain a professional demeanor.",
        "	To ensure an immersive experience, grant access to your audio and video functionalities.",
        "	The simulation is capable of understanding English, Hindi, Gujarati, Kannada, Marathi, Tamil, Telugu, Urdu, Bhojpuri, Bengali, Punjabi, and Malayalam.",
        "	The responses from the system will be provided *exclusively in English.",
        "	Respond clearly, promptly, and precisely in conversations to simulate real-time conversational dynamics.",
        "	As a communicator, you can be creative with the responses to propose a win-win scenario.",
        " The end simulation option will record the response and end the current round.",
      ],
      contenttext2: "Remember, practice makes handling business situations perfect!",
    },
    {
      content: ["Voice-based sim is here to help you prepare for the challenging world of communicating your thoughts. In this task, you'll act as the Product Owner proposing the integration of voice-based recognition into a microblogging app. The Program Manager has called to discuss market acceptance, specific use cases, competitive advantage, accessibility, user engagement, monetisation potential, innovative image, community building, expansion to new markets, development costs, timelines, and legal compliance. A market study on various mentioned parameters has been provided below. Your goal is to persuade the Program Manager by effectively communicating your thoughts on these points."],
      instructiontext: [
        "	Approach the conversation as if it were a real-life scenario. ",
        "	Dress appropriately and maintain a professional demeanor.",
        "	To ensure an immersive experience, grant access to your audio and video functionalities.",
        "	The simulation is capable of understanding English, Hindi, Gujarati, Kannada, Marathi, Tamil, Telugu, Urdu, Bhojpuri, Bengali, Punjabi, and Malayalam.",
        "	The responses from the system will be provided exclusively in English.",
        "	Respond clearly, promptly, and precisely in conversations to simulate real-time communication dynamics.",
        "	As a great communicator, you can be creative with the responses to persuade the Program Manager.",
        "	The end simulation option will record the response and end the current round.",
      ],
      contenttext2: "Remember, practice makes communication perfect!"
    },
    {
      gamename: 'Interview',
      content: ["Conversational sim is here to help you prepare for the challenging world of job interviews, specifically tailored for the role to achieve your aspirational job. Before you embark on this learning journey, please take a moment to read through the following:"],
      instructiontext: [
        "	Approach the interview as if it were a real-life scenario. ",
        "	Dress appropriately and maintain a professional demeanor.",
        " To ensure an immersive experience, grant access to your audio and video functionalities.",
        " Use the record button to answer the interviewer's question. Then, select send to submit or delete to redo.",
        "	The simulation is capable of understanding English, Hindi, Gujarati, Kannada, Marathi, Tamil, Telugu, Urdu, Bhojpuri, Bengali, Punjabi, and Malayalam.",
        "	The responses from the system will be provided exclusively in English.",
        "	Respond clearly, promptly, and precisely in conversations to simulate real-time interview dynamics.",
        "	Do complete the interview in one sitting to maximize effectiveness.",
        "	The feedback will be automatically generated at the end of the conversation.",
        "	'End simulation' records and ends the current round and moves to the next round (if any)."
      ],
      contenttext2: "Remember, practice helps achieve aspiration!"
    },
  ];

  override ngOnDestroy(): void {
    this.acceptTermsub.unsubscribe();
    this.gamenamesub.unsubscribe();
  }
}

@Component({
  selector: 'app-termconditionpopup',
  templateUrl: './termconditionpopup.html',
  styleUrls: ['./termandcondition.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TermconditionpopupComponent implements OnInit {
  ngOnInit(): void {}
}

