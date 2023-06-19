
import Cards from './pages/Cards';
import Control from './pages/Control';
import Invoice from './pages/Invoice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cards' element={<Cards/>}/>
          <Route path='/control' element={<Control/>}/>
          <Route path='/invoice' element={<Invoice/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
