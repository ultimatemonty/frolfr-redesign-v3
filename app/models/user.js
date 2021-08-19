import Model, { attr } from '@ember-data/model';

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

  get name() {
    return this._fullNames.join(' ');
  }

  get initials() {
    return this._fullNames
      .map(function (name) {
        return name[0];
      })
      .join('');
  }

  get location() {
    return this._fullLocation.join(', ');
  }

  get _fullLocation() {
    return [this.city, this.province, this.countryCode].filter(Boolean);
  }

  get _fullNames() {
    return [this.firstName, this.middleName, this.lastName].filter(Boolean);
  }
}
