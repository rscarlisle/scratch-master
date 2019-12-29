import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {
  
  private _loggedIn: boolean;
  message: string;

  get loggedIn(): boolean {
    return this.loggedIn;
  }

  @Input()
  set loggedIn(value: boolean) {
    this._loggedIn = value;
    // console.log('value', this._loggedIn);
    if (value === true) {
      this.message = "Welcome back Randall";
    } else {
      this.message = "Please log in";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
