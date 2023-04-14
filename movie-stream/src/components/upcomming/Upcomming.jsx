import React from 'react'
import { Link } from 'react-router-dom'
import UpCard from './UpCard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const SmapleNextArrow = (props) => {
    const {onClick} = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className='fas fa-chevron-right'></i>
            </button>
        </div>
    )
}

const SmaplePrevArrow = (props) => {
    const {onClick} = props
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className='fas fa-chevron-left'></i>
            </button>
        </div>
    )
}

const Upcomming = ({ items, title }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SmapleNextArrow />,
        prevArrow: <SmaplePrevArrow />,
        responsive: [
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
         },
        ],
    }
   
  return (
    <>
       <section className='upcome'>
           <div className='container'>

               <div className='heading flexSB'>
                   <h1>{title}</h1>
                   <Link to='/'>View All</Link>
               </div>

               <div className='content'>
                <Slider {...settings}>
                   {
                       items.map((item) => {
                          return (
                             <UpCard key={item.id} item={item} />
                          )
                       })
                   }
                </Slider>
               </div>

           </div>
        </section> 
    </>
  )
}

export default Upcomming
