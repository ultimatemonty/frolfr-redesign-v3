import { inject as service } from '@ember/service';
import BaseSessionService from 'ember-simple-auth/services/session';

export default class SessionService extends BaseSessionService {
  @service currentUser;

  async handleAuthentication() {
    super.handleAuthentication(...arguments);

    this.currentUser.loadCurrentUser().catch(() => this.invalidate());
  }

  invalidate(data) {
    console.log('session:invalidate');
    super.invalidate(data);
  }
}
