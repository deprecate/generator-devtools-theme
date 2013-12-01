'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var DevtoolsThemeGenerator = module.exports = function DevtoolsThemeGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(DevtoolsThemeGenerator, yeoman.generators.Base);

DevtoolsThemeGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  console.log(this.yeoman);

  var prompts = [{
    name: 'themeName',
    message: 'What\'s the theme name?'
  }];

  this.prompt(prompts, function (props) {
    this.themeName = props.themeName;

    cb();
  }.bind(this));
};

DevtoolsThemeGenerator.prototype.app = function app() {
  this.copy('_manifest.json', 'manifest.json');
};

DevtoolsThemeGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('devtools.html', 'devtools.html');
  this.copy('devtools.js', 'devtools.js');
  this.copy('editorconfig', '.editorconfig');
  this.copy('styles.css', 'styles.css');
};
