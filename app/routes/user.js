import AppRoute from './app';

export default class UserRoute extends AppRoute {
  model(params) {
    return this.store.find('user', params.user_id);
  }
}
