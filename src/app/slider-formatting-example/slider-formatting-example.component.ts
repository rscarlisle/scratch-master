import {coerceNumberProperty} from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-slider-formatting-example',
  templateUrl: './slider-formatting-example.component.html',
  styleUrls: ['./slider-formatting-example.component.css']
})
export class SliderFormattingExampleComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  private _tickInterval = 1;
  
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
