import React from 'react'
import './news-item.css'

const NewsItem = ({ newsItem, onNewsItemSelected }) => {
    const { title, shortDescription, image } = newsItem
    const imgUrl = 'https://img4.labirint.ru/rc/93999912f5a0bc63024751a1f97cf71e/348x537/books71/707678/cover.jpg?1563699914'
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