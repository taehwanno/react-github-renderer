import { GithubRoot, Gists, Releases } from '../../src/components';
import { createElement, getHostContextNode } from '../../src/utils/createElement';

describe('getHostContextNode', () => {
  it('should return GithubRoot instance', () => {
    expect(getHostContextNode()).toEqual(new GithubRoot());
  });

  it('should return rootNode', () => {
    const rootNode = new GithubRoot();
    expect(getHostContextNode(rootNode)).toEqual(rootNode);
  });
});

describe('createElement', () => {
  const root = new GithubRoot();
  it('should return GithubRoot instance', () => {
    expect(createElement('Root')).toEqual(new GithubRoot());
  });

  it('should return Gist instance', () => {
    const props = {};
    const element = createElement('Gist', props);
    expect(element).toEqual(new Gists.Gist(root, props));
    expect(element instanceof Gists.Gist).toBe(true);
  });

  it('should return File instance', () => {
    const props = {};
    const element = createElement('File', props);
    expect(element).toEqual(new Gists.File(root, props));
    expect(element instanceof Gists.File).toBe(true);
  });

  it('should return Release instance', () => {
    const props = {};
    const element = createElement('Release', props);
    expect(element).toEqual(new Releases.Release(root, props));
    expect(element instanceof Releases.Release).toBe(true);
  });

  it('should throw an error when unknown type is passed', () => {
    expect(() => { createElement(''); }).toThrow();
  });
});
