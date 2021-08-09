/* eslint-disable ember/no-classic-components */
import Component, { action } from '@ember/component';
import { inject as service } from '@ember/service';

export default class UiLink extends Component {
  tagName = '';
  @service router;

  get href() {
    return this.router.urlFor(...this.args);
  }

  get isActive() {
    return this.router.isActive(...this.args);
  }

  @action
  transitionTo() {
    this.router.transitionTo(...this.args);
  }
}
