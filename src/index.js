import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TitledPanel from "./introductions/TitledPanel";
import ListTemplate from "./introductions/ListTemplate";
import books from "./introductions/books";
import MyHello from "./introductions/MyHello";
import StateBasic from "./introductions/StateBasic";
import StateParent from "./introductions/StateParent";
import EventMouse from "./introductions/EventMouse";
import EventObj from "./introductions/EventObj";
import EventPoint from "./introductions/EventPoint";
import EventKey from "./introductions/EventKey";
import EventArgs from "./introductions/EventArgs";
import EventPropagation from "./introductions/EventPropagation";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <MyHello myName={'test'}/>
      <TitledPanel>
        <p key="title">メンバー募集</p>
        <p key="body">ようこそ、プロジェクトへ</p>
      </TitledPanel>
      <ListTemplate src={books}>
        {elem => (
            <>
              <dt>
                <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg}`}>
                  {elem.title} ({elem.price}円)
                </a>
              </dt>
              <dd>{elem.summary}</dd>
            </>
        )}
      </ListTemplate>
      <StateBasic init={0}/>
      <StateParent/>
      <EventMouse alt='ロゴ画像' beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
                  afterSrc="https://www.web-deli.com/image/home_chara.gif"/>
      <EventArgs/>
      <EventObj/>
      <EventPoint/>
      <EventKey/>
      <EventPropagation/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
