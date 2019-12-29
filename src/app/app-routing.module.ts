import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SliderFormattingExampleComponent } from './slider-formatting-example/slider-formatting-example.component';
import { TestComponent } from './structural-directives/test.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'slider', component: SliderFormattingExampleComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
