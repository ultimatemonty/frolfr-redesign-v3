import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service session;
  @service currentUser;
  @service router;

  @action
  async logout(e) {
    e.preventDefault();
    await this.session.invalidate();
    this.router.transitionTo('signin');
  }
}
