import React from 'react'
// import { Link } from 'react-router-dom'
import "./Cards.css"

function CardItem({src, text, label, path}) {
    return (
        <>
            <li className="cards__item">
                {/* <Link className="cards__item__link" to={path}> */}
                <a className='cards__item__link' href={path} target="_blank" rel='noreferrer'>

                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img src={src} alt="Travel" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{text}</h5>
                    </div>
                </a>
                {/* </Link> */}
            </li>
        </>
    )
}

export default CardItem
