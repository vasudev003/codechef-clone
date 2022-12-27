import Dashboard from './components/Dashboard';
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    
    <Dashboard />
    <Outlet />
    </>
  )
}

export default App;
