import GithubComponent from '../../src/components/GithubComponent';

describe('GithubComponent', () => {
  it('should initialize children with array in constructor', () => {
    const gc = new GithubComponent();
    expect(gc.children).toEqual([]);
  });

  it('should push parameter to children when appendChild executed', () => {
    const gc = new GithubComponent();
    gc.appendChild(1);
    gc.appendChild(2);
    gc.appendChild(3);
    expect(gc.children).toEqual([1, 2, 3]);
  });

  it('should remove child in children when removeChild executed', () => {
    const gc = new GithubComponent();
    gc.appendChild(1);
    gc.appendChild(2);
    gc.appendChild(3);
    gc.removeChild(1);
    expect(gc.children).toEqual([2, 3]);
  });
});
