import React from 'react'
import "../../App.css"
import '../Hero.css'

function Trailer() {
    return (
        <div className='hero-container'>
            <h1>Trailer</h1>
            <video src="https://player.vimeo.com/external/348661337.sd.mp4?s=b31b588730ad24c2412e4fbd44cea21a6dcf0d1e&profile_id=164" autoPlay loop muted></video>
        </div>
    )
}

export default Trailer
