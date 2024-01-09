import Header from './componets/Header/index'
import DashboardContent from './componets/Dashboard/DashboardContent';
import DashboardHeader from './componets/Dashboard/DashboardHeader';

function App() {
  return (
    <div className="App w-full h-full flex flex-col">
      {/* <header className="App- relative">
        <Header />
      </header> */}
      <section className=' block relative w-full h-full lg:px-20 md:px-10 px-5' >
        <DashboardHeader />
        <DashboardContent />
      </section>
    </div>
  );
}

export default App;
