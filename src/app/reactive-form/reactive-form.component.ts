import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  reactiveform!: FormGroup;
  constructor(private fb: FormBuilder) {
   }
  ngOnInit(): void {
    this.reactiveform = this.fb.group({
      FullName: [''],
      Email: [''],
      Address: [''],
      City: [''],
      PhoneNo: [''],
      Password: [''],
      ConfirmPassword: [''],
      Terms: [''],
    })
  }
  getData(data: any) {
    console.log("SubmitData", data.value);
  }
}
