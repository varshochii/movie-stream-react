import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({ item: {id,name,rating,time,desc,starring,genres,tags,cover,video,date} }) => {

  return (
    <>
      <div className='box'>

         <div className='coverImage'>
            <img src={cover} alt="cover" />
         </div>

         <div className='content flex'>

           <div className='details row'>
                <h1>{name}</h1>
                <div className='rating flex'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half'></i>
                </div>
                <label>{rating}</label>
                <span>GP</span>
                <label>{time}</label>
          

                <p>{desc}</p>

                <div className='cast'>
                    <h4>
                        <span>Starring</span>
                        {starring}
                    </h4>
                    <h4>
                        <span>Geners</span>
                        {genres}
                    </h4>
                    <h4>
                        <span>Tgas</span>
                        {tags}
                    </h4>
                </div>

                <button className='primary-btn'>
                   <i className='fas fa-play'></i>PLAY NOW
               </button>
         </div>

            <div className='playButton row'>
                <Link to={`/singlepage/${id}`}>
                    <button>
                        <div className='img'>
                            <img src="./assets/images/play-button.png" alt="" />
                            <img src="./assets/images/play.png" alt="" className='change' />
                        </div>
                        WATCH TRAILER
                    </button>
                </Link>
            </div>

         </div>
      </div>
    </>
  )
}

export default HomeCard
