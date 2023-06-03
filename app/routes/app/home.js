import AppRoute from 'frolfr/routes/app';
import { inject as service } from '@ember/service';

export default class HomeRoute extends AppRoute {
  @service store;
  @service currentUser;

  model() {
    return this.store.query('round', {
      filter: {
        user_id: this.currentUser.user.id
      },
      include: 'course,scorecards,scorecards,scorecards.turns,users'
    });
  }
}
