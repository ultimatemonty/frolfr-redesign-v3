import Model, { attr, belongsTo } from '@ember-data/model';

export default class TurnModel extends Model {
  @attr('number') strokes;
  @belongsTo('hole') hole;
  @belongsTo('scorecard') scorecard;
}
