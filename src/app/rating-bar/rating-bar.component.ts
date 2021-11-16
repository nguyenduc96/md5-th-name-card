import {Component, Input, OnInit} from '@angular/core';
import {Vote} from '../vote';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input()
  vote: Vote = {
    voteNumber: 0,
  };

  numbers: Array<number> = [];

  constructor() {
    for (let i = 1; i < 11; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit() {
  }

  setVote(_vote: number) {
    this.vote.voteNumber = _vote;
    this.getColor(_vote);
  }

  getColor(rating: number) {
    if (rating < 3) {
      this.vote.backgroundColor =  'red';
    } else if (rating < 5) {
      this.vote.backgroundColor =  'orange';
    } else if (rating < 7) {
      this.vote.backgroundColor =  'yellow';
    } else if (rating < 9) {
      this.vote.backgroundColor =  'blueviolet';
    } else {
      this.vote.backgroundColor =  '#00ff00';
    }
  }
}
