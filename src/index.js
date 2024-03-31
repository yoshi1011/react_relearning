import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StyledBasic from "./componentDev/StyledBasic";
import StyleDynamic from "./componentDev/StyleDynamic";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <h3>StyledJSXの基本</h3>
        <StyledBasic/>
        <StyleDynamic theme={{
            radius: true,
            color: 'royalblue'
        }} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
