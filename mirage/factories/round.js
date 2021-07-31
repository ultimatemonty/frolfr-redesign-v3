import { Factory } from 'ember-cli-mirage';

import faker from 'faker';

export default Factory.extend({
  createdAt: faker.date.recent,

  afterCreate(round, server) {
    // let player = server.schema.users.find('1');
    // let course = server.schema.courses.find('1');
    // round = server.schema.rounds.find(round.id).update({
    //   course: course
    // });
    // server.create('scorecard', {
    //   player,
    //   round
    // });
  },
});
