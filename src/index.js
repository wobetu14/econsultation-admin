import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import i18n from "i18next";
import {initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'; 

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','am','oro','tg'],
    fallbackLng: "en",
    detection:{
      order: ['cookie', 'localStorage', 'path', 'subdomain'],
      caches:['cookie','localStorage']
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',  
    },
    react:{
      useSuspense:false
    }
  });

  const loadingMarkup=()=>{
    return(
      <h2>
         Loading...
      </h2>
    )
  }

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={loadingMarkup}>
      <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
    </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
