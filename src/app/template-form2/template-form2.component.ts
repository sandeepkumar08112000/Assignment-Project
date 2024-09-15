import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form2',
  templateUrl: './template-form2.component.html',
  styleUrls: ['./template-form2.component.scss']
})
export class TemplateForm2Component implements OnInit {
  // model: any = {};
  nameReg=/^[A-Z].*/;
  emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  phoneNumberReg = /^0|[1-9]\d*$/;
  PasswordReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,24}$/;

  onSubmit(contact: any) {
    console.log("Submitted data.........", contact.value);
  }
  ngOnInit(): void {
  }
}
