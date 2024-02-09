import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Navigation from './src/Navigation';
import GlobalModal from "./src/shared/components/modal/globalModal/GlobalModal";
import { initialize } from 'react-native-clarity';

const App = () => {
  initialize("kypa67py6r"); // Código de Clarity

  return (
    <Provider store={store}>
      <GlobalModal/>
      <Navigation/>
    </Provider>
  );
}

export default App;
