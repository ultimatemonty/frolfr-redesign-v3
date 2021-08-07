'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() === 'production';
const autoprefixer = require('autoprefixer');
const postcssimport = require('postcss-import');
const tailwind = require('tailwindcss');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: postcssimport,
            options: {
              path: ['node_modules']
            }
          },
          {
            module: tailwind,
            options: {
              config: './app/tailwind.config.js'
            }
          }
        ]
      },
      filter: {
        enabled: true,
        plugins: [
          {
            module: autoprefixer,
            options: {
              browsers: ['last 2 versions']
            }
          }
        ]
      }
    }
  });
  return app.toTree();
};