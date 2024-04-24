import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'appValidationErrors',
  standalone: true,
})
export class ValidationErrorsPipe implements PipeTransform {

  transform(errors: ValidationErrors | null | undefined): string {
    if (!errors) return "";

    const keys = Object.keys(errors);
    if (!keys.length) return "";

    const errorKey = keys[0];
    const messages: {[key:string]: string} = {
      'required' : 'This field is required.',
      'minlength' : 'Minimum length not met.',
      'maxlength' : 'Exceeded maximum length',
    };
    return messages[errorKey] || 'Validation error.' ;
  }

}
