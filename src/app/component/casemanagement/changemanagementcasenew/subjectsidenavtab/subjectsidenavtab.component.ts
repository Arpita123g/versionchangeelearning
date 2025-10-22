import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subjectsidenavtab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subjectsidenavtab.component.html',
  styleUrls: ['./subjectsidenavtab.component.scss']
})
export class SubjectsidenavtabComponent implements OnInit {
  selectedTopic: string = '';  // Store the selected topic
  isSubject1Open: boolean = false;
  isSubject2Open: boolean = false;
  question: string = '';
  options: string[] = [];
  feedback: string = '';

  toggleSubject(subject: number) {
    if (subject === 1) {
      this.isSubject1Open = !this.isSubject1Open;
      this.selectedTopic = ''; // Clear topic when toggling
      if (this.isSubject1Open) {
        this.isSubject2Open = false;
      }
    } else if (subject === 2) {
      this.isSubject2Open = !this.isSubject2Open;
      this.selectedTopic = '';
      if (this.isSubject2Open) {
        this.isSubject1Open = false;
      }
    }
  }

  selectTopic(topic: string) {
    this.selectedTopic = topic;  // Set the selected topic
    this.loadQuestion();  // Load the question based on the selected topic
  }

  loadQuestion() {
    // Define questions and options dynamically based on selected topic
    if (this.selectedTopic === 'Topic 1') {
      this.question = 'What is the capital of France?';
      this.options = ['Berlin', 'Paris', 'Madrid'];
    } else if (this.selectedTopic === 'Topic 2') {
      this.question = 'Which language is used for web development?';
      this.options = ['Java', 'Python', 'JavaScript'];
    } else if (this.selectedTopic === 'Topic 3') {
      this.question = 'Which planet is known as the Red Planet?';
      this.options = ['Earth', 'Mars', 'Venus'];
    } else if (this.selectedTopic === 'Topic 4') {
      this.question = 'What is the largest ocean on Earth?';
      this.options = ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean'];
    }
  }

  selectOption(option: string) {
    console.log('Selected Option:', option);  // Handle the option selection
  }

  constructor() { }

  ngOnInit(): void {
  }

}
