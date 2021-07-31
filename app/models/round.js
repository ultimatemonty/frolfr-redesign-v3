import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class RoundModel extends Model {
  @attr('string') createdAt;
  @belongsTo('course') course;
  @hasMany('scorecard') scorecards;
}
