import ApplicationRoute from 'frolfr/routes/application';

export default class AuthenticatedRoute extends ApplicationRoute {
  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'signin');
  }
}
