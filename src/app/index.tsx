import React from 'react';

import ReactDOM from 'react-dom';

import { App } from './App';
import { RootStoreContext } from './hooks/use-store';
import { rootStore } from './store/rootStore';

ReactDOM.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={rootStore}>
      <App />
    </RootStoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
