import { FormGroup } from '@angular/forms';

export function getErrors(form: FormGroup, input: string) {
  return form.get(input).errors;
}

export function validateInputRequired(form: FormGroup, input: string) {
  return getErrors(form, input).required;
}

export function validateInputMinLength(form: FormGroup, input: string) {
  return getErrors(form, input).minlength;
}

export function validateInputMaxlength(form: FormGroup, input: string) {
  return getErrors(form, input).maxlength;
}

export function isTouched(form: FormGroup, input: string) {
  return form.get(input).touched;
}

export function isInvalid(form: FormGroup, input: string) {
  return form.get(input).invalid;
}
