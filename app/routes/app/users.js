import AppRoute from 'frolfr/routes/app';
import { inject as service } from '@ember/service';

export default class UsersRoute extends AppRoute {
  model() {
    return this.store.findAll('user');
  }
}
