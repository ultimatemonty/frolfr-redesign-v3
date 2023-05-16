import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CurrentUserService extends Service {
  @service session;
  @service store;

  @tracked user;

  async loadCurrentUser() {
    let userId = this.session.data.authenticated.user_id;
    if (userId) {
      let user = await this.store.findRecord('user', userId);
      this.user = user;
    }
  }
}
