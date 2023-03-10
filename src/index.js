import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "../src/redux/Store";
import {Provider} from "react-redux";
import React, { Suspense } from 'react';
import FallbackUi from './react/components/FallbackUi';

const App = React.lazy(() => import('./App'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<FallbackUi />} >
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
