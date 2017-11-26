import React from 'react';

import ReactGithub, { Release } from '../../../src';

describe('<Release />', () => {
  it('should throw an error when props.tagName not exist or not string', () => {
    expect(() => {
      ReactGithub.render(<Release />);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should match snapshot', () => {
    expect(ReactGithub.render(<Release tagName="v1.0.0" />)).toMatchSnapshot();
  });

  it('should have target_commitish with props.targetCommitish', () => {
    const targetCommitish = 'production';
    const result = ReactGithub.render(<Release tagName="v1.0.0" targetCommitish={targetCommitish} />);
    expect(result.target_commitish).toBe(targetCommitish);
  });

  it('should have name with props.name', () => {
    const name = 'Major release';
    const result = ReactGithub.render(<Release tagName="v1.0.0" name={name} />);
    expect(result.name).toBe(name);
  });

  it('should have result with props.children', () => {
    const children = 'The first release';
    const result = ReactGithub.render(<Release tagName="v1.0.0">{children}</Release>);
    expect(result.body).toBe(children);
  });

  it('should have draft with props.draft', () => {
    const draft = true;
    const result = ReactGithub.render(<Release tagName="v1.0.0" draft={draft} />);
    expect(result.draft).toBe(draft);
  });

  it('should have prerelease with props.prerelease', () => {
    const prerelease = true;
    const result = ReactGithub.render(<Release tagName="v1.0.0" prerelease={prerelease} />);
    expect(result.prerelease).toBe(prerelease);
  });
});
