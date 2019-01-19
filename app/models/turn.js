import DS from 'ember-data';
import { attr, belongsTo } from '@ember-decorators/data';
const { Model } = DS;

export default class TurnModel extends Model {
  @attr('number') strokes;
  @belongsTo('hole') hole;
  @belongsTo('scorecard') scorecard;
}
