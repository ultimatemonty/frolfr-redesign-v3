// modals are not togglable with this version
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';

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
    this.filteredCourses = this.courses;
    this.filteredPlayers = this.players;
  }

  @action
  toggleCourseSelect() {
    this.showCourseSelect = !this.showCourseSelect;
  }

  @action
  togglePlayerSelect() {
    this.showPlayerSelect = !this.showPlayerSelect;
  }

  @action
  selectCourse(course) {
    this.selectedCourse = course;
    this.showCourseSelect = !this.showCourseSelect;
  }

  @action
  addPlayer(player) {
    this.selectedPlayers.pushObject(player);
  }

  @action
  removePlayer(player) {
    this.selectedPlayers = this.selectedPlayers.filter((p) => {
      return player.id !== p.id;
    });
  }

  @action
  clearSelectedCourse(event) {
    event.preventDefault();
    this.selectedCourse = null;
  }

  @action
  searchCourses(searchTerm) {
    if (isEmpty(searchTerm)) {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter((course) => {
        return course.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }

  @action
  searchPlayers(searchTerm) {
    if (isEmpty(searchTerm)) {
      this.filteredPlayers = this.players;
    } else {
      this.filteredPlayers = this.players.filter((player) => {
        return player.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  }

  @action
  async startRound() {
    // create the round first
    const now = new Date();
    let round = this.store.createRecord('round', {
      createdAt: now.toISOString(),
      players: this.selectedPlayers,
      course: this.selectedCourse,
    });
    await round.save();

    // now for each player in the round create a scorecard
    for (const player of this.selectedPlayers) {
      await this.store.createRecord('scorecard', {
        player: player,
        round: round,
      });
    }

    this.router.transitionTo('round', round);
  }
}
