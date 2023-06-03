import AppRoute from 'frolfr/routes/app';
import { inject as service } from '@ember/service';

export default class CourseRoute extends AppRoute {
  @service store;

  model(params) {
    return this.store.find('course', params.course_id);
  }
}
