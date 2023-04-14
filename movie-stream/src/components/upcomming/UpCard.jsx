import React from 'react'

const UpCard = ({ item: {id, cover, name, time} }) => {

  return (
    <>
      <div className='movieBox'>
          <div className='img'>
              <img src={cover} alt="pic" />
              <h1></h1>
          </div>
          <div className='text'>
             <h3>{name}</h3>
             <span>{time}</span> <br />
             <button className='primary-btn'>
                <i className='fas fa-play'></i> PLAY NOW
             </button>
          </div>
      </div>
    </>
  )
}

export default UpCard


