import { createElement } from '../utils/createElement';
import GithubRenderer from './renderer';

function render(element) {
  const container = createElement('Root');

  const node = GithubRenderer.createContainer(container);
  GithubRenderer.updateContainer(element, node, null);

  return container.render();
}

export default { render };
