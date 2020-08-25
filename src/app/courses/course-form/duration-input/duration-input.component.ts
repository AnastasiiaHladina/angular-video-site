import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { filter, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DurationInputComponent,
      multi: true,
    },
  ],
})
export class DurationInputComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() control: FormControl;

  onFormModelChange: (data: number) => void;
  onFormControlTouched: () => void;

  valueFormControl = new FormControl();
  private subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.valueFormControl.valueChanges
      .pipe(
        filter(() => Boolean(this.onFormModelChange)),
        tap((value: number) => {
          this.onFormModelChange(value);
        }),
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  registerOnChange(fn: any): void {
    this.onFormModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onFormControlTouched = fn;
  }

  writeValue(obj: number): void {
    this.valueFormControl.setValue(obj);
  }

  isInvalidAndTouched() {
    return this.control.invalid && this.control.touched;
  }
}
