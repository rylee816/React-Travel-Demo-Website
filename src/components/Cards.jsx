import React from 'react'
import CardItem from './CardItem'
import "./Cards.css"

function Cards() {
    return (
        <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path="https://www.tripadvisor.com/Attractions-g793795-Activities-c57-t95-Amazon_River_State_of_Amazonas.html"
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path="https://www.tripadvisor.com/Attractions-g294226-Activities-c57-t20-Bali.html"
              />
                </ul>
                <ul className='cards__items'>
                <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path="https://vacationidea.com/florida/best-things-to-do-in-hollywood-florida.html"
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path="https://www.tripadvisor.com/ShowUserReviews-g315763-d12425860-r552854823-Hotel_Mystic_Mountain-Nagarkot_Bagmati_Zone_Central_Region.html"
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path="https://www.tripadvisor.com/AttractionProductReview-g304017-d19010203-Camel_Ride_And_Overnight_in_The_Sahara_Desert-Merzouga_Draa_Tafilalet.html"
            />
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Cards
