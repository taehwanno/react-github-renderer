/* eslint-disable no-console */

import render from './App';

const app = {
  createGist(body) {
    console.log(body);
  }
};

app.createGist(render());
