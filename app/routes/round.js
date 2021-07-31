import Route from '@ember/routing/route';

export default class RoundRoute extends Route {
  model(params) {
    return this.store.findRecord('round', params.round_id, {
      include: 'scorecards,scorecards.player,course',
    });
  }
}
