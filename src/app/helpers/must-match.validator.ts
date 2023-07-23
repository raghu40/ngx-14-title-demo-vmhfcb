import { FormGroup } from '@angular/forms';

export function MustMatch(password,repassword) {
  return ( formGroup: FormGroup) => {
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[repassword];
    
    if(matchingControl.value &&  matchingControl.value) {
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
    

  }
}