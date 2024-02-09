import './App.css'

import DashboardContent from './componets/Dashboard/DashboardContent';
import DashboardHeader from './componets/Dashboard/DashboardHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GlobalStateProvider } from './componets/hooks/useGlobalState'

const queryClient = new QueryClient()

function App() {
  // const [isDarkMode, setIsDarkMode] = useState(false);
  // const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // useEffect(() => {
  //   const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   setIsDarkMode(prefersDarkMode);
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStateProvider>
        <div className={`App w-full  xl:h-screen flex flex-col bg-white-smoke ${false ? 'theme-dark' : 'theme-light'}`}>
          {/* <header className="App- relative bg-white-smoke">
            <Header />
          </header> */}
          <section className=' block relative w-full h-full lg:px-20 md:px-10 px-5' >
            <DashboardHeader />
            <DashboardContent />
          </section>
        </div>
      </GlobalStateProvider>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools/>}
    </QueryClientProvider>
  )
}

export default App
