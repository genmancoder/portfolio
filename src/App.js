
import './App.css';
import Footer from './components/Footer';


import Front from './pages/Front';

import {About, Contact, Experience, Portfolio, Projects, Services} from './components/index'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link  
} from "react-router-dom";
import Header from './components/Header';



function App() {
  return (
    <>
      <div className='w-1200 m-auto pt-5'>
      <h1 className='text-red-500'>Tailwind CSS</h1>
      </div>
      
    </>
  );
}

export default App;
