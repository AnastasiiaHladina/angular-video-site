import { Action } from '@ngrx/store';
import { Course } from '../../enitities';

export enum ECourseAction {
  StartCoursesLoading = '[Courses Page] Start Courses Loading',
  EndCoursesLoading = '[Courses Page] End Courses Loading',
  StartCourseAdding = '[Courses Page] Start Course Adding',
  EndCourseAdding = '[Courses Page] End Course Adding',
  StartCourseUpdating = '[Courses Page] Start Course Updating',
  EndCourseUpdating = '[Courses Page] End Course Updating',
  StartCourseDeleting = '[Course Page] Start Course Deleting',
  IncreasePage = '[Course Page] Increase Page',
  ResetPage = '[Course Page] Reset Page',
  Search = '[Course Page] Search',
}

export class StartCoursesLoading implements Action {
  public readonly type = ECourseAction.StartCoursesLoading;
}

export class EndCoursesLoading implements Action {
  public readonly type = ECourseAction.EndCoursesLoading;

  constructor(public payload: Course[]) {}
}

export class StartCourseAdding implements Action {
  public readonly type = ECourseAction.StartCourseAdding;

  constructor(public payload: Course) {}
}

export class EndCourseAdding implements Action {
  public readonly type = ECourseAction.EndCourseAdding;

  constructor(public payload: Course) {}
}

export class StartCourseUpdating implements Action {
  public readonly type = ECourseAction.StartCourseUpdating;

  constructor(public payload: Course) {}
}

export class EndCourseUpdating implements Action {
  public readonly type = ECourseAction.EndCourseUpdating;

  constructor(public payload: Course) {}
}

export class StartCourseDeleting implements Action {
  public readonly type = ECourseAction.StartCourseDeleting;

  constructor(public payload: string) {}
}

export class IncreasePage implements Action {
  public readonly type = ECourseAction.IncreasePage;
}

export class ResetPage implements Action {
  public readonly type = ECourseAction.ResetPage;
}

export class Search implements Action {
  public readonly type = ECourseAction.Search;

  constructor(public payload: string) {}
}

export type CourseActions = StartCoursesLoading | EndCoursesLoading |
  StartCourseAdding | EndCourseAdding |
  StartCourseUpdating | EndCourseUpdating |
  StartCourseDeleting |
  IncreasePage | ResetPage | Search;
