import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// error 

import Error from './Components/Pages/error'

// details page of book
import Description from './Components/Pages/description';

// pages
import Home from './Components/Pages/home';
import BestSeller from './Components/Pages/bestseller';
import NewRelease from './Components/Pages/newrelease';
import Membership from './Components/Pages/membership';
import Language from './Components/Pages/language';
import Contact from './Components/Pages/contact';



import NavfooterTemplate from './Template/navfooterTemplate';



// genre
import Action from './Components/Genre/action';
import Manga from './Components/Genre/manga';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Routes>
          {/*error */}
          <Route path='*' element={<Error />} />

          {/* pages */}
          <Route path='/' element={<NavfooterTemplate page={Home} />} />
          {/* <Route path='/' element={<Home /> }/> */}
          <Route path='/bestseller' element={<NavfooterTemplate page={BestSeller} />} />
          <Route path='/newrelease' element={<NavfooterTemplate page={NewRelease} />} />
          <Route path='/membership' element={<NavfooterTemplate page={Membership} />} />
          <Route path='/language' element={<NavfooterTemplate page={Language} />} />
          <Route path='/contact' element={<NavfooterTemplate page={Contact} />} />

          {/* Genre */}
          <Route path='/action' element={<NavfooterTemplate page={Action} />} />
          <Route path='/manga' element={<NavfooterTemplate page={Manga} />} />

          {/* books Description */}
          <Route path='/comics/:comicsID' element={<NavfooterTemplate page={Description} />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
