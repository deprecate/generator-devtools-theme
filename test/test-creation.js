/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

describe('devtools-theme generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('devtools-theme:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.,
      '.editorconfig',
      'devtools.html',
      'devtools.js',
      'manifest.json',
      'styles.css',
    ];

    helpers.mockPrompt(this.app, {
      'themeName': true
    });

    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });

  });
});
