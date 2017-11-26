import GithubComponent from './GithubComponent';

class GithubRoot extends GithubComponent {
  constructor() {
    super();
    this.body = {};
  }

  render() {
    this.children.forEach((child) => { child.render(); });
    return this.body;
  }
}

export default GithubRoot;
