import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SliderFormattingExampleComponent } from './slider-formatting-example/slider-formatting-example.component';
import { TestComponent } from './structural-directives/test.component';
import { TemplateComponent } from './responsive-design/responsive/template.component';
import { EmployeeComponent } from './employee/employee.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexComponent } from './flex/flex.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'customers', 
    loadChildren: "../app/customers/customers.module#CustomersModule" 
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'flex', component: FlexComponent },
  { path: 'nav', component: MainNavComponent },
  { path: 'responsive', component: TemplateComponent },
  { path: 'slider', component: SliderFormattingExampleComponent },
  { path: 'test', component: TestComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
