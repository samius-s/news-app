import React from 'react'
import './full-news-item.css'

const FullNewsItem = ({ id, newsItem }) => {

    const { fullDescription, image, title, shortDescription } = newsItem

    const imgUrl = `http://localhost:5000/newsImage-${image}.jpg`

    return (
        <article className='full-news-list'>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
            <img src={imgUrl} alt='cover' />
            <p>{fullDescription}</p>

        </article>
    )
}

export default FullNewsItem