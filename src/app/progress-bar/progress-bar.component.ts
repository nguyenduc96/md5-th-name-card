import {Component, Input, OnInit} from '@angular/core';
import {ProgressBar} from '../progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input()
  progressBar: ProgressBar = {};

  constructor() {
  }

  ngOnInit() {
    this.loading();
  }

  loading() {
    let v = setInterval(() => {
      this.progressBar.progress += 0.1;
      if (this.progressBar.progress >= 100) {
        clearInterval(v);
        this.progressBar.progressColor = 'white';
        this.progressBar.progressColor = 'white';
        this.progressBar.backgroundImage = 'url(https://d3.violet.vn/uploads/previews/document/0/970/313/feuerwerk_137.gif)';
      }
    }, 5);
  }
}
