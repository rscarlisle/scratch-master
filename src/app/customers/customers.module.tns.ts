import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CustomerComponent } from '@src/app/customers/customer/customer.component';
import { CustomerAddComponent } from '@src/app/customers/customer-add/customer-add.component';
import { CustomerEditComponent } from '@src/app/customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from '@src/app/customers/customer-list/customer-list.component';



@NgModule({
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CustomersModule { }
