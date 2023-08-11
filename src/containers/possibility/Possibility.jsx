import React from 'react'
import "./possibility.css"
import pos_img from '../../assets/possibilities.png'
const Possibility = () => {
  return (
    <div className='gpt3__Possibility section__padding section__margin' id='possibility'>
      <div className='gpt3__Possibility-left'>
        <img src={pos_img} alt="possibility" />
      </div>
      <div className='gpt3__Possibility-right'>
        <span>Request Early Access to Get Started</span>
        <h3>The possibilities are beyond your imagination</h3>
        <div>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</div>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  )
}

export default Possibility