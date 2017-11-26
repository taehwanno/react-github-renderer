import GithubRenderer from './reconciler';

export const File = 'File';
export const Gist = 'Gist';
export const Release = 'Release';

const ReactGithub = {
  render: GithubRenderer.render,
};

export default ReactGithub;
