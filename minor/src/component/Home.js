import React from 'react'
import '../App.css'
import Trial from './trial'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
function Home() {
  return (
    <>
    <div class="topnav menu" id="myTopnav">
        <a href="#home" className="active">Home</a>
        <a href="/getStarted">Get Start</a>
      </div>
      <h4 id='vert'>#LetsUnifyOurCampus</h4>
      <div>
        <Parallax pages={4} >
          <ParallaxLayer offset={0.47} speed={0.5}>
            <h1 >Are you a university student ?</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <h1>Do you find it difficult to manage <br /> different communication channels ?</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={1.6} speed={0.5}>
            <h1>Don't we are here to solve it for you.</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.1} speed={0.5}>
            <h1>So, Lets get started!!!😎😁</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.7} sticky={{ start: 0, end: 2.7 }}>
            <div id='bb'></div>
            <img src='/abhay.png' alt='Pik' />
            <div id='bb2'></div>
            <div id='bl'><Trial /></div>
          </ParallaxLayer>
        </Parallax>
    </div>
    </>
  )
}

export default Home