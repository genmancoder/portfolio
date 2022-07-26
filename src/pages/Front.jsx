import React from 'react'
import Typewriter from "typewriter-effect";

const Front = () => {
  return (
    <div className="Front">
        <div className="Front-main">
            <h1>.() John Paulin</h1>                        
            <Typewriter className="Front-typewritten"  
            onInit={(typewriter)=> {        
            typewriter                
            .typeString("Frontend Developer")                
            .pauseFor(1000)
            .deleteAll()            
            .typeString("HTML | CSS | JS | Bootstrap | Tailwind CSS | ReactJS | & more...")
            .start();
            }}
            />
        </div>
        <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      </div >
    </div>
  )
}

export default Front