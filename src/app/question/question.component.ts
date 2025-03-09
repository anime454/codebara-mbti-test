import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Question } from '../shared/models/question.model';
import { Answer } from '../shared/models/answer.model';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})

export class QuestionComponent {
[x: string]: any;
  @Input({required: true}) question!: Question;
  @Output() addAnswer = new EventEmitter<Answer>();

  answer: Answer = {}

  checkboxIsChecked(answer: "A" | "N" | "D") {
    return this.answer[this.question.id] === answer;
  }

  updateAnswer(answer: "A" | "N" | "D") {
    if (this.answer[this.question.id] === answer) {
      delete this.answer[this.question.id];
    } else {
      this.answer[this.question.id] = answer;
    }
    console.log(this.answer);
  }


  submitAnswer() {
    this.addAnswer.emit({ [this.question.id]: "A" });
  }
}
