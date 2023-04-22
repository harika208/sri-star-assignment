import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Sign from './pages/Sign';
import Home from './pages/Home';
import Payment from './pages/Payment';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sign/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;