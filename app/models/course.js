import DS from 'ember-data';
const { Model } = DS;
import { attr } from '@ember-decorators/data';

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
}
