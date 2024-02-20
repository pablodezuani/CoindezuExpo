import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Navigation from './src/Navigation';
import GlobalModal from "./src/shared/components/modal/globalModal/GlobalModal";


const App = () => {


  return (
    <Provider store={store}>
      <GlobalModal/>
      <Navigation/>
    </Provider>
  );
}

export default App;
