import ApplicationController from 'frolfr/controllers/application';

export default class RoundController extends ApplicationController {
  get players() {
    return this.model.scorecards.map((scorecard) => scorecard.player);
  }
}
