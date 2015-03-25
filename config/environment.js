/* jshint node: true */

module.exports = function(environment) {


  var ENV = {
    modulePrefix: 'dmr-rantly-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    'simple-auth': { crossOriginWhitelist: ['https://mercy-api.herokuapp.com'], authorizer: 'simple-auth-authorizer:devise'},
    'simple-auth-devise': { identificationAttributeName: 'email', serverTokenEndpoint: 'https://mercy-api.herokuapp.com/users/sign_in', authorizer: 'authorizer:devise' },
    adapterURL: process.env.ADAPTER_URL,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },


    contentSecurityPolicy: {
      'default-src': "'none'",
      'report-uri': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'  ",
      'font-src': "'self' https://fonts.gstatic.com https://fonts.googleapis.com",
      'connect-src': "'self' http://localhost:3000 http://localhost:3000/* https://mercy-api.herokuapp.com https://mercy-api.herokuapp.com/*",
      'img-src': "'self' http://www.gravatar.com",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'media-src': "'self'",
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
