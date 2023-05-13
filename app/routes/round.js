import AppRoute from './app';

export default class RoundRoute extends AppRoute {
  model(params) {
    return this.store.findRecord('round', params.round_id, {
      include: 'scorecards,scorecards.player,course',
    });
  }
}
