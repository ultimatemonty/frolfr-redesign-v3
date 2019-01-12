import Route from '@ember/routing/route';

export default class CourseRoute extends Route {
  model(params) {
    return this.store.find('course', params.course_id);
  }
}
