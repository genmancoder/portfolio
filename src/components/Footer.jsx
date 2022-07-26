import React from 'react'

import '../styles/Footer.css';
import Typewriter from "typewriter-effect";
const Footer = () => {
  return (
    <div className="Footer">
        <div className="Footer-inner">
        <div>
            
            <Typewriter className="Front-typewritten"  
            onInit={(typewriter)=> {        
            typewriter                
            .typeString("A work in progress...")                
            .pauseFor(1000)
            .deleteAll()            
            .typeString("Loading... 40%...")
            .start();
            }}
            />
            
            <p>All Rights Reserved 2022. johnrpx</p>
        </div>
        <div className="Footer-tools">            
                {/* <ul>
                    <li>
                    <img src="https://cdn.cdnlogo.com/logos/v/16/visual-studio-code.svg" width="24" />
                    </li>
                    <li>
                    <img src="https://cdn.cdnlogo.com/logos/h/84/html.svg" width="24" />                    
                    </li>
                    <li>
                    <img src="https://cdn.cdnlogo.com/logos/c/18/css.svg" width="24" />                    
                    </li>
                    <li>
                    <img src="https://cdn.cdnlogo.com/logos/p/79/php.svg" width="24" />
                    </li>
                    <li>
                    
                    <img src="https://cdn.cdnlogo.com/logos/j/44/javascript.svg" width="24" />
                    </li>
                    <li>                    
                    <img src="https://cdn.cdnlogo.com/logos/m/10/mysql.svg" width="24" />    

                    </li>                    
                    <li>                    
                    <img src="https://cdn.cdnlogo.com/logos/g/69/github-icon.svg" width="24" />    
                    </li>
                    
                </ul>             */}
        </div>
        </div>
    </div>
  )
}

export default Footer