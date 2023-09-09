import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import DarkMode from "./Components/darkMode";
import Preloader from './Components/Preloader';

function App() {

  const [darkMode, setDarkMode] = useState(true)

  const DarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={ darkMode ? "App bg-light text-dark w-full min-h-screen duration-500"  : "App bg-dark text-light w-full min-h-screen duration-500" }>
      <Preloader/>
      <Home darkMode={darkMode}/>
      <DarkMode DarkModeToggle={DarkModeToggle}/>
    </div>
  );
}

export default App;
