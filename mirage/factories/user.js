import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  avatarUrl: faker.image.avatar,
  firstName: faker.name.firstName,
  lastName: faker.name.lastName,
  email: faker.internet.email,
  userName: faker.internet.userName,
  city: faker.address.city,
  province: faker.address.stateAbbr,
  countryCode: faker.address.countryCode
});
