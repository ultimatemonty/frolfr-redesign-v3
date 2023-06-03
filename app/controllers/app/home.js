import ApplicationController from 'frolfr/controllers/application';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class HomeController extends ApplicationController {
  @tracked showRounds = true;
  @tracked showFeed = false;
  @tracked playerScorecards;
  @service currentUser;

  @action
  toggleRounds() {
    console.log(`showRounds: ${this.showRounds}`);
    console.log(`showFeed: ${this.showFeed}`);
    this.showRounds = true;
    this.showFeed = false;
  }

  @action
  toggleFeed() {
    console.log(`showRounds: ${this.showRounds}`);
    console.log(`showFeed: ${this.showFeed}`);
    this.showRounds = false;
    this.showFeed = true;
  }
}
