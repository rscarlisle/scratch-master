import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AngularFireModule } from "@angular/fire";
// import { environment } from '@src/environments/environment';

// import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
// import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFireDatabaseModule } from "@angular/fire/database";
// import { AngularFireFunctionsModule } from "@angular/fire/functions";
// import { AngularFirestoreModule } from "@angular/fire/firestore";
// import { AngularFireRemoteConfigModule } from "@angular/fire/remote-config";
// import { AngularFireStorageModule } from "@angular/fire/storage";
// import { AngularFireMessagingModule } from "@angular/fire/messaging";
// import { AngularFirePerformanceModule } from "@angular/fire/performance";

import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from '@src/app/app-routing.module';
// import { AppRoutingModule } from './app-routing.module.tns';
// import { BarcelonaModule } from './barcelona/barcelona.module';

import { AppComponent } from '@src/app/app.component';
import { PageNotFoundComponent } from '@src/app/page-not-found/page-not-found.component';
import { HomeComponent } from '@src/app/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SliderFormattingExampleComponent } from '@src/app/slider-formatting-example/slider-formatting-example.component';

import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { TestComponent } from '@src/app/structural-directives/test.component';
import { ChildComponent } from '@src/app/structural-directives/child.component';
import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';
import { TemplateComponent } from '@src/app/responsive-design/responsive/template.component';
import { EmployeeComponent } from '@src/app/employee/employee.component';
import { MainNavComponent } from '@src/app/main-nav/main-nav.component';
import { BooksComponent } from '@src/app/books/books.component';
import { DashboardComponent } from '@src/app/dashboard/dashboard.component';
import { FlexComponent } from '@src/app/flex/flex.component';
import { TodoComponent } from '@src/app/todo/todo.component';
import { NavbarComponent } from '@src/app/navbar/navbar.component';
import { CalculatorComponent } from '@src/app/calculator/calculator.component';
import { CoursesComponent } from '@src/app/courses/courses.component';
import { CourseDetailComponent } from '@src/app/course-detail/course-detail.component';
import { CustomersModule } from "@src/app/customers/customers.module";
import { RxjsComponent } from '@src/app/rxjs/rxjs.component';
import { ReactiveFormComponent } from '@src/app/forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from '@src/app/forms/template-form/template-form.component';
import { BasicFormComponent } from '@src/app/forms/reactive-form/basic-form/basic-form.component';
import { SubmitFormComponent } from '@src/app/forms/reactive-form/submit-form/submit-form.component';
import { ValidFormComponent } from '@src/app/forms/reactive-form/valid-form/valid-form.component';
import { ArrayFormComponent } from '@src/app/forms/reactive-form/array-form/array-form.component';
import { NestedFormComponent } from '@src/app/forms/reactive-form/nested-form/nested-form.component';
import { AsyncOperationsComponent } from '@src/app/async-operations/async-operations.component';
// import { ToggleButtonComponent } from './toggle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    SliderFormattingExampleComponent,
    TestComponent,
    ChildComponent,
    AutoGeneratedComponent,
    TemplateComponent,
    EmployeeComponent,
    MainNavComponent,
    BooksComponent,
    DashboardComponent,
    FlexComponent,
    TodoComponent,
    NavbarComponent,
    CalculatorComponent,
    CoursesComponent,
    CourseDetailComponent,
    RxjsComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    BasicFormComponent,
    SubmitFormComponent,
    ValidFormComponent,
    ArrayFormComponent,
    NestedFormComponent,
    AsyncOperationsComponent
  ],
  imports: [
    // BarcelonaModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FlexLayoutModule,
    FormsModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    StoreModule.forRoot({}),
    CustomersModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firebase, "scratch-master"),
    // AngularFireAnalyticsModule,
    // AngularFireAuthModule,
    // AngularFireDatabaseModule,
    // AngularFireFunctionsModule,
    // AngularFirestoreModule,
    // AngularFireRemoteConfigModule,
    // AngularFireStorageModule,
    // AngularFireMessagingModule,
    // AngularFirePerformanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
