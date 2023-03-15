import './App.css';
import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/Rowpost/Rowpost';
import {originals,actions,adventures,Romance,wars} from './urls';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Banner/>
   <Rowpost url={actions} title='Actions'/>
   <Rowpost url={originals} title='Netflix Originals' isSmall/>
   <Rowpost url={adventures} title='Adventures' isSmall/>
   <Rowpost url={Romance} title='Romance' isSmall/>
   <Rowpost url={wars} title='Wars' isSmall/>
   <Footer/>
    </div>
  );
}

export default App;
