
import './App.css';
import { Navbar } from './components/Navbar';
import { MainRoutes } from './components/MainRoutes';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate()
  useEffect(()=>{
   window.onload = navigate("/landing")
  },[])

  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
    </div>
  );
}

export default App;
