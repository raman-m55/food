import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import SearchResultComponent from './components/SearchResultComponent';
import { useState } from 'react';
import MealDetails from './components/MealDetails';


function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Main/>} /> 
        <Route path='/search/:result' element={<SearchResultComponent />} />
        <Route path='/meal/:id' element={<MealDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
