import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App.jsx';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



// function Componente({titulo,children}){
//   console.log(props);

//   const {titulo, contenido} = props
//   return (
//     <div className="contenedor">
//       <h1>{titulo}</h1>
//       <div>{children}</div>
//     </div>
//   );
// }

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);


