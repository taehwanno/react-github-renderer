class GithubComponent {
  constructor() {
    this.children = [];
  }

  appendChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }
}

export default GithubComponent;
