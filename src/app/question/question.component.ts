import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  imports: [NgIf]
})
export class QuestionComponent {
  @Input() question: string = '';
  @Input() value: string = '';
  @Input() answer: string = '';
  @Output() onBack = new EventEmitter<void>();
  @Output() onShowAnswer = new EventEmitter<void>();
  
  showAnswer: boolean = false;

  handleShowAnswer(): void {
    this.showAnswer = true;
    this.onShowAnswer.emit();
  }
}
