
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Front from './pages/Front';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link  
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">      
        <div className="App-header--wrapper">
        <div className="App-branding">
          <span>johnrpx</span>
        </div>
        <div className="App-navigation">
          <ul>
            <li><Link to="/">.is()</Link></li>
            <li><Link to="/projects">.work()</Link></li>
            <li><Link to="/about">.about()</Link></li>
            <li><Link to="/contact">.contact()</Link></li>
          </ul>
        </div>
        </div>       
      </header>
      <div className="App-content">
        
        <Routes>
          <Route path="/" element={(<Front/>)}>
              
          </Route>
          <Route path="/about" element={(<About/>)}>              
          </Route>
          <Route path="/projects" element={(<Projects/>)}>
              
          </Route>
          <Route path="/contact" element={(<Contact/>)}>
              
          </Route>
        </Routes>

        

      </div>

      <div>
        <Footer/>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
