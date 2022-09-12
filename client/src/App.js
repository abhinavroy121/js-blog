
import './App.css';
import { Navbar } from './components/Navbar';
import { MainRoutes } from './components/MainRoutes';

function App() {
  const localstoragedata = JSON.parse(localStorage.getItem("blogtoken"))
  return (
    <div className="App">
     {localstoragedata ?<Navbar/> : null} 
      <MainRoutes/>
    </div>
  );
}

export default App;
