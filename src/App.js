
import './App.css';

import { MenuOutline } from 'react-ionicons'
import Switcher from './components/Switcher';
import 'flowbite';
import { useState } from 'react';


function App() {

  const {isOpen, setIsOpen} = useState(false);
  const targetEl = document.getElementById('navbar-default');
  
  
  const handleCloseMenu = () =>{
      setIsOpen(!isOpen);
  }

  return (
   <>
      <header className='h-20 w-full'>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="text-gray-800 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Genman</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <MenuOutline
                color={'#00000'} 
                title='Open main menu'
                height="1.5em"
                width="1.5em"
                onClick={handleCloseMenu}
              />

          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tech Stack</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center mx-auto absolute left-1/3">
            <Switcher/>
          </div>
        </div>
      </nav>
          
      </header>
      <main>

      </main>    
      <footer>

      </footer>
   </>
  );
}

export default App;

