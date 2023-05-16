import ApplicationController from 'frolfr/controllers/application';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UserController extends ApplicationController {
  @tracked showRounds = true;
  @tracked showFavorites = false;

  @action
  toggleRounds() {
    console.log(`showRounds: ${this.showRounds}`);
    console.log(`showFavorites: ${this.showFavorites}`);
    this.showRounds = true;
    this.showFavorites = false;
  }

  @action
  toggleFavorites() {
    console.log(`showRounds: ${this.showRounds}`);
    console.log(`showFavorites: ${this.showFavorites}`);
    this.showRounds = false;
    this.showFavorites = true;
  }
}
