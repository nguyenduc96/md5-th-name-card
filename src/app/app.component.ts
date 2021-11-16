import { Component } from '@angular/core';
import {Card} from './card';
import {ProgressBar} from './progress-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'name-card';
  progressBar: ProgressBar = {
    backgroundColor: '#f44336',
    progressColor: '#00ff00',
    progress : 0,
  }
}
