import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;
  @service session;

  async beforeModel() {
    await this.session.setup();
    if (this.session.isAuthenticated) {
      this.router.transitionTo('app.home');
    } else {
      this.router.transitionTo('signin');
    }
  }

  // @action
  // activate() {
  //   this._super(...arguments);
  //   window.scrollTo(0,0);
  // }
}
