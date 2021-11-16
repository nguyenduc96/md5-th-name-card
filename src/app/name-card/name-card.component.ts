import { Component, Input, OnInit } from '@angular/core';
import {Card} from '../card';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {

  @Input()
  card: Card = {};

  constructor() { }

  ngOnInit() {
  }

}
