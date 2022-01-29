import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Redux
import {store} from './redux/configStore'
import {Provider} from 'react-redux'

import BaiTapOanTuXi from './BaiTapRedux/BaiTapOanTuXi/BaiTapOanTuXi';

// JSX
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BaiTapOanTuXi/>
      </Provider>
      
    </div>
  );
}

export default App;
