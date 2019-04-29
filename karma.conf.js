module.exports = function(config) {
  const gluePath = 'node_modules/glue/releases/latest/';

  config.set({
    // Base path that will be used to resolve all patterns (eg. files, exclude)
    // relative to the location of karma.conf.js.
    basePath: '.',

    // Available frameworks: https://npmjs.org/browse/keyword/karma-adapter.
    frameworks: ['jasmine', 'closure'],

    // List of files / patterns to load in the browser.
    files: [
      // Closure stuffs.
      'node_modules/google-closure-library/closure/goog/base.js',
      {
        pattern: 'node_modules/google-closure-library/closure/goog/deps.js',
        included: false,
        served: false,
      },
      // Library dependencies e.g. Angular, Lodash
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-touch/angular-touch.js',
      'node_modules/angular-resource/angular-resource.js',

      // Glue library.
      gluePath +'cdn/dist/glue/glue-detect.min.js',
      gluePath +'cdn/dist/glue/glue.min.js',

      // The tests themselves.
      'src/**/*_test.js',
      // JavaScript sources.
      {
        pattern: 'src/**/*.js',
        included: false,
      },
    ],

    // Files to exclude.
    exclude: [
      'src/static/js/*.min.js',
    ],

    preprocessors: {
      // External deps.
      'node_modules/google-closure-library/closure/goog/deps.js':
          ['closure-deps'],
      // Source files are preprocessed for dependencies.
      'src/**/*.js': ['closure'],
    },

    // Test results reporter to use.
    // Possible values: 'dots', 'progress'
    // Available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],

    // Level of logging.
    // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG.
    logLevel: config.LOG_INFO,
    // Web server port.
    port: 9876,
    // Enable / disable colors in the output (reporters and logs).
    colors: true,

    // Continuous Integration mode. Enable / disable watching file and
    // executing tests whenever any file changes.
    singleRun: false,
    autoWatch: true,

    // Start these browsers.
    // Available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // Use 'Chrome' for a browser with a debuggable window.
    browsers: ['ChromeHeadless'],

    // Define custom flags.
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222'],
      },
    },

    failOnEmptyTestSuite: false,
  });
};
