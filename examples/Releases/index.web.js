/* eslint-disable no-console */

import render from './App'

const app = {
  createRelease(body) {
    console.log(body);
  }
};

app.createRelease(render());
