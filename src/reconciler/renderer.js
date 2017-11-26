import Reconciler from 'react-reconciler';

import { createElement, getHostContextNode } from '../utils/createElement';

/* eslint-disable no-unused-vars */

const isObject = p => (p !== null && typeof p === 'object');
const noop = () => {};

const GithubRenderer = Reconciler({
  appendInitialChild(parentInstance, child) {
    if (parentInstance.appendChild) {
      parentInstance.appendChild(child);
    }
    if (isObject(child)) {
      child.parent = parentInstance;
    }
  },

  createInstance(type, props, internalInstanceHandle) {
    return createElement(type, props);
  },

  createTextInstance(text, rootContainerInstance, internalInstanceHandle) {
    return text;
  },

  finalizeInitialChildren(element, type, props) {
    return false;
  },

  getPublicInstance(instance) {
    return instance;
  },

  prepareForCommit: noop,

  prepareUpdate(element, type, oldProps, newProps) {
    return true;
  },

  resetAfterCommit: noop,
  resetTextContent: noop,

  getRootHostContext(rootInstance) {
    return getHostContextNode(rootInstance);
  },

  getChildHostContext() {
    return {};
  },

  shouldSetTextContent(type, props) {
    return false;
  },

  now: Date.now,

  useSyncScheduling: true,

  mutation: {
    appendChild(parentInstance, child) {
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      }
      if (isObject(child)) {
        child.parent = parentInstance;
      }
    },

    appendChildToContainer(parentInstance, child) {
      if (parentInstance.appendChild) {
        parentInstance.appendChild(child);
      }
      if (isObject(child)) {
        child.parent = parentInstance;
      }
    },

    removeChild(parentInstance, child) {
      parentInstance.removeChild(child);
    },

    removeChildFromContainer(parentInstance, child) {
      parentInstance.removeChild(child);
    },

    insertBefore: noop,
    commitUpdate: noop,
    commitMount: noop,

    commitTextUpdate(textInstance, oldText, newText) {
      textInstance.children = newText;
    }
  }
});

export default GithubRenderer;
