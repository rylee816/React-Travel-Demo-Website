import React from 'react'
import Button from './Button'
import "./Hero.css"
import "../App.css"

function Hero() {

    return (
        <div className='hero-container'>
            <video src="React-Travel-Demo-Website/images/video-2.mp4" autoPlay loop muted></video>
            {/* <video src="https://player.vimeo.com/external/387675206.sd.mp4?s=59fb02dd43b656dd886ec540ff23a0aa20685922&profile_id=164" autoPlay loop muted></video> */}
            <h1>ADVENTURE CALLS</h1>
            <p>What are you waiting for? <span className='xplor'>XPLOR.</span></p>
            <div className="hero-btns">
                <Button
                className="btns"
                buttonSize="btn--large"
                buttonStyle="btn--outline"
                children="GET STARTED"
                type="/"
                 />
                  <Button
                className="btns"
                buttonSize="btn--large"
                buttonStyle="btn--primary"
                type="/trailer"
                 >
                     WATCH TRAILER
                     <i className='far fa-play-circle' style={{marginLeft: "20px"}}/>
                 </Button>
            </div>
        </div>
    )
}

export default Hero;