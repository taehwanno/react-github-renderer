/* eslint-disable no-unused-vars */

import React from 'react';
import ReactGithub, { Gist, File } from 'react-github-renderer';

const render = () => ReactGithub.render(
  <Gist description="gist created by react-github-renderer" isPublic={false}>
    <File name="file.js">
      function fn() {}
    </File>
    <File name="file2.txt">
      contents of file2.txt
    </File>
  </Gist>
);

export default render;
