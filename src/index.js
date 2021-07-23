import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// 컴포넌트 안에 리덕스를 주입한다
import { Provider } from 'react-redux'; 
import store from './store/index.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
