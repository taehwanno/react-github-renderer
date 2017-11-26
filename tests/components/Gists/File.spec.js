import React from 'react';

import ReactGithub, { File, Gist } from '../../../src';

describe('<File />', () => {
  it('should throw an error when rendered alone', () => {
    expect(() => {
      ReactGithub.render(<File />);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw an error when props.name not exist or not string', () => {
    expect(() => {
      ReactGithub.render((
        <Gist>
          <File />
        </Gist>
      ));
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw an error when props.children not exist or not string', () => {
    expect(() => {
      ReactGithub.render((
        <Gist>
          <File name="file.txt" />
        </Gist>
      ));
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw an error when the same props.name exist among <File />', () => {
    expect(() => {
      ReactGithub.render((
        <Gist>
          <File name="file.txt">contents</File>
          <File name="file.txt">contents</File>
        </Gist>
      ));
    }).toThrowErrorMatchingSnapshot();
  });

  it('should match snapshot with props.name and props.children', () => {
    expect(ReactGithub.render((
      <Gist>
        <File name="file1.txt">contents of file1.txt</File>
      </Gist>
    ))).toMatchSnapshot();
  });
});
