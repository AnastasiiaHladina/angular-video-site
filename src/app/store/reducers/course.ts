import { CourseState, initialCourseState } from '../states';
import { CourseActions, ECourseAction } from '../actions';
import { Course } from '../../enitities';

export function courseReducer(state = initialCourseState, action: CourseActions): CourseState {
  switch (action.type) {
    case ECourseAction.StartCoursesLoading:
    case ECourseAction.StartCourseAdding:
    case ECourseAction.StartCourseUpdating:
    case ECourseAction.StartCourseDeleting:
      return {
        ...state,
      };
    case ECourseAction.EndCoursesLoading:
      return {
        ...state,
        courses: action.payload,
      };
    case ECourseAction.EndCourseAdding:
      return {
        ...state,
        courses: [ ...state.courses, action.payload ],
      };
    case ECourseAction.EndCourseUpdating:
      const updateIndex = state.courses.findIndex((element: Course) => element.id === action.payload.id);
      state.courses[updateIndex] = action.payload;

      return {
        ...state,
        courses: state.courses,
      };
    case ECourseAction.IncreasePage:
      return {
        ...state,
        page: state.page + state.count,
      };
    case ECourseAction.ResetPage:
      return {
        ...state,
        page: 0,
      };
    case ECourseAction.Search:
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
}
