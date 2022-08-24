import React, { useState } from 'react'
import useDarkSide from './Darkside';
import {DarkModeSwitch} from 'react-toggle-dark-mode'
const Switcher = () => {

const [colorTheme, setTheme] = useDarkSide();
const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true: false)

const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
}

  return (
    <>
        <div className='m-16 flex flex-col items-center'>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={24}
            />
        </div>
    </>
  )
}

export default Switcher