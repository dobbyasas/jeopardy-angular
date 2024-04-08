import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

interface Player {
  name: string;
  score: number;
  imgPath: string;
}

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [NgFor],
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})

export class ScoreComponent {
  @Input() players: Player[] = [];
  @Output() handleIncreaseScore = new EventEmitter<number>();
  @Output() handleDecreaseScore = new EventEmitter<number>();

  increaseScore(index: number): void {
    this.handleIncreaseScore.emit(index);
  }

  decreaseScore(index: number): void {
    this.handleDecreaseScore.emit(index);
  }
}
