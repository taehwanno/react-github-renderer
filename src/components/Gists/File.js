import invariant from 'invariant';

import GithubComponent from '../GithubComponent';
import { Gist } from '../Gists';

class File extends GithubComponent {
  constructor(root, props) {
    super();
    this.root = root;
    this.props = props;
  }

  render() {
    const files = this.root.body.files;
    const { children, name } = this.props;

    invariant(
      this.parent instanceof Gist,
      '<File /> can be only rendered within <Gist />'
    );

    invariant(
      name && typeof name === 'string',
      'props.name in <File /> must be required as string'
    );

    invariant(
      children && typeof children === 'string',
      'props.children in <File /> must be required as string'
    );

    invariant(
      !(name in files),
      'the same props.name is not allowed among <File />'
    );


    files[name] = { content: children };
  }
}

export default File;
