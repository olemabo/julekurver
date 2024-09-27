import { DefaultLayout } from './defaultLayout/defaultLayout';
import ReactDOM from 'react-dom';
import React from "react"; // this must be here
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <DefaultLayout />
  );
}

export default App;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);