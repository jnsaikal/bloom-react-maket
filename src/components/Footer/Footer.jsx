import React from 'react'
import "./Footer.css"
import googleLogo from "../imgs/google logo.png"
import ratingStars from "../imgs/stars (1).png"


const Footer = () => {
  return (
    <div className="footer">
    <div className="rating">
     <ol className="rating__list">
        <li> 
            <img src="{googleLogo}" alt="" className="google-logo" />
        </li>

         <li className="rating__number">
           5.0
         </li>
        <li>
            <img src="{ratingStars}" alt="" className="rating__stars" />
         </li>
         <li class="rating__text">
           Based on 106 reviews
         </li>
     </ol>
     <ol className="footer__texts_left">
       <li className="text__left">Grow your career</li>
       <li className="text__left">Build a team</li>
     </ol>

     <ol className="footer__texts_right">
       <li className="text__right">Meet the founders</li>
       <li className="text__right_2">Mentorship</li>
       <li className="text__right_3">Say hello</li>

     </ol>
     

   </div>
   
   </div>
  )
}

export default Footer