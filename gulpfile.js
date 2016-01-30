
// This gulpfile works with Jekyll
// (SASS processed by Jekyll build)

// Dependencies
var gulp = require('gulp');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var eslint = eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var browserSync = require('browser-sync');
var deploy = require('gulp-gh-pages');
var cssnano = require('gulp-cssnano');
var privateConfig = require('./_private/config');

// Using a kraken fork
// My changes are upstream in a pull request
var kraken = require('./lib/gulp-kraken');
// var kraken = require('gulp-kraken');

// Empty the _site directory
gulp.task('clean', function () {
  return del('_site/**/*');
});

// Lint the JS
gulp.task('lint', function () {
  return gulp.src(['**/*.js',
      '!node_modules/**',
      '!_site/**'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Deploy to production
gulp.task('deploy:production', function() {
  return gulp.src('./_site/**/*')
    .pipe(deploy({
      remoteUrl: 'https://github.com/shootsofficial/shootsofficial.github.io',
      branch: 'master'
    }));
});

// Build _site directory
// Copy, process SASS, etc
gulp.task('jekyll build', ['clean'], shell.task([
  'jekyll build'
]));

// Serve _site directory
gulp.task('serve', shell.task([
  'jekyll serve'
]));

// Serve _site directory, production version
gulp.task('serve:production', ['build'], function() {
  browserSync.init(null, {
    server: {
      baseDir: './_site'
    }
  });
});

// HTML
gulp.task('minify', ['jekyll build'], function() {
  return gulp.src([
    '_site/**/*.html',
    '!_site/node_modules/**/*.html'])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('_site'));
});

// JavaScript
gulp.task('uglify', ['jekyll build'], function() {
  return gulp.src('_site/assets/js/shoots.js')
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/js'));
});

// CSS
gulp.task('cssnano', ['jekyll build'], function() {
  return gulp.src('_site/assets/css/main.css')
      .pipe(cssnano())
      .pipe(gulp.dest('_site/assets/css'));
});

// Images
gulp.task('kraken', ['jekyll build'], function () {
  if (!privateConfig.kraken) {
    console.log('--- Missing Kraken Config');
    console.log('--- Contact @jasonhargrove');
    return;
  }

  gulp.src('_site/assets/images/**/*.*')
    .pipe(kraken(privateConfig.kraken));
});

// Build jekyll site
gulp.task('build', ['jekyll build', 'minify', 'uglify', 'cssnano', 'kraken']);

// Shortcut
gulp.task('default', ['build']);
