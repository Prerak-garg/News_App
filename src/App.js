import './App.css';
import Navbar from './Componests/Navbar';
import News from './Componests/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      {/* <News pageSize={5} country="in" category="science"/> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<News pageSize={5} country="in" category="general"/>}></Route>
          <Route exact path='/business' element={<News pageSize={5} country="in" category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News pageSize={5} country="in" category="entertainment"/>}></Route>
          <Route exact path='/general' element={<News pageSize={5} country="in" category="general"/>}></Route>
          <Route exact path='/health' element={<News pageSize={5} country="in" category="health"/>}></Route>
          <Route exact path='/science' element={<News pageSize={5} country="in" category="science"/>}></Route>
          <Route exact path='/sports' element={<News pageSize={5} country="in" category="sports"/>}></Route>
          <Route exact path='/technology' element={<News pageSize={5} country="in" category="technology"/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
