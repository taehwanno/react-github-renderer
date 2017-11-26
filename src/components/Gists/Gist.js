import GithubComponent from '../GithubComponent';

class Gist extends GithubComponent {
  constructor(root, props) {
    super();
    this.root = root;
    this.props = props;
  }

  render() {
    const { description, isPublic } = this.props;
    const body = this.root.body;

    body.description = description || '';
    body.public = typeof isPublic === 'boolean' ? isPublic : true;
    body.files = {};

    this.children.forEach((child) => { child.render(); });
  }
}

export default Gist;
