import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appStrongPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: StrongPasswordDirective,
      multi: true
    }
  ]
})

export class StrongPasswordDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if(!value) return null;
    
    const errors: any = {};

     errors.uppercase = /[A-Z]/.test(value) ? null : 'An uppecase letter';
     errors.lowercase = /[a-z]/.test(value) ? null : 'A lowercase letter';
     errors.number = /\d/.test(value) ? null : 'A number' ;
     errors.specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value) ? null : 'A special character' ;
     errors.minLength = value.length >=8 ? null : 'At least 8 characters';

    const failedRules = Object.values(errors).filter(Boolean);

    return failedRules.length ? {strongPassword : failedRules} : null;
  }

}
