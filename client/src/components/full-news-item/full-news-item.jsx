import React from 'react'
import './full-news-item.css'

const FullNewsItem = ({ id, newsItem }) => {

    const { fullDescription, image, title, shortDescription } = newsItem

    const imgUrl = `http://localhost:5000/newsImage-${image}.jpg`

    return (
        <article className='full-news-list'>
            <h2>{title}</h2>
            <h5>{shortDescription}</h5>
            <img src={imgUrl} alt='cover' />
            <h5>{fullDescription}</h5>

        </article>
    )
}

export default FullNewsItem