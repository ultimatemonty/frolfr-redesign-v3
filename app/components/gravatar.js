import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
import md5 from "blueimp-md5"

export default class GravatarComponent extends Component {
  @tracked gravatarUrl;

  size = 120;
  gravatarHost = "https://www.gravatar.com/avatar";

  @action
  loadGravatar() {
    // if (this.currentUser.user.gravatarUrl) {
      let hash = md5("chris@themccullers.com").trim().toLowerCase();
      this.gravatarUrl = `${this.gravatarHost}/${hash}?s=${this.size}`;
    // }
  }
}
