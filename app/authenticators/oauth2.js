import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import config from 'frolfr/config/environment';

export default class OAuth2Authentication extends OAuth2PasswordGrant {
  serverTokenEndpoint = `${config.apiHost}/login`;
  // serverTokenRevocationEndpoint = `${config.apiHost}/revoke`;
};
