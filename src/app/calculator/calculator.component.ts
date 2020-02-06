import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result: string = 'xyz';
  longButtons: string[] = ['AC', 'CE'];
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'];
  
  private preValue: string = '';
  private curValue: string = '';


  addToExpression(value: string) {
    var prop = value;
    // this.result = value;
    if (this.result != '') {
      this.preValue = this.curValue;
      this.curValue = value;
    }

    if ( value == 'AC') {
      // clear input field
      this.result = '';
    } else if ( value == 'CE' ) {
      // delete last char in input field
      // console.log('I was clicked!');
      this.result = this.preValue != '=' ? 
        this.result.slice(0, -1) : this.result;
    } else if ( value ==  '=') {
      console.log('evaluate result: ', this.result);
      this.result = this.result;
    } else {
      this.result += value;
      console.log('equal sign: ', value); 
    }
  }

}

  // btn9; 
  // btn8;
  // btn7;
  // btn6;
  // btn5;
  // btn4;
  // btn3;
  // btn2;
  // btn1;
  // btn0;
  // addbtn;
  // subbtn;
  // multbtn;
  // pointbtn;
  // equalbtn;
  // dividebtn;

