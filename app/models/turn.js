import Model, { attr, belongsTo } from '@ember-data/model';
import { sum, filterBy, mapBy, notEmpty } from '@ember/object/computed';

export default class TurnModel extends Model {
  @attr('number') strokes;
  @attr('number') par;
  @attr('string') holeNumber;
  @belongsTo('hole') hole;
  @belongsTo('scorecard') scorecard;

  @notEmpty('strokes') isPlayed;
}
