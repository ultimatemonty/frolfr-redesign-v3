import AppRoute from './app';

export default class UsersRoute extends AppRoute {
  model() {
    return this.store.findAll('user');
  }
}
