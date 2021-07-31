import Model, { attr, belongsTo } from '@ember-data/model';

export default class HoleModel extends Model {
  @attr('string') holeNumber;
  @attr('number') par;
  @belongsTo('course') course;
}
