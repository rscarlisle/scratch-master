import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CustomerComponent } from '@src/app/customers/customer/customer.component';
import { CustomerAddComponent } from '@src/app/customers/customer-add/customer-add.component';
import { CustomerEditComponent } from '@src/app/customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from '@src/app/customers/customer-list/customer-list.component';

const customerRoutes: Routes = [
  { path: "", component: CustomerComponent }
];

@NgModule({
  declarations: [
    CustomerComponent, 
    CustomerAddComponent, 
    CustomerEditComponent, 
    CustomerListComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerRoutes)
  ]
})
export class CustomersModule { }
