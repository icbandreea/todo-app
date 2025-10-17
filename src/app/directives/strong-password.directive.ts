import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if(!value) return null;
    
    const errors: any = {};

     errors.uppercase = /[A-Z]/.test(value) ? null : this.translate.instant('PASSWORD.UPPERCASE');
     errors.lowercase = /[a-z]/.test(value) ? null : this.translate.instant('PASSWORD.LOWERCASE');
     errors.number = /\d/.test(value) ? null : this.translate.instant('PASSWORD.NUMBER');
     errors.specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value) ? null : this.translate.instant('PASSWORD.SPECIAL_CHAR');
     errors.minLength = value.length >=8 ? null : this.translate.instant('PASSWORD.MIN_LENGTH');

    const failedRules = Object.values(errors).filter(Boolean);

    return failedRules.length ? {strongPassword : failedRules} : null;
  }

}
