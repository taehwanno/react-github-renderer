import invariant from 'invariant';

import GithubComponent from '../GithubComponent';

class Release extends GithubComponent {
  constructor(root, props) {
    super();
    this.root = root;
    this.props = props;
  }

  render() {
    const body = this.root.body;
    const {
      tagName,
      targetCommitish = 'master',
      name,
      children = '',
      draft = false,
      prerelease = false,
    } = this.props;

    invariant(
      !!tagName && typeof tagName === 'string',
      'props.tagName must have with string type'
    );

    body.tag_name = tagName;
    body.target_commitish = targetCommitish;
    body.name = name || tagName;
    body.body = children;
    body.draft = draft;
    body.prerelease = prerelease;
  }
}

export default Release;
