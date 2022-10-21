import { useState } from 'react';

import {Routes, Route} from 'react-router-dom'

import './App.css';
import Navbar from './components/navbar/navbar.component';
import MainPage from './routes/main/main-page.component';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem('theme') || 'false'
  )

  const handleThemeChange = () => {
    if(darkTheme === 'true'){
      setDarkTheme('false');
      localStorage.setItem('theme', 'false');
    } else {
      setDarkTheme('true');
      localStorage.setItem('theme', 'true');
    }
  }

  return(
    <div className='App'>
      <Routes>
        <Route path = '/' element = {<Navbar/>}>
          <Route index element = {<MainPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
