import { GithubRoot, Gists, Releases } from '../components';

let root = null;

export function getHostContextNode(rootNode) {
  if (rootNode) {
    root = rootNode;
  } else {
    root = new GithubRoot();
  }

  return root;
}

export function createElement(type, props) {
  switch (type) {
    case 'Root':
      return new GithubRoot();
    case 'Gist':
      return new Gists.Gist(root, props);
    case 'File':
      return new Gists.File(root, props);
    case 'Release':
      return new Releases.Release(root, props);
    default:
      throw new Error(`Unknown Github element: ${type}`);
  }
}
