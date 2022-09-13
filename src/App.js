
import './App.css';

import { MenuOutline } from 'react-ionicons'
import Switcher from './components/Switcher';
import 'flowbite';
import { useState } from 'react';
import { Spring } from 'react-spring';

import Typewriter from 'typewriter-effect'
import Terminal from './components/Terminal';

function App() {

  const {isOpen, setIsOpen} = useState(false);
  const targetEl = document.getElementById('navbar-default');
  
  
  const handleCloseMenu = () =>{
      setIsOpen(!isOpen);
  }

  return (
   <>      
      <main className='bg-slate-800   dark:bg-gray-900 bg-[url("assets/home.png")] bg-cover sm:bg-repeat'>
       
        <article>
            
            <section className='mt-0 min-h-[100vh]'>
            
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-6">          
                
                <div className='flex justify-center mb-3'>
                    <div className='bg-slate-800/80 min-h-32 w-4/5 rounded-md flex flex-col justify-center p-4 text-center'>

                            <h1 className='text-green-400 text-2xl'>John Ray Paulin</h1>
                            <p className='text-gray-200 sm:text-xs'>/ Software dev. / Front & Back. / </p>
                            <p className='text-gray-200 sm:text-[9px] mt-2 animate-bounce'>/ A work in progress. / </p>
                    </div>
                </div>

                <div className='flex justify-center mb-3 '>
                    
                    <div className='bg-slate-800/80 min-h-32 w-4/5 rounded-md flex flex-col justify-center p-4 text-left relative'>
                    <div className='absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-400 animate-ping'></div>
                    <div className='absolute top-0 right-0 -mr-1 -mt-1 w-4 h-4 rounded-full bg-green-400'></div>
                    <div className='absolute bottom-0 left-0 -ml-1 -mb-1 w-4 h-4 rounded-full bg-green-400'></div>
                    <div className='absolute bottom-0 left-0 -ml-1 -mb-1 w-4 h-4 rounded-full bg-green-400 animate-ping'></div>
                    <p className='text-gray-200 text-[9px]'>/ PHP. / Javascript. / Java. / VB.Net / Python. / ..ReactJS / ..Wordpress / ..TailwindCSS / ..MaterialUI / ..Bootstrap / ..NodeJS / ..GitHub / ..BitBucket / ..GCP / ..GTM / ..JavaFX / ...VSCode / ...vim / .../Netbeans / ...APIs /</p>
                    
                    </div>
                </div>
               
            </div>

            <div className="items-center py-5 mx-auto max-w-screen-xl">          
                
                <div className='flex justify-center mb-3'>
                        <div className='bg-slate-800/80 w-[87%] rounded-md flex flex-col justify-center p-4 text-left'>
                            <div className='bg-slate-800/80 w-[100%] rounded-md  mx-auto flex flex-col justify-center p-4 text-left'>                                
                                <p className='text-[9px] text-blue-300 mb-2'>/ ..Backstory /</p>
                                <p className='text-[10px] text-gray-200'>
                                    I have started my journey as a developer way back 2012. I used mainly PHP & Java before as my first programming languages together with MySQL as the database. Then slowly transitioned into using jQuery to create dashboards, app integrations. 
                                    Then started learning ReactJS for Frontend development. Below are the links to some of my projects created using different technology stacks. \Java, Javascript, React, VB.net, HTML, CSS, jQuery, Wordpress, NodeJs, PHP, etc.\                                                                       
                                </p>
                                <div className='flex flex-col mt-4 mb-4 text-left'>
                                    <div className='flex flex-col w-[20%]' >
                                        <a className='text-blue-500 text-[9px]' href='https://monstarlabmovies.netlify.app/' target='_blank'>[Monstarlab Movie Index] </a>
                                        <a className='text-blue-500 text-[9px]' href='https://johnrpx.netlify.app/' target='_blank'> [This Portfolio] </a>
                                        <a className='text-blue-500 text-[9px]' href='https://github.com/genmancoder/pushshift-subreddit' target='_blank'>[PushShift Api] </a>
                                        <a className='text-blue-500 text-[9px]' href='https://github.com/genmancoder/ecommerce-amazon-clone-app' target='_blank'> [E-commerce site.] </a>
                                        <a className='text-blue-500 text-[9px]' href='https://github.com/genmancoder/snippex' target='_blank'>[Snippex] </a>
                                        <a className='text-blue-500 text-[9px]' href='https://github.com/genmancoder/genmanpos' target='_blank'> [POS - Private] </a>
                                        <a className='text-blue-500 text-[9px]' href='https://github.com/genmancoder/genmanpay' target='_blank'> [Payroll - Private] </a>                                    
                                        <a className='text-blue-500 text-[9px]' href='https://github.com/genmancoder/admindashboard' target='_blank'> [Admin Dashboard] </a>                                    
                                    </div>
                                </div>
                                <p className='text-[10px] text-gray-200'>
                                    If you want to see more awesome projects I built, please let me know.                                                                      
                                </p>
                            </div>
                        </div>
                </div>
               
            </div>


            <div className="items-center py-5 mx-auto max-w-screen-xl sm:py-0">          
                
                <div className='flex justify-center mb-3'>
                        <div className='bg-slate-800/80 w-[87%] rounded-md flex flex-col justify-center p-4 text-left'>
                            <div className='bg-slate-800/80 w-[100%] rounded-md  mx-auto flex flex-col justify-center p-4 text-left'>
                                <h1 className='text-purple-500'>Web dev.</h1>
                                <p className='text-[9px] text-blue-300 mb-2'>/ ..Xent LLC /</p>
                                <p className='text-[9px] text-gray-200'>
                                ▪ Create different dashboards using React, Firebase and PHP
                                ▪ Utilize Google Products / Platforms for integration.
                                ▪ Manage servers and databases
                                ▪ Create Shopify apps using PHP, Liquid
                                ▪ Implement tracking mechanism using Google Tag Manager, Google 
                                Analytics, Google AdWords and other related tools.
                                </p>

                                <h1 className='mt-3 text-purple-500'>Graphics designer.</h1>
                                <p className='text-[9px] text-blue-300 mb-2'>/ ..Digital refresh /</p>
                                <p className='text-[9px] text-gray-200'>
                                ▪ Create banner designs for social media platforms
                                ▪ Create landing pages for different sites
                                ▪ Image correction and enhancements
                                </p>

                                <h1 className='mt-3 text-purple-500'>Web & Mobile developer.</h1>
                                <p className='text-[9px] text-blue-300 mb-2'>/ ..Mobi Media Associates /</p>
                                <p className='text-[9px] text-gray-200'>
                                ▪ Design and develop android apps
                                ▪ Design and develop websites using PHP, HTML, CSS, jQuery, MySQL
                                ▪ Graphics Designing (Logo, Banners and others)
                                </p>
                            </div>
                        </div>
                </div>
               
            </div>

            </section>



        </article>        

      </main>    
      


   </>
  );
}

export default App;


