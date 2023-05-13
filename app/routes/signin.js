import ApplicationRoute from 'frolfr/routes/application';

export default class LoginRoute extends ApplicationRoute {
  beforeModel(transition) {
    this.session.prohibitAuthentication('app.home');
  }
}
