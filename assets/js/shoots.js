'use strict';

function App () {
  return {
    start: function () {
      console.log('Shoots Official 🌳');
      return this;
    }
  };
};

function start () {
  window.shoots = App();
  return window.shoots.start();
}

function onReady (cb) {
  if (document.readyState === 'complete') {
    return cb();
  }

  document.addEventListener('DOMContentLoaded', cb, false);
};

onReady(function () {
  var app = start();
});
