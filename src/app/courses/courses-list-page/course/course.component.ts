import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../../enitities';
import { byDateStatus } from '../../../../helper';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() deleteCourse = new EventEmitter<string>();
  @Output() editCourse = new EventEmitter<string>();
  createdAt: number;
  isFreshCourse: boolean;
  ifWillBeReleasedCourse: boolean;
  ifDeleteCourse = false;

  ngOnInit(): void {
    this.createdAt = new Date(this.course.date).getTime() / 1000;
    const { isFreshCourse, ifWillBeReleasedCourse } = byDateStatus(this.createdAt);
    this.isFreshCourse = isFreshCourse;
    this.ifWillBeReleasedCourse = ifWillBeReleasedCourse;
  }

  deleteSelectedCourse(id: string) {
    this.deleteCourse.emit(id);
  }

  editSelectedCourse(id: string) {
    this.editCourse.emit(id);
  }

  changeDeleteVariable() {
    this.ifDeleteCourse = !this.ifDeleteCourse;
  }

  changeStar() {
    this.course.isTopRated = !this.course.isTopRated;
  }
}
