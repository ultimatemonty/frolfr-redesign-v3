export default function(server) {
  let course = server.create('course');
  let player = server.create('user');
  let round = server.create('round', { course });
  let scorecard = server.create('scorecard', { round, player });
}
