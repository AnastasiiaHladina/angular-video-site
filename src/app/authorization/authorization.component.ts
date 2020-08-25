import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getErrors, isInvalid, isTouched, validateInputMaxlength, validateInputMinLength, validateInputRequired } from '../../helper';
import { AuthStoreFacadeService } from '../services/facade/auth-store-facade.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
  singUpForm: FormGroup;

  constructor(private router: Router, private authStoreFacadeService: AuthStoreFacadeService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.singUpForm = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
    });
  }

  onLogin() {
    if (this.singUpForm.invalid) {
      alert('Error form'); return;
    }

    const { email: login, password } = this.singUpForm.value;
    this.authStoreFacadeService.login({ login, password });
  }

  onInputRequired(input) {
    return validateInputRequired(this.singUpForm, input);
  }

  onInputMinLength(input) {
    return validateInputMinLength(this.singUpForm, input);
  }

  onInputMaxLength(input) {
    return validateInputMaxlength(this.singUpForm, input);
  }

  isInvalidAndTouched(name: string): boolean {
    return isInvalid(this.singUpForm, name) && isTouched(this.singUpForm, name);
  }

  getElementErrors(name: string) {
    return getErrors(this.singUpForm, name);
  }
}
