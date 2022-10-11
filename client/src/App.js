import "./App.css";
import { Navbar } from "./components/Navbar";
import { MainRoutes } from "./components/MainRoutes";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    window.onload = navigate("/landing");
  }, []);

  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <ScrollToTop style={{backgroundColor:"grey",borderRadius:"20px"}} smooth />
    </div>
  );
}

export default App;
