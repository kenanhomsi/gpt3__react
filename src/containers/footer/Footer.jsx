import React from 'react'
import './footer.css'
import gpt_logo from '../../assets/logo.svg'
const Footer = () => {
  const Elements = (...props)=>{
    return(
      <>
          <p className='p1'>{`${props[0].haeder}`}</p>
          <p >{`${props[0].second}`}</p>
          <p >{`${props[0].thred}`}</p>
          <p >{`${props[0].four}`}</p>
          {props[0].five !== ' '?<p >{`${props[0].five}`}</p>:'' }

      </>)
  }
  return (
    <div className='gpt3__footer  section__padding'>
      <div className='gpt3__footer-up'>
          <h3>Do you want to step in to the future before others</h3>
          <button>Request Early Access</button>
      </div>
      <div className='gpt3__footer-down'>
        <div className='gpt3__footer-down_logo'>
            <img src={gpt_logo} alt="" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-down_links'>
              <Elements haeder='Links' second='Overons' thred='Social Media'four='Counters' five='Contact' />
        </div>
        <div className='gpt3__footer-down_company'>
        <Elements haeder='Company' second='Terms & Conditions' thred='Privacy Policy'four='Contact' five=' ' />


        </div>
        <div className='gpt3__footer-down_Get-in-touch'>
        <Elements haeder='Get in touch' second='Crechterwoord K12 182 DK Alknjkcb' thred='085-132567'four='info@payme.net' five=' ' />


        </div>

      </div>
      <div className='gpt3__footer-copyrigths'>
      © 2021 GPT-3. All rights reserved.
      </div>
    </div>
  )
}

export default Footer