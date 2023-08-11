import React from 'react'
import "./feature.css"
const Feature = ({img_n,area,gapp,size}) => {
  return (
    <div className='box' style={{gridArea:`${area}`}}>
          <img src={img_n} alt="" />
          <div className='box-inner'>
            <div style={{height:`${gapp}`}}>
            <span>Sep 26, 2021</span>
            <h3 style={{fontSize:`${size}`}}>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
            
            </div>
            <p>Read Full Article</p>
          </div>
  </div>
  )
}

export default Feature