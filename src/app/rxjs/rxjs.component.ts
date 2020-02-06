import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from "rxjs";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  description = "Angular-Fire-Demo";
  
  itemValue = '';
  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
    // this.itemService.getItems().subscribe(items => {
    //   console.log('Show items...', items)
    // });
    
  }

  onSubmit() {
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = ''
  }

}
