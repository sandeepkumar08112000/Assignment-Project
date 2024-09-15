import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Employeeinfo1Component } from './employeeinfo1/employeeinfo1.component';
import { Employeeinfo2Component } from './employeeinfo2/employeeinfo2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employeeinfo3Component } from './employeeinfo3/employeeinfo3.component';
import { MouseoverDirective } from './directive/mouseover.directive';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { Employeeinfo4Component } from './employeeinfo4/employeeinfo4.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateForm2Component } from './template-form2/template-form2.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { MatchPasswordDirective } from './directive/match-password.directive';
import { LoginComponent } from './login/login.component';
import { ArrowComponent } from './arrow/arrow.component';
@NgModule({
  declarations: [
    AppComponent,
    Employeeinfo1Component,
    Employeeinfo2Component,
    Employeeinfo3Component,
    MouseoverDirective,
    HomeComponent,
    ContactComponent,
    ProductComponent,
    Employeeinfo4Component,
    TemplateFormComponent,
    ProductDetailsComponent,
    ErrorComponent,
    ReactiveFormComponent,
    TemplateForm2Component,
    ReactiveForm2Component,
    MatchPasswordDirective,
    LoginComponent,
    ArrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
