import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default class UserModel extends Model {
  @attr('string') avatarUrl;
  @attr('string') email;
  @attr('string') firstName;
  @attr('string') middleName;
  @attr('string') lastName;
  @attr('string') userName;
  @attr('string') city;
  @attr('string') province;
  @attr('string') countryCode;

  @computed('_fullNames')
  get name() {
    return this._fullNames.join(' ');
  }

  @computed('_fullNames')
  get initials() {
    return this._fullNames
      .map(function (name) {
        return name[0];
      })
      .join('');
  }

  @computed('_fullLocation')
  get location() {
    return this._fullLocation.join(', ');
  }

  @computed('city', 'province', 'countryCode')
  get _fullLocation() {
    return [this.city, this.province, this.countryCode].filter(Boolean);
  }

  @computed('firstName', 'middleName', 'lastName')
  get _fullNames() {
    return [this.firstName, this.middleName, this.lastName].filter(Boolean);
  }
}
