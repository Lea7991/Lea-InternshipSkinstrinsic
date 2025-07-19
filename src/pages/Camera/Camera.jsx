import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Camera/Camera.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCamera } from '@fortawesome/free-solid-svg-icons';

const Camera = () => {
    const videoRef = useRef(null)
    const canvasRef = useRef(null)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

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
    }, []);

    const captureAndUploadPhoto = async () => {
      if(!videoRef.current || !canvasRef.current) return; 

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight; 

      context.drawImage(video, 0, 0, canvas.width, canvas.height)

      const base64 = canvas.toDataURL('image/jpeg');

      try {
        setLoading(true);
        const response = await axios.post (
          `https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo`,
          { image: base64 } ,
          { headers: {
            'Content-Type' : 'application/json'
          }}    
        );

        console.log('Camera API response:', response.data);
        navigate('/Results')
      } catch(err) {
        console.error('Camera upload failed', err)
        alert('Failed to upload image. Please try again.')
      } finally {
        setLoading(false);
      }
    }



  return (
    <div className='page'>
      {loading && <div className="loading-overlay">Uploading...</div>}

      <video ref={videoRef} autoPlay playsInline className="camera-video" />
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <div className="overlay">
        <div className="container">
          <div className="camera__container">
            <div className="camera__text">TAKE PICTURE</div>
            <div className="camera__icon--wrapper" onClick={captureAndUploadPhoto}>
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