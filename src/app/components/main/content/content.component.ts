import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  stateStatus: boolean;
  addClass: boolean;

  constructor() { }

  ngOnInit() {
    this.stateStatus = true;
    this.addClass = false;
  }

  watchInput(event) {

    if (event.target.value.length > 9 && !this.addClass) {
      this.addClass = true;
      this.stateStatus = !this.stateStatus;
    }

    if (event.target.value.length < 6) {
      this.addClass = false;
    }
  }

}
