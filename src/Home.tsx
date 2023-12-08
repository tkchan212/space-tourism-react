import { useState } from 'react'
import './index.css'
import { ExploreButton, Navigation, Typography } from './DesignSystem'

function Home() {
  return (
    <div className='home' style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateRows: "min-content 1fr"
      /* may need to reuse this across pages */
    }}>
      <div className='primary-header flex'>{/* we're working in react so cannot use the header anymore */}
        <div className='logo'>{/* TODO put in the logo when you have the asset files. */}</div>
      <Navigation items={[
        { number: '00', text: 'Home'},
        { number: '01', text: 'Destination' },
        { number: '02', text: 'Crew' },
        { number: '03', text: 'Technology' },
      ]} activeItem="00" />
      </div>
      
      <div className='grid-container'>
        <div className='grid-div-1'>
      <Typography variant={"h5"}>So, you want to travel to</Typography>
      <Typography variant={"h1"}>Space</Typography>
      <p className='text-accent'>
      Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience! 
      </p> 
      </div>
      <div className='grid-div-2'><ExploreButton /></div>
      </div>

     
      

      
      

    </div>


  )
}

export default Home
