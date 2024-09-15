import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Employeeinfo2Component } from './employeeinfo2/employeeinfo2.component';
import { Employeeinfo1Component } from './employeeinfo1/employeeinfo1.component';
import { Employeeinfo3Component } from './employeeinfo3/employeeinfo3.component';
import { Employeeinfo4Component } from './employeeinfo4/employeeinfo4.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateForm2Component } from './template-form2/template-form2.component';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'employeeinfo1', component: Employeeinfo1Component },
  { path: 'employeeinfo2', component: Employeeinfo2Component },
  { path: 'employeeinfo3', component: Employeeinfo3Component },
  { path: 'employeeinfo4', component: Employeeinfo4Component },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'template-form2', component: TemplateForm2Component },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'reactive-form2', component: ReactiveForm2Component },
  { path: 'login', component: LoginComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
