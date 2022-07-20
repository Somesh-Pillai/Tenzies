import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import ItemDetail from './ItemDetail';
import Tenzies from './components/Tenzies';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>}/>
      <Route path="/shop" element={<Shop/>}/> 
      <Route path="/tenzies" element={<Tenzies />} />
      <Route exact path="/shop/:id" element={<ItemDetail/>}/>
      </Routes>
      </div>    
  </Router>

  );  
}

const Home = () => (
  <div>
    <h1>Welcome to Tenzies Game</h1>

    <footer> Developed by Somesh Pillai. ThoughtWorks</footer>
  </div>
)
export default App;
