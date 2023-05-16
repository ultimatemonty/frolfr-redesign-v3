import ApplicationRoute from 'frolfr/routes/application';

export default class LoginRoute extends ApplicationRoute {
  beforeModel() {
    this.session.prohibitAuthentication('app.home');
  }
}
