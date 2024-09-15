import { Directive } from '@angular/core';
import { FormControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMatchPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useClass: MatchPasswordDirective,
    multi: true
  }]

})
export class MatchPasswordDirective {

  constructor() { }
  validate(form: FormGroup): ValidationErrors | null {
    if (!form.controls['Password'] || !form.controls['ConfirmPassword']) {
      return null
    }
    if (form.controls['Password'].errors && form.controls['ConfirmPassword'].errors) {
      return null;
    }
    if (form.controls['Password'].value !== form.controls['ConfirmPassword'].value) {
      form.controls['ConfirmPassword'].setErrors({ matchPassword: true });
      return { matchPassword: true }
    }
    return null;
  }
}
