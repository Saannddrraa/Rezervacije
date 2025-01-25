import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
      
      <Route path='/' element={<Home />}/>
      <Route path='/Sobe' element={<Sobe />}/>
      <Route path='/Apartmani' element={<Apartmani />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
