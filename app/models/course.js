import DS from 'ember-data';
const { Model } = DS;
import { attr, hasMany } from '@ember-decorators/data';
import { computed } from '@ember-decorators/object';

export default class CourseModel extends Model {
  @attr('string') name;
  @attr('string') address;
  @attr('string') city;
  @attr('string') province;
  @attr('string') postalCode;
  @attr('string') countryCode;
  @attr('string') lat;
  @attr('string') lng;
  @attr('string') bannerImgUrl;
  @attr('number') par;

  @hasMany('hole') holes;

  @computed('_fullLocation')
  get location() {
    return this._fullLocation.join(', ');
  }

  @computed('city', 'province', 'countryCode')
  get _fullLocation() {
    return [
      this.city,
      this.province,
      this.countryCode
    ].filter(Boolean);
  }
}
