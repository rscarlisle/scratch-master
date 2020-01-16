import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent implements OnInit {

  // stackblitz for flex-layout
  booleanVariable = true;
  myToggle: boolean = true;
  checked: boolean;
  @Output() changed = new EventEmitter<boolean>();
  constructor() { }

  doToggle() {
    // alert(this.myToggle);
    let message = this.myToggle ? this.myToggle=false : this.myToggle=true; 
    alert("myToggle= " + message);
  }

  ngOnInit() {
  }

}
