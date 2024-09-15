import { FormGroup } from "@angular/forms";
export function matchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
        const Password = formGroup.controls[password];
        const ConfirmPassword = formGroup.controls[confirmPassword];
        if (ConfirmPassword.errors && !ConfirmPassword.errors['MatchPassword']) {
            return
        }
        if (Password.value !== ConfirmPassword.value) {
            ConfirmPassword.setErrors({MatchPassword:true});
        }
        else {
            ConfirmPassword.setErrors(null);
        }
    }
}