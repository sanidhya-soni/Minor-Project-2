import React from 'react'
import '../App.css'
import Trial from './trial'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
    <div class="topnav menu" id="myTopnav">
        <Link to="/" className="active">Home</Link>
        <Link to="/getStarted">Get Start</Link>
      </div>
      <h4 id='vert'>#LetsUnifyOurCampus</h4>
      <div>
      <Parallax pages={6} >
          <ParallaxLayer offset={0} speed={0.5}>
          <div className='model'>
          <iframe title="sani" src='https://my.spline.design/devicecloudcopy-82803346673c098e4e4edd61dd7eb30d/' frameborder='0' width='100%' height='100%'></iframe>
      </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.47} speed={0.5}>
            <h1 >Are you a university student ?</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <h1>Do you find it difficult to manage <br /> different communication channels ?</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.6} speed={0.5}>
            <h1>Don't we are here to solve it for you.</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={3.1} speed={0.5}>
            <h1>So, Lets get started!!!😎😁</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={5} sticky={{ start: 1, end: 4.9 }}>
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