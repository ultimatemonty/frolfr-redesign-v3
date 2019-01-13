import DS from 'ember-data';
const { Model } = DS;
import { attr, belongsTo } from '@ember-decorators/data';

export default class HoleModel extends Model {
  @attr('string') holeNumber;
  @attr('number') par;
  @belongsTo('course') course;
}
