import React from 'react'
import './blog.css'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import Feature from '../../components/feature/Feature'

const Blog = () => {
  return (
    <div className='gpt3__blog section__margin' id='blog'>
      <div className='gpt3__blog-top'>
        <h2>A lot is happening,<br /> 
          We are blogging about it.</h2>
      </div>
      <div className='gpt3__blog-down'>
        <Feature img_n={img1} area='im_1' gapp='250px' size='25px'/>
        <Feature img_n={img2} area='i_2'/>
        <Feature img_n={img3} area='i_3'/>
        <Feature img_n={img4} area='i_4'/>
        <Feature img_n={img5} area='i_5'/>
      </div>
    </div>
  )
}

export default Blog