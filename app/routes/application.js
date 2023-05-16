import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;
  @service session;

  async beforeModel(transition) {
    await this.session.setup();
    if (!this.session.isAuthenticated) {
      this.router.transitionTo('signin');
    } else if (!transition) {
      this.router.transitionTo('app.home');
    }
  }

  @action
  activate() {
    this._super(...arguments);
    window.scrollTo(0,0);
  }
}
