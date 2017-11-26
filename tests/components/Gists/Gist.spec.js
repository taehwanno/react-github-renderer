import React from 'react';

import ReactGithub, { File, Gist } from '../../../src';

describe('<Gist />', () => {
  it('should match snapshot when render default', () => {
    expect(ReactGithub.render(<Gist />)).toMatchSnapshot();
  });

  it('should have description with props.description', () => {
    const description = 'Description of gist';
    const result = ReactGithub.render(<Gist description={description} />);
    expect(result.description).toBe(description);
  });

  it('should have public with props.isPublic', () => {
    const isPublic = false;
    const result = ReactGithub.render(<Gist isPublic={isPublic} />);
    expect(result.public).toBe(isPublic);
  });

  it('should render <File /> in children', () => {
    expect(ReactGithub.render((
      <Gist>
        <File name="file1.txt">contents of file1.txt</File>
        <File name="file2.txt">contents of file2.txt</File>
        <File name="file3.txt">contents of file3.txt</File>
      </Gist>
    ))).toMatchSnapshot();
  });
});
