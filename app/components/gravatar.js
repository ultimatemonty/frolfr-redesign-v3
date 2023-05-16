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
    let hash = md5(this.args.user.email).trim().toLowerCase();
    this.gravatarUrl = `${this.gravatarHost}/${hash}?s=${this.size}&d=retro`;
  }
}
