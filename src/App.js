import './App.css';
import Description from './Components/Description';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Home />} />
        <Route exact path='/comics/:comicsID' element={ <Description /> } />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
