import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionCardComponent } from './question-card/question-card.component';
import { ScoreComponent } from './score/score.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionCardComponent, ScoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'myApp';
}
