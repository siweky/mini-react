import React from './React.js';

const ReactDOM = {
  createRoot(container) {
    return {
      render(APP) {
        React.render(APP, container);
      }
    }
  }
}

export default ReactDOM;