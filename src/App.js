import React from 'react';

import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";

import './Components/css/comps.css';

//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <Comp1 />
        <hr />
        <Comp2 />
      </Provider>
    </div>
  );
}

export default App;
