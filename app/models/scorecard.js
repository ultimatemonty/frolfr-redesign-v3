import DS from 'ember-data';
const { Model } = DS;
import { belongsTo } from '@ember-decorators/data';

export default class ScorecardModel extends Model {
  @belongsTo('user') player;
  @belongsTo('round') round;
}
