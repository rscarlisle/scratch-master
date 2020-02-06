import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm;
  updateCustomer;
  constructor() { }

  ngOnInit() {
  }

}
