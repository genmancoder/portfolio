import React from 'react'
import Cta from './Cta'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5 className="text-sm">Hello I'm</h5>
            <h1>John Paulin</h1>
            <h5>Frontend Developer</h5>
            <Cta/>
        </div>
    </header>
  )
}

export default Header