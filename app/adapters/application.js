import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
import config from 'frolfr/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;
  host = config.apiHost;
  namespace = config.apiNamespace;
  useFetch = true;

  get headers() {
    let headers = {};
    if (this.session.get('isAuthenticated')) {
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.access_token}`
    }

    return headers;
  }

  handleResponse(status) {
    if (status === 401 && this.session.get('isAuthenticated')) {
      this.session.invalidate();
    }
    return super.handleResponse(...arguments);
  }
}
