import React, { useRef, useState } from 'react'
import '../Analysis/Analysis.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import camera from '../../assets/camera-icon.webp'
import gallery from '../../assets/gallery-icon.webp'
import { Navigate, useNavigate } from 'react-router-dom';


const Analysis = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [showModalGallery, setShowModalGallery] = useState(false)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef(null);

  function handleCamera() {
    setShowModal(true)
  }

  function handleGallery () {
    setShowModalGallery(true)
  }

  function handleCameraAllow() {
    setShowModal(false)
    setLoading(true)

    setTimeout(() => {
      console.log('Camera is ready!')
      setLoading(false)
      navigate('/Camera')
    }, 5000)
  }

  function handleGalleryAllow() {
    setShowModalGallery(false);
    if(fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  function handleFileChange(event) {
    const file = event.targe.files[0];
    if (file) {
      console.log('Selected file:', file)
    }
  }

  function handleDeny() {
    setShowModal(false)
    setShowModalGallery(false)
  }

  function handleBack () {
    navigate('/Intro')
  }


  return (
    <>

    <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />

    {loading && (
      <div className="skeleton__overlay">
      <div className="rectangle__wrapper---skeleton">
          <div className="rectangle__rotate--wrapper---skeleton">
            <div className="rectangle__one--skeleton">
            <div className="rectangle__two--skeleton">
                <div className="rectangle__three--skeleton">
                </div>
            </div>
            </div>
          </div>
          <div className="image__wrapper--skeleton">
            <img src={camera} alt="" className='img'/>
          </div>
          
          <div className="text__wrapper--skeleton">
            <div className="text--skeleton">SETTING UP CAMERA...</div>
            <div className="list__wrapper">
              <div className="text__results">TO GET BETTER RESULTS MAKE SURE TO HAVE</div>
                 <ul className='camera__list'>
                    <li className='list'>NEUTRAL EXPRESSION</li>
                    <li className='list'>FRONTAL POSE</li>
                    <li className='list'>ADEQUATE LIGHTING</li>
                  </ul>
              </div>
              </div>
            </div>
       
       </div>
      )}

    <div className='page'>
      <div className="header__title">TO START ANALYSIS</div>
      <div className="container">
        <div className="page__left">
        <div className="rectangle__left--wrapper">
          <div className="rectangle__rotate--wrapper">
            <div className="rectangle__one">
            <div className="rectangle__two">
                <div className="rectangle__three">
                </div>
            </div>
            </div>
          </div>
          <div className="image__wrapper--left">
            <img src={camera} alt="" className='img'  onClick={handleCamera}/>
          </div>
        </div>
        </div>
        <div className="line__left">___________</div>
        <button className="text__left" onClick={handleCamera}>ALLOW A.I. TO SCAN YOUR FACE</button>
        
        {showModal && (
          <div className="modal__overlay">
            <div className="modal__container">
              <div className="modal__camera">ALLOW A.I. TO ACCESS YOUR CAMERA?</div>
              <div className="buttons__wrapper">
              <button className="deny" onClick={handleDeny}>DENY</button>
              <button className="allow" onClick={handleCameraAllow}>ALLOW</button>
              </div>
            </div>
          </div>
      )}

        <div className="page__right">
        <div className="rectangle__right--wrapper">
          <div className="rectangle__rotate--wrapper">
            <div className="rectangle__one">
            <div className="rectangle__two">
                <div className="rectangle__three">
                </div>
            </div>
            </div>
          </div>
          <div className="image__wrapper--right">
            <img src={gallery} alt="" className='img' onClick={handleGallery}/>
          </div>
        </div>
      </div>
      <div className="line__right">___________</div>
      <button className="text__right" onClick={handleGallery}>ALLOW A.I. TO ACCESS YOUR GALLERY</button>
      {showModalGallery && (
        <div className="modal__overlay">
        <div className="modal__container">
          <div className="modal__camera">ALLOW A.I. TO ACCESS YOUR GALLERY?</div>
          <div className="buttons__wrapper">
          <button className="deny" onClick={handleDeny}>DENY</button>
          <button className="allow" onClick={handleGalleryAllow}>ALLOW</button>
          </div>
        </div>
        </div>
      )}
      </div>
      <button className="button__wrapper--left" onClick={handleBack}>
          <div className="rectangle__small">
              <FontAwesomeIcon icon={faCaretLeft} className='icon' />
          </div>
          <div className="text__small">BACK</div>
      </button>
      </div>
      </>
  )
}

export default Analysis