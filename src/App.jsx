import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Sobe from './pages/Sobe';
import Apartmani from './pages/Apartmani';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>      
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Sobe />}/>
      <Route path='/' element={<Apartmani />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
