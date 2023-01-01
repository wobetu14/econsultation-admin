import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { BrowserRouter, Link, Outlet, Route, RouterProvider, Routes  } from 'react-router-dom';

import { ColorModeContext, useMode, tokens } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/dashboard/global/Topbar';
import Sidebar from './scenes/dashboard/global/Sidebar';

import Dashboard from './scenes/dashboard';
import Contacts from './scenes/contacts/Contacts';
import Team from './scenes/team/Team';
import Calendar from './scenes/calendar/Calendar';
import Invoices from './scenes/invoice/Invoices';
import Form from './scenes/form/Form';
import Geography from './scenes/geography/Geography';
import Faq from './scenes/faq/Faq';
import Line from './scenes/line/Line';
import Pie from './scenes/pie/Pie';
import Bar from './scenes/bar/Bar';
// import SideBarTest from './scenes/dashboard/global/SideBarTest';


const languages=[
  {
    code:'en',
    name:'English',
    country_code:'English'
  },

  {
    code:'am',
    name:'አማርኛ',
    country_code:'Ethiopia'
  },
  {
    code:'oro',
    name:'Afan Oromo',
    country_code:'Ethiopia'
  },

  {
    code:'tg',
    name:'ትግርኛ',
    country_code:'Ethiopia'
  },
]

function App() {
  const currentLanguageCode=cookies.get('i18next') || 'en'
  const currentLanguage=languages.find(l=>l.code===currentLanguageCode)
  const { t } = useTranslation()

  const [theme, colorMode]=useMode();

  // Setup dynamic font-size changer
  const [fontSize, setFontSize]=useState(20);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
           <Sidebar />
          <main className='content' display="flex" justifyContent="space-between">
            <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>

              <Outlet />
          </main> 
        </div>
      </ThemeProvider>


     {/*  <div>
            <button onClick={()=>setFontSize(fontSize-1)}>A-</button>
            <button onClick={()=>setFontSize(fontSize+1)}>A+</button>
            <h3>Choose Language</h3>
              <ul style={{ listStyleType:'none', color:'#1DA1F2' }}>
                {languages.map(({code,name})=>(
                  <li key={code}>
                    <button 
                    onClick={()=>i18next.changeLanguage(code)}
                    disabled={code===currentLanguageCode}
                    >{name}</button>
                  </li>
                ))}
              </ul>
          </div>
          <h2 style={{ fontSize:`${fontSize}px` }}>{t('greeting')}</h2>
          <p style={{ fontSize:`${fontSize}px` }}>{t("gratitude_msg")}</p> */}

    </ColorModeContext.Provider>
    
  );
}



export default App;


