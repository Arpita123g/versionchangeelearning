import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/service/backendgameapi/api.service';
import { GlobalService } from 'src/app/service/global.service';
import { SpeechService } from 'src/app/service/speech/SpeechService';

@Component({
  selector: 'app-voicebasedainterview',
  templateUrl: './voicebasedainterview.component.html',
  styleUrls: ['./voicebasedainterview.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule]
})
export class VoicebasedainterviewComponent implements OnInit, OnDestroy {

  currentQuestion: any;
  transcript: string = '';
  feedback: string = '';
  finalResponse: string = '';
  isFinished: boolean = false;
  isListening: boolean = false;
  Studentelementdetailssub: Subscription;
  studentelementdetailsvalue: any = [];
  QustionListArray: any = [];
  currentQuestiontext: string = "";
  currentQuestionIndex: number = 0;
  answers: { question: string, answer: string }[] = [];

  private interviewService = inject(ApiService);
  private speechService = inject(SpeechService);
  private _api = inject(ApiService);
  private _global = inject(GlobalService);

  constructor() {
    this.Studentelementdetailssub = this._global.studentelementdetails.subscribe((data) => {
      this.studentelementdetailsvalue = data;
    });
  }

  ngOnInit(): void {
    this.getQuestion();
    this.loadNextQuestion();
  }

  ngOnDestroy(): void {
    if (this.Studentelementdetailssub) {
      this.Studentelementdetailssub.unsubscribe();
    }
  }

  getQuestion() {
    const apiname = '/aiquestion/fetchaiquestionset';
    this._api.getAiQuestionsetlistData(apiname, 'aigameid', this.studentelementdetailsvalue['courseDetails']['aigameid'])
      .subscribe({
        next: (data: any) => {
          if (data.status === "Success") {
            this.QustionListArray = data.resultList[0].questions;
            this.setCurrentQuestion(); // set first question
            console.log("Question list", this.QustionListArray);
          }
        },
        error: (error: any) => {
          console.error(error);
        }
      });
  }

  setCurrentQuestion() {
    if (this.currentQuestionIndex < this.QustionListArray.length) {
      this.currentQuestiontext = this.QustionListArray[this.currentQuestionIndex].aiquestion;
    } else {
      this.isFinished = true;
      this.finalResponse = "Thank you for completing the interview!";
    }
  }

  nextQuestion() {
    // Store current Q&A pair
    if (this.currentQuestionIndex < this.QustionListArray.length) {
      this.answers.push({
        question: this.currentQuestiontext,
        answer: this.transcript.trim()
      });
    }

    // Prepare for next question
    this.transcript = '';
    this.feedback = '';
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.QustionListArray.length) {
      this.setCurrentQuestion();
    } else {
      this.isFinished = true;
      this.finalResponse = "Thank you for completing the interview!";
      console.log('Interview summary:', this.answers); // ✅ Here are all Q&As
      // Optionally: send this.answers to backend
    }
  }

  submitInterviewSummary() {
    const apiname = '/aiquestion/submitanswers';
    // this._api.postData(apiname, {
    //   userId: this.studentelementdetailsvalue.userId,
    //   courseId: this.studentelementdetailsvalue.courseDetails.id,
    //   answers: this.answers
    // }).subscribe({
    //   next: (res) => console.log('Submitted successfully'),
    //   error: (err) => console.error(err)
    // });
  }

  loadNextQuestion() {
    this.transcript = '';
    this.feedback = '';
    this.interviewService.getNextQuestion().subscribe(q => {
      if (q) {
        this.currentQuestion = q;
      } else {
        this.isFinished = true;
        this.finalResponse = 'Thank you for completing the interview!';
      }
    });
  }

  startListening() {
    this.isListening = true;
    // wire to unified SpeechService API
    this.speechService.onResult((text: string) => {
      this.transcript = text;
      this.isListening = false;
      this.getFeedback();
    });
    this.speechService.startListening();
  }

  stopListening() {
    void this.speechService.stopListening();
    this.isListening = false;
  }

  getFeedback() {
    this.interviewService.getFeedback(this.currentQuestion.id, this.transcript).subscribe(response => {
      this.feedback = response.feedback;
    });
  }
}
