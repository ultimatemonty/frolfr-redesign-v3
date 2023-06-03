import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'
import md5 from "blueimp-md5"

const BASE_CLASSES = "rounded-full shadow-xl border-2 border-gray-500 border-opacity-70 p-1"
export default class GravatarComponent extends Component {
  @tracked gravatarUrl;
  @tracked classes;

  size = 120;
  gravatarHost = "https://www.gravatar.com/avatar";

  loadGravatar(user) {
    let hash = md5(user.email).trim().toLowerCase();
    this.gravatarUrl = `${this.gravatarHost}/${hash}?s=${this.size}&d=retro`;
  }

  computeClass(inline) {
    if (this.args.inline) {
      this.classes = `${BASE_CLASSES} inline-block`;
    } else {
      this.classes = BASE_CLASSES;
    }
  }

  @action
  didInsert() {
    this.loadGravatar(this.args.user);
    this.computeClass(this.args.inline);
  }
}
