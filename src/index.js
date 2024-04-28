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
import HookReducer from "./useHooks/HookReducer";
import HookReducerUp from "./useHooks/HookReducerUp";
import HookReducerInit from "./useHooks/HookReducerInit";
import HookContext from "./useHooks/HookContext";
import MyThemeProvider from "./useHooks/MyThemeProvider";
import HookThemeButton from "./useHooks/HookThemeButton";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <StateEffect init={0}/>
        <HookTimer init={10}/>
        <HookEffect init={10}/>
        <HookRef/>
        <HookRefForward/>
        <HookCallbackRef/>
        <HookReducer init={0}/>
        <HookReducerUp init={0}/>
        <HookReducerInit init={0}/>
        <HookContext/>
        <MyThemeProvider>
            <HookThemeButton/>
        </MyThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
