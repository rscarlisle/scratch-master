import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: [
    '/src/app/responsive-design/css/reset.css',
    './template.component.css',
  ]
})
export class TemplateComponent implements OnInit {
  name:string = "Randall Carlisle";
  constructor() { }

  ngOnInit() {
  }

}
