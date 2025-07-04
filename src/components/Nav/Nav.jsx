import React from 'react'
import '../Nav/Nav.css'

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav__left">
          <button className='button__left'>SKINTRINSIC</button>
          <div className='nav__intro'>[ INTRO ]</div>
        </div>
        <div className="nav__right">
          <button className='button__right'>ENTER CODE</button>
        </div>
      </div>
    </div>
  )
}

export default Nav;