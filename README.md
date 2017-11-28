# react-github-renderer [![Build Status](https://circleci.com/gh/taehwanno/react-github-renderer/tree/master.svg?style=shield&circle-token=08557fea8367bfc1b2a1d8b72a87eaad9dd12b67)](https://circleci.com/gh/taehwanno/react-github-renderer/tree/master) [![npm version](https://badge.fury.io/js/react-github-renderer.svg)](https://badge.fury.io/js/react-github-renderer)

> A react custom renderer for Github :octocat:

**Table of contents**

- [Installation](#installation)
- [Motivation](#motivation)
- [API](#api)
  - [Renderer](#renderer)
    - `ReactGithub.render(element)`
  - [Components](#components)
    - [Gists](#gists)
      - `<Gist description isPublic children />`
      - `<File name children />`
    - [Releases](#releases)
      - `<Release tagName targetCommitish name draft prerelease children />`
- [Examples](#examples)

# Installation

```bash
$ npm install --save react-github-renderer
```

Alternatively, using yarn.

```bash
$ yarn add react-github-renderer
```

# Motivation

Just for fun. I have wanted to look into react implementation (renderer, reconciler).

# API

## Renderer

- `ReactGithub.render(element)`

## Components

- ### Gists

```jsx
<Gist description isPublic>
  <File name children />
</Gist>
```

```jsx
<Gist description isPublic children />
```

- `description` (*String*): a description of the gist (Default: `''`)
- `isPublic` (*Boolean*): indicates whether the gist is public. (Default: `false`)

```jsx
<File name children />
```

- `name` (*String*, **Required**): name of file
- `children` (*String*, **Required**): contents of file

- ### Releases

```jsx
<Release tagName targetCommitish name draft prerelease children />
```

- `tagName` (*String*, **Required**): the name of the tag
- `targetCommitish` (*String*): the commitish value that determines where the Git tag is created from (Default: `master`)
- `name` (*String*): the name of the release
- `draft` (*Boolean*): `true` to create a draft (unpublished) release, `false` to create a published one. (Default: `false`)
- `prerelease` (*Boolean*): `true` to identify the release as a prerelease. `false` to identify the release as a full release. (Default: `false`)
- `children` (*String*): text describing the contents of the tag

# Examples

- ## [Gists](./examples/Gists/README.md)

```jsx
import React from 'react';
import ReactGithub, { Gist, File } from 'react-github-renderer';
import GithubClient from './GithubClient';

const gist = ReactGithub.render(
  <Gist description="gist created by react-github-renderer" isPublic={false}>
    <File name="file.js">
      function fn() {}
    </File>
    <File name="file2.txt">
      contents of file2.txt
    </File>
  </Gist>
);

GithubClient.createGist(gist);
```

- ## [Releases](./examples/Releases/README.md)

```jsx
import React from 'react';
import ReactGithub, { Release } from 'react-github-renderer';
import GithubClient from './GithubClient';

const release = ReactGithub.render(
  <Release
    tagName="v1.0.0"
    targetCommitish="master"
    name="v1.0.0"
    draft
    prerelease={false}
  >
    - Update dependencies version (#15)
  </Release>
);

GithubClient.createRelease(release);
```

# Thanks

- [@nitin42](https://github.com/nitin42): for [helpful tutorial](https://github.com/nitin42/Making-a-custom-React-renderer)
- [@iamdustan](https://github.com/iamdustan): for [tiny-react-renderer](https://github.com/iamdustan/tiny-react-renderer) with a brief implementation
- [@CentaurWarchief](https://github.com/CentaurWarchief): for inspiration from [react-slack-renderer](https://github.com/CentaurWarchief/react-slack-renderer)

# License

MIT © [Taehwan, No (taehwanno)](https://github.com/taehwanno)
