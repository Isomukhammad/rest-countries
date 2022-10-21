import { useEffect, useState } from 'react';

import {Routes, Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/navbar/navbar.component';
import MainPage from './routes/main/main-page.component';

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  const handleThemeChange = () => {
    if(theme === 'light'){
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [])

  return(
    <div className={`App ${theme}`}>
      <Routes>
        <Route path = '/' element = {<Navbar handleThemeChange = {handleThemeChange} theme = {theme}/>}>
          <Route index element = {<MainPage theme = {theme}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
