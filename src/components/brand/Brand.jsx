import React from 'react'
import "./brand.css"
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassia from '../../assets/altaa.png'
import drop from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'


const Brand = () => {
  return (
    <div className='gpt3__brand section__margin'>
      <img src={google} alt="" />
      <img src={slack} alt="" />
      <img src={atlassia} alt="" />
      <img src={drop} alt="" />
      <img src={shopify} alt="" />
    </div>
  )
}

export default Brand