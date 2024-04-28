import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StateEffect from "./useHooks/StateEffect";
import HookTimer from "./useHooks/HookTimer";
import HookEffect from "./useHooks/HookEffect";
import HookRef from "./useHooks/HookRef";
import HookRefForward from "./useHooks/HookRefForward";
import HookCallbackRef from "./useHooks/HookCallbackRef";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StateEffect init={0}/>
        <HookTimer init={10}/>
        <HookEffect init={10}/>
        <HookRef/>
        <HookRefForward/>
        <HookCallbackRef/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
