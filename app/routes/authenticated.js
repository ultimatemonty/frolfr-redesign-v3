import ApplicationRoute from 'frolfr/routes/application';
import { inject as service } from '@ember/service';

export default class AuthenticatedRoute extends ApplicationRoute {
  @service session;
  @service currentUser;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'signin');
    return this.currentUser.loadCurrentUser().catch(() => this.session.invalidate());
  }
}
