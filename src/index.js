import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TitledPanel from "./TitledPanel";
import ListTemplate from "./ListTemplate";
import books from "./books";
import MyHello from "./MyHello";
import StateBasic from "./StateBasic";
import StateParent from "./StateParent";
import EventMouse from "./EventMouse";
import EventObj from "./EventObj";
import EventPoint from "./EventPoint";
import EventKey from "./EventKey";
import EventArgs from "./EventArgs";
import EventPropagation from "./EventPropagation";
import EventPassive from "./EventPassive";


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
