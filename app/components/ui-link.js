import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  href: computed('args.[]', function () {
    return this.router.urlFor(...this.args);
  }),

  isActive: computed('args.[]', 'router.currentURL', function () {
    return this.router.isActive(...this.args);
  }),

  actions: {
    transitionTo() {
      this.router.transitionTo(...this.args);
    },
  },
}).reopenClass({
  positionalParams: 'args',
});
