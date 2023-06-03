import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { sum, filterBy, mapBy } from '@ember/object/computed';

export default class ScorecardModel extends Model {
  @belongsTo('user') user;
  @belongsTo('round', { async: false }) round;
  @hasMany('turn', { async: false }) turns;

  @attr('date') createdAt;

  @sum('_turnStrokes') total;
  @computed('_coursePar', 'total')
  get score() {
    const diff = this.get('total') - this.get('_coursePar');

    if (diff > 0) { return '+' + diff; }

    return diff;
  }

  @sum('_turnPars') _coursePar;
  @filterBy('turns', 'isPlayed') _playedTurns;
  @mapBy('_playedTurns', 'par') _turnPars;
  @mapBy('_playedTurns', 'strokes') _turnStrokes;
}
