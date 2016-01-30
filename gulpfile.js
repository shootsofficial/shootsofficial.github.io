
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

gulp.task('deploy', function() {
  return gulp.src('./_site/**/*')
    .pipe(deploy({
      origin: 'https://github.com/shootsofficial/shootsofficial.github.io',
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

// Build jekyll site
gulp.task('build', ['jekyll build', 'minify','uglify']);

// Shortcut
gulp.task('default', ['build']);
