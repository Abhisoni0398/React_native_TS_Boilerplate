import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Routes from './src/Navigation/Routes';
import store from './src/redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};


export default App;
