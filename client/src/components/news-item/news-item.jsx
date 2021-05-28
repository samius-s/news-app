import React from 'react'
import './news-item.css'

const NewsItem = ({ newsItem, onNewsItemSelected }) => {
    const { title, shortDescription, image } = newsItem
    const imgUrl = `http://localhost:5000/newsImage-${image}.jpg`
    return (
        <div className='news-list-item' onClick={onNewsItemSelected}>

            <div className='news-cover'>
                <img src={imgUrl} alt='cover' />
            </div>
            <div className='news-details'>
                <span className='news-title'>{title}</span>
                <span className='news-short-description'>{shortDescription}</span>
            </div>
        </div>
    )
}

export default NewsItem