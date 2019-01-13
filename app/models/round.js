import DS from 'ember-data';
const { Model } = DS;
import { attr, belongsTo, hasMany } from '@ember-decorators/data';

export default class RoundModel extends Model {
  @attr('string') createdAt;
  @belongsTo('course') course;
  @hasMany('scorecard') scorecards;
}
