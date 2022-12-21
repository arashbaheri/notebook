import './index.css'

import {
  BsFillPauseCircleFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
} from 'react-icons/bs'

import { Progress } from 'reactstrap'

const Music = () => {
  return (
    <div className='d-flex flex-column current-album-container'>
      <div className='d-flex album-image-container'>
        <img src='/images/pro.png' alt='album-image' />
        <div>
          <h6 className='p-0 m-0 mt-4 mx-2'>The Weekend</h6>
          <span className='mx-2 album-name-subtitle'>Rain the fire</span>
        </div>
      </div>
      <div className='w-100 mt-4'>
        <Progress striped color='warning' value={30} />
        <div className='music-timing d-flex justify-content-between'>
        <span>1:05</span>
        <span>3:40</span>
        </div>
      </div>
      <div className='d-flex justify-content-around mt-4 mb-2'>
        <div>
          <BsFillSkipStartFill size={30} color='#58409e' />
        </div>
        <div>
          <BsFillPauseCircleFill size={30} color='#58409e' />
        </div>
        <div>
          <BsFillSkipEndFill size={30} color='#58409e' />
        </div>
      </div>
    </div>
  )
}

export default Music
