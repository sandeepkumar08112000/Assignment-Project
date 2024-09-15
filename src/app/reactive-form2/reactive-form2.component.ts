import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { matchPassword } from './matchPassword';
import { AlertServiceService } from '../service/alert-service.service';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.scss']
})
export class ReactiveForm2Component implements OnInit {
  reactiveform!: FormGroup;
  nameReg=/^[A-Z].*/;
  emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  phoneReg = /^0|[1-9]\d*$/;
  PasswordReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,24}$/;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.reactiveform = this.fb.group({
      FullName: ['', [Validators.required, Validators.pattern(this.nameReg)]],
      Email: ['', [Validators.required, Validators.pattern(this.emailReg)]],
      Address: ['', Validators.required],
      City: ['', Validators.required],
      PhoneNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern(this.phoneReg)]],
      Password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24), Validators.pattern(this.PasswordReg)]],
      ConfirmPassword: ['', [Validators.required]],
      Terms: ['', Validators.required]
    },
      {
        validator: matchPassword('Password', 'ConfirmPassword')
      }
    )
  }
  SaveForm() {
  }
  get Control() {
    return this.reactiveform.controls;
  }
  getData(data: any) {
    console.log("Submitted Data", data.value);
  }
}
