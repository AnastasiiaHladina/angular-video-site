import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../enitities';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
})
export class CoursePageComponent implements OnInit {
  public course: Course;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.course = this.route.snapshot.data.course;
  }
}
