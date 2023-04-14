import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer>
         <div className='container'>

            <div className='box'>
                 <ul className='flex'>
                    <li>Terms of use</li>
                    <li>Privacy-Policy</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Watch List</li>
                 </ul>

              <p>@ 2022 STREAMIT. All Rights Reserved. All vidoes and shows on this platform are trademarksof, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
            </div>

             <div className='box'>
                <h3>Follow Us</h3>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-youtube'></i>
                <i className='fab fa-instagram'></i>
             </div>

             <div className='box'>
                <h3>Streamit App</h3>
                <div className='img flexSB'>
                    <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png" alt="apple-app" />
                    <span>App Store</span>
                    <img src="https://img.icons8.com/fluency/48/000000/google-play.png" alt="google-play" />
                    <span>Google Play Store</span>
                </div>
             </div>

         </div>
      </footer>
    </>
  )
}

export default Footer
