/* eslint-disable no-console */

require('babel-register');
require('dotenv-safe').load();
const render = require('./App.jsx').default;
const r2 = require('r2');

const app = {
  async createRelease(body) {
    const owner = process.env.OWNER;
    const repo = process.env.REPOSITORY;

    try {
      const res = await r2.post(`https://api.github.com/repos/${owner}/${repo}/releases`, {
        headers: { Authorization: `token ${process.env.TOKEN}` },
        json: body,
      }).response;
      console.log(`${res.status}: ${res.statusText}`);
    } catch (error) {
      console.error(error);
    }
  },
};

app.createRelease(render());
