import Model, { belongsTo, hasMany } from '@ember-data/model';

export default class ScorecardModel extends Model {
  @belongsTo('user') player;
  @belongsTo('round') round;
  @hasMany('turn') turns;
}
