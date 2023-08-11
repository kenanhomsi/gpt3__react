import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import header_img from '../../assets/header.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing.<br/> Not thoughts all exercise blessing.<br/> Indulgence way everything joy alteration boisterous the attachment.<br/> Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Adderss'/>
          <button> Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-img'>
          <img src={header_img} alt="header" />

      </div>
    </div>
  )
}

export default Header