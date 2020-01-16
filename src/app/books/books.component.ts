import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books = [
    {
      title: 'Awesome Novel 1',
      description: 'Short description of awesome novel'
    },
    {
      title: 'Awesome Novel 2',
      description: 'Short description of awesome novel'
    },
    {
      title: 'Awesome Novel 3',
      description: 'Short description of awesome novel'
    },
    {
      title: 'Awesome Novel 4',
      description: 'Short description of awesome novel'
    },
    {
      title: 'Awesome Novel 5',
      description: 'Short description of awesome novel'
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
