
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
    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
    
    </div>
    </div>
    <div className="App">
      <header className="App-header">      
        <div className="App-header--wrapper">
        <div className="App-branding">
          <span>johnrpx</span>
          <h1 className='text-3xl font-bold underline'>Tailwind all the way.</h1>
          <div className="grid grid-cols-10 gap-2">
            <div className='bg-sky-50 aspect-square'></div>
          </div>
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
