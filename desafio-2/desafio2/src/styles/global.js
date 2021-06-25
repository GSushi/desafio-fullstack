import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  html, body, #root {
     -webkit-font-smoothing: antialiased !important;
     font-family: 'Montserrat', sans-serif;
     width: 100%;
     height: 100%;
  }

  button {
    cursor : pointer;
  }

  .Toastify__toast {
    background: white;
    border: 1px solid #0aa84c;
    border-radius: 4px;
    color: #0aa84c;
  }

  .Toastify__progress-bar {
    background: #0aa84c;
  }
`;
