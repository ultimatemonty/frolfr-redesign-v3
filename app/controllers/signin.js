import ApplicationController from 'frolfr/controllers/application';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends ApplicationController {
  @service router;
  @service currentUser;

  @tracked errorMessage;
  @tracked username;
  @tracked password;

  @action
  async authenticate(e) {
    e.preventDefault();
    let { username, password } = this;
    try {
      await this.session.authenticate('authenticator:oauth2', username, password);
     } catch (response) {
      let responseBody = await response.json();
      this.errorMessage = responseBody.errors;
    }

    if (this.rememberMe) {
      this.session.store.cookieExpirationTime = 60 * 60 * 24 * 14;
    }

    if (this.session.isAuthenticated) {
      this.router.transitionTo('app.home');
    }
  }

  @action
  updateUsername(e) {
    this.username = e.target.value;
  }

  @action
  updatePassword(e) {
    this.password = e.target.value;
  }
}
