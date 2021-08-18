import Controller from '@ember/controller';

export default class RoundController extends Controller {
  get players() {
    return this.model.scorecards.map((scorecard) => scorecard.player);
  }
}
