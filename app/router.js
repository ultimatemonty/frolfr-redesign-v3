import EmberRouter from '@ember/routing/router';
import config from 'frolfr/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('app', function() {
    this.route('home', { path: '/home' });
    this.route('courses');
    this.route('course', { path: '/courses/:course_id' });
    this.route('users');
    this.route('user', { path: '/profile/:user_id' });
    this.route('rounds');
    this.route('rounds.new', { path: '/rounds/new' });
    this.route('round', { path: '/rounds/:round_id' });
  });
  this.route('signin');
});
