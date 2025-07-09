import React, { useEffect, useRef } from 'react'
import '../Camera/Camera.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCamera } from '@fortawesome/free-solid-svg-icons';

const Camera = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                if (videoRef.current) {
                    videoRef.current.srcObject = stream
                }
            } catch (err) {
                console.error('Failed to access camera', err)
            }
        }

        startCamera()

            return () => {
            if (videoRef.current?.srcObject) {
                const tracks = videoRef.current.srcObject.getTracks()
                tracks.forEach(track => track.stop())
            }
            }
    }, [])



  return (
    <div className='page'>
      <video ref={videoRef} autoPlay playsInline className="camera-video" />

      <div className="overlay">
        <div className="container">
          <div className="camera__container">
            <div className="camera__text">TAKE PICTURE</div>
            <div className="camera__icon--wrapper">
              <FontAwesomeIcon icon={faCamera} className='camera__icon' />
            </div>
          </div>
        </div>

        <div className="text__wrapper--skeleton">
          <div className="list__wrapper">
            <div className="text__results">TO GET BETTER RESULTS MAKE SURE TO HAVE</div>
            <ul className='camera__list'>
              <li className='list'>NEUTRAL EXPRESSION</li>
              <li className='list'>FRONTAL POSE</li>
              <li className='list'>ADEQUATE LIGHTING</li>
            </ul>
          </div>
        </div>

        <button className="button__wrapper--left">
          <div className="rectangle__small">
            <FontAwesomeIcon icon={faCaretLeft} className='icon' />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Camera