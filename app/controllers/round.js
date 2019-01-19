import Controller from '@ember/controller';
import { computed } from '@ember-decorators/object';

export default class RoundController extends Controller {
  @computed('model.scorecards.[]')
  get players() {
    return this.model.scorecards.map(scorecard => scorecard.player);
  }
}
