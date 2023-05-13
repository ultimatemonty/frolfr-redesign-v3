import AppRoute from './app';

export default class CourseRoute extends AppRoute {
  model(params) {
    return this.store.find('course', params.course_id);
  }
}
