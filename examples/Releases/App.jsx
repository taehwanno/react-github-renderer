/* eslint-disable no-unused-vars */

import React from 'react';
import ReactGithub, { Release } from 'react-github-renderer';

const render = () => (
  ReactGithub.render(
    <Release
      tagName="v1.0.0"
      targetCommitish="master"
      name="v1.0.0"
      draft
      prerelease={false}
    >
      - Update dependencies version (#15)
    </Release>
  )
);

export default render;
