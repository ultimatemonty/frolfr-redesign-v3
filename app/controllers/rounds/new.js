// modals are not togglable with this version
import Controller from '@ember/controller';
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import { isEmpty } from '@ember/utils';
import moment from 'moment';

export default class NewRoundController extends Controller {
  @service store;
  @service router;

  players = null;
  courses = null;
  filteredCourses;
  filteredPlayers;

  selectedCourse = null;
  selectedPlayers = [];

  showCourseSelect = false;
  showPlayerSelect = false;

  constructor() {
    super(...arguments);
    this._fetchInitialData();
  }

  async _fetchInitialData() {
    this.players = await this.store.findAll('user');
    this.courses = await this.store.findAll('course', { include: 'holes' });
    this.set('filteredCourses', this.courses);
    this.set('filteredPlayers', this.players);
  }

  @action
  toggleCourseSelect() {
    this.toggleProperty('showCourseSelect');
  }

  @action
  togglePlayerSelect() {
    this.toggleProperty('showPlayerSelect');
  }

  @action
  selectCourse(course) {
    this.set('selectedCourse', course);
    this.toggleProperty('showCourseSelect');
  }

  @action
  addPlayer(player) {
    this.selectedPlayers.pushObject(player);

  }

  @action
  removePlayer(player) {
    this.set('selectedPlayers', this.selectedPlayers.filter(p => {
      return player.id !== p.id;
    }));
  }

  @action
  clearSelectedCourse(event) {
    event.preventDefault();
    this.set('selectedCourse', null);
  }

  @action
  searchCourses(searchTerm) {
    if (isEmpty(searchTerm)) {
      this.set('filteredCourses', this.courses);
    } else {
      this.set('filteredCourses', this.courses.filter(course => {
        return course.name.toLowerCase().includes(searchTerm.toLowerCase());
      }));
    }
  }

  @action
  searchPlayers(searchTerm) {
    if (isEmpty(searchTerm)) {
      this.set('filteredPlayers', this.players);
    } else {
      this.set('filteredPlayers', this.players.filter(player => {
        return player.name.toLowerCase().includes(searchTerm.toLowerCase());
      }));
    }
  }

  @action
  async startRound() {
    // create the round first
    let round = this.store.createRecord('round', {
      createdAt: moment.utc().format(),
      players: this.selectedPlayers,
      course: this.selectedCourse
    });
    await round.save();

    // now for each player in the round create a scorecard
    for (const player of this.selectedPlayers) {
      await this.store.createRecord('scorecard', {
        player: player,
        round: round
      });
    }

    this.router.transitionTo('round', round);
  }
}
