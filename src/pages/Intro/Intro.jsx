import React from 'react'
import '../Intro/Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Intro = () => {
const navigate = useNavigate()

  function handleClick() {
    navigate(`/`)
  }
  return (
    <div className='page'>
            <div className="header__title">TO START ANALYSIS</div>
            <div className="intro__wrapper">
                <div className="rectangle__rotate--wrapper">
                 <div className="rectangle__one">
                    <div className="rectangle__two">
                        <div className="rectangle__three">
                     </div>
                    </div>
                 </div>
                </div>
            <div className="input__wrapper">
                            <div className="input__title">CLICK TO TYPE</div>
                            <input type="text" placeholder='Introduce Yourself' className="intro__input" />
                            </div>
       </div> 
       <button className="button__wrapper" onClick={handleClick}>
            <div className="rectangle__small">
                <FontAwesomeIcon icon={faCaretLeft} className='icon'/>
            </div>
            <div className="text__small">BACK</div>
        </button>
    </div>
  )
}

export default Intro