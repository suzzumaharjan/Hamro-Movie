import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MovieDetail from './components/MovieDetail';

import Home from './components/Home';
import MovieContents from './components/MovieContents';

function App() {
  return (
   <div>
  
    
    <Router>
    <Navbar/>
      <Routes>
     
      <Route path='/' element={<MovieContents/>}></Route>
        
        <Route exact path='/moviedetail/:id' element={<MovieDetail/>}></Route>
      </Routes>
    </Router>
   </div>
  );
}

export default App;
