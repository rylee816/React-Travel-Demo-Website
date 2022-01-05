import React from 'react'
import "../../App.css";
import Cards from '../Cards';
import Hero from '../Hero';

function Home() {
    return (
        <div className='Home'>
            <Hero />
            <Cards />
        </div>
    )
}

export default Home
