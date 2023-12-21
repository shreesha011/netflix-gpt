import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (

    //---In the body page imported login and Browser Page----
    //Used Provider-->It will Provide the Store to React Components
    <Provider store={appStore}>
         <Body/>
    </Provider>
   
  );
}

export default App;
