'use strict';

import './analytics.js';

/*
 * Sandbox App
 */

function App () {
  return {
    start
  };
};

/*
 * Functions
 */

function start () {
  console.log('🌳 Shoots Official');
  return this;
};

/*
 * Launch
 */

window.shoots.onReady(() => {
  let app = window.shoots.app = App().start();
});
