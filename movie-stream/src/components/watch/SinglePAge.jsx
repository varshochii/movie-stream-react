import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { homeData, recommended } from '../../dummyData';
import Upcomming from '../upcomming/Upcomming';
import './style.css';

const SinglePAge = () => {

    const {id} = useParams();
    const [item, setItem] = useState(null);


    useEffect(() => {
        let item = homeData.find((item) => item.id == parseInt(id));

        if(item){
            setItem(item);
        }
    }, [id]);

    const [rec, setRec] = useState(recommended);

  return (
    <>
       {item ? (
        <>
           <section className='singlePage'>
               <div className='singleHeading'>
                  <h1>{item.name}</h1>
                  <span> | {item.time}</span> <span>HD</span>
               </div>
               <div className='container'>
                  <video src={item.video} controls></video>
                  <div className='para'>
                    <h3>Date: {item.date}</h3>
                    <p>{item.desc}</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi hic consequatur adipisci consectetur consequuntur? Sit vero eius nostrum laboriosam accusantium quis placeat cupiditate! Error, quia dolores. Quia dignissimos quo, libero ipsum autem eaque sapiente officia illo, in fugit consequatur aliquam veniam nihil voluptas? Architecto, necessitatibus! Unde, beatae explicabo placeat molestias dolores numquam! Consequuntur exercitationem aspernatur, voluptatum obcaecati debitis eius. Quaerat!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi hic consequatur adipisci consectetur consequuntur? Sit vero eius nostrum laboriosam accusantium quis placeat cupiditate! Error, quia dolores. Quia dignissimos quo, libero ipsum autem eaque sapiente officia illo, in fugit consequatur aliquam veniam nihil voluptas? Architecto, necessitatibus! Unde, beatae explicabo placeat molestias dolores numquam! Consequuntur exercitationem aspernatur, voluptatum obcaecati debitis eius. Quaerat!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi hic consequatur adipisci consectetur consequuntur? Sit vero eius nostrum laboriosam accusantium quis placeat cupiditate! Error, quia dolores. Quia dignissimos quo, libero ipsum autem eaque sapiente officia illo, in fugit consequatur aliquam veniam nihil voluptas? Architecto, necessitatibus! Unde, beatae explicabo placeat molestias dolores numquam! Consequuntur exercitationem aspernatur, voluptatum obcaecati debitis eius. Quaerat!</p>
                  </div>
                  <div className='social'>
                    <h3>Share: </h3>
                    <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" />
                    <img src="https://img.icons8.com/color/48/000000/twitter-circled.png" alt="twitter" />
                    <img src="https://img.icons8.com/color/48/000000/linkedin-circled.png" alt="twitter" />
                  </div>
               </div>
           </section>
           <Upcomming items={rec} title='Recommended Movies' />
        </>
       ) : null}
    </>
  )
}

export default SinglePAge
