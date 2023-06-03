import AppRoute from 'frolfr/routes/app';
import { inject as service } from '@ember/service';

export default class RoundRoute extends AppRoute {
  @service store;

  model(params) {
    return this.store.findRecord('round', params.round_id, {
      include: 'course,scorecards,scorecards,scorecards.turns,users'
    });
  }
}
