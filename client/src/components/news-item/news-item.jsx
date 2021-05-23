import React from 'react'
import './news-item.css'

const NewsItem = ({ newsItem }) => {
    const { title, shortDescription, image } = newsItem
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {shortDescription}
            </div>
            <div>
                {image}
            </div>
        </div>
    )
}

export default NewsItem