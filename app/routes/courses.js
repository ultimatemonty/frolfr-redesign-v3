import AppRoute from './app';

export default class CoursesRoute extends AppRoute {
  model() {
    return this.store.findAll('course');
  }
}
