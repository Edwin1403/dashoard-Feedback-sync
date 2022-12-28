import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Dashboard from './Pages/Dashboard/Dashboard';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AdminDashboard/> } />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
