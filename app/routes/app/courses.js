import AppRoute from 'frolfr/routes/app';
import { inject as service } from '@ember/service';

export default class CoursesRoute extends AppRoute {
  @service store;

  model() {
    return this.store.findAll('course');
  }
}
