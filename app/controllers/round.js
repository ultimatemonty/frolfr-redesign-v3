import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default class RoundController extends Controller {
  @computed('model.scorecards.[]')
  get players() {
    return this.model.scorecards.map((scorecard) => scorecard.player);
  }
}
