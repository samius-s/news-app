import React from 'react'
import './full-news-item.css'

const FullNewsItem = ({ id, newsItem }) => {

    const { fullDescription, image, title, shortDescription } = newsItem

    return (
        <div className='full-news-list'>
            {image} {id}
            {title}
            {shortDescription}
            {fullDescription}

        </div>
    )
}

export default FullNewsItem