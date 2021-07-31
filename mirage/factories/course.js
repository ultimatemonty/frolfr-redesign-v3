import { Factory, trait } from 'ember-cli-mirage';

import faker from 'faker';

export default Factory.extend({
  name() {
    return faker.address.city();
  },
  address: faker.address.streetAddress,
  city() {
    return faker.address.city();
  },
  province: faker.address.stateAbbr,
  postalCode: faker.address.zipCode,
  countryCode: faker.address.countryCode,
  lat: faker.address.latitude,
  lng: faker.address.longitude,
  bannerImgUrl: faker.image.nature,

  withRounds: trait({
    afterCreate(course, server) {
      server.createList('round', 3, { course });
    },
  }),

  afterCreate(course, server) {
    let holes = server.createList('hole', 18, { course });
    let par = holes.reduce((a, b) => {
      if (a.attrs) {
        a = a.attrs.par;
      }
      return a + b.attrs.par;
    });
    server.schema.courses.find(course.id).update({ par: par });
  },
});
