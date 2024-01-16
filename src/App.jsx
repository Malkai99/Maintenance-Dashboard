import { useState, useEffect } from 'react';
import './App.css'
import DashboardContent from './componets/Dashboard/DashboardContent';
import DashboardHeader from './componets/Dashboard/DashboardHeader';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  return (
    <div className={`App w-full h-screen flex flex-col bg-white-smoke ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      {/* <header className="App- relative bg-white-smoke">
        <Header />
      </header> */}
      <section className=' block relative w-full h-full lg:px-20 md:px-10 px-5' >
        <DashboardHeader />
        <DashboardContent />
      </section>
    </div>
  )
}

export default App
