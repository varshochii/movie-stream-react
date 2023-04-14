import React from 'react'
import HomeCard from './HomeCard'
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


const Home = ({ items }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SmapleNextArrow />,
        prevArrow: <SmaplePrevArrow />
    }
   
  return (
    <>
        <div className='homeContainer'>
           <Slider {...settings}>
                {
                    items.map((item) => {
                    return(
                        <HomeCard key={item.id} item={item} />
                    )
                    })
                }
            </Slider> 
        </div>
    </>
  )
}

export default Home
