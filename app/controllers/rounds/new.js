// modals are not togglable with this version
import Controller from '@ember/controller';
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';

export default class NewRoundController extends Controller {
  @service store;

  users = null;
  courses = null;

  selectedCourse = null;
  selectedUsers = [];

  showCourseSelect = false;
  showPlayerSelect = false;

  constructor() {
    super(...arguments);
    this._fetchInitialData();
  }

  async _fetchInitialData() {
    this.users = await this.store.findAll('user');
    this.courses = await this.store.findAll('course');
  }

  @action
  toggleCourseSelect() {
    this.toggleProperty('showCourseSelect');
  }

  @action
  togglePlayerSelect() {
    this.toggleProperty('showPlayerSelect');
  }
}
