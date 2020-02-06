import {coerceNumberProperty} from '@angular/cdk/coercion';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
// import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scratch-master';

  // description = "Angular-Fire-Demo";
  
  // itemValue = '';
  items: Observable<any[]>;


  // constructor(public db: AngularFireDatabase) {
  //   this.items = db.list('items').valueChanges();
  //   // console.log('customers: ', this.customers)
  // }

  // pageHeader: string = "Employee Details!";

  // books = [
  //   {
  //     title: 'Awesome Novel 1',
  //     description: 'Short description of awesome novel'
  //   },
  //   {
  //     title: 'Awesome Novel 2',
  //     description: 'Short description of awesome novel'
  //   },
  //   {
  //     title: 'Awesome Novel 3',
  //     description: 'Short description of awesome novel'
  //   },
  //   {
  //     title: 'Awesome Novel 4',
  //     description: 'Short description of awesome novel'
  //   },
  //   {
  //     title: 'Awesome Novel 5',
  //     description: 'Short description of awesome novel'
  //   }
  // ]

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

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;
}
