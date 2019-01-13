import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  createdAt: faker.date.recent,
  course: association(),

  afterCreate(round, server) {

  }
});
