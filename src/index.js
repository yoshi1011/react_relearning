import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StateForm from "./basic/StateForm";
import StateFormUC from "./basic/StateFormUC";
import FormList from "./basic/FormList";
import FormCheckMulti from "./basic/FormCheckMulti";
import FormFile from "./basic/FormFile";
import StateNest from "./basic/StateNest";
import StateNestImmer from "./basic/StateNestImmer";
import StateNestImmer2 from "./basic/StateNestImmer2";
import StateTodo from "./basic/StateTodo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <StateForm/>
      <StateFormUC/>
      <FormList/>
      <FormCheckMulti/>
      <FormFile/>
      <StateNest/>
      <StateNestImmer/>
      <StateNestImmer2/>
      <StateTodo/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
