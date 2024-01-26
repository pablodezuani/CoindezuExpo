import store from '././src/store'
import { Provider } from 'react-redux'
import Navigation from './src/Navigation';
import GlobalModal from "./src/shared/components/modal/globalModal/GlobalModal";


const App = () => {
 
  return (
    <Provider store={store}>
    <GlobalModal/>
      <Navigation/>
    </Provider>
    
  );  }

export default App;