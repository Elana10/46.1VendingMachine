import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import Starburts from './Starburts';
import DrPepper from './DrPepper';
import HoneyBun from './HoneyBun';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path ="/" element={<VendingMachine/>} />
          <Route path = "/starbursts" element= {<Starburts/>}/>
          <Route path = "/drpepper" element= {<DrPepper/>}/>
          <Route path = "/honeybun" element= {<HoneyBun/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
