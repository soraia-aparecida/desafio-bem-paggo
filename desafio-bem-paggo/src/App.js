import { createGlobalStyle } from 'styled-components'
import Router from './router/Router';
import React from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Times New Roman" !important;
    button{
      cursor: pointer;
    }
  }`

const App = () =>{
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
