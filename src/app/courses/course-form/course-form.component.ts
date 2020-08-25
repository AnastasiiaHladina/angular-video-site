import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Author, Course, Genre } from '../../enitities';
import { isInvalid, isTouched, validateInputMaxlength, validateInputRequired } from '../../../helper';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFormComponent implements OnInit {
  @Input() pageTitle: string;
  @Input() course: Course;
  @Input() authorsList: Author[];
  @Input() genreList: Genre[];
  @Output() submitCourse = new EventEmitter<Course>();
  @Output() cancelEvent = new EventEmitter<void>();
  courseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      name: new FormControl( this.course.name, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl( this.course.description, [
        Validators.required,
        Validators.maxLength(500),
      ]),
      length: new FormControl( this.course.length, [
        Validators.required,
        Validators.pattern(/^[0-9]{1,3}$/),
      ]),
      date: new FormControl( this.course.date, [
        Validators.required,
      /*  Validators.pattern(/^[0-9]{4}-[0-9]{2}-[0-9]{2}/), */
      ]),
      authors: new FormControl( this.course.authors,
         Validators.required,
      ),
      genre: new FormControl( this.course.genre,
        Validators.required,
      ),
    });
  }

  onCourseFormSubmit() {
    this.submitCourse.emit({ ...this.course, ...this.courseForm.value });
  }

  cancel() {
    this.cancelEvent.emit();
  }

  onInputRequired(input) {
    return validateInputRequired(this.courseForm, input);
  }

  onInputMaxLength(input) {
    return validateInputMaxlength(this.courseForm, input);
  }

  isUntouched(name: string) {
    return !isTouched(this.courseForm, name);
  }

  isInvalidAndUntouched(name: string) {
    return isInvalid(this.courseForm, name) && !this.isUntouched(name);
  }

  getElementError(name: string) {
    return this.courseForm.get(name).errors;
  }
}
