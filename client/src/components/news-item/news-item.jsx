import React from 'react'
import Button from '../common/button/button'
import './news-item.css'

const NewsItem = ({ newsItem, onNewsItemSelected }) => {
    const { title, shortDescription, image } = newsItem
    const imgUrl = `http://localhost:5000/newsImage-${image}.jpg`
    return (
        <div className='news-list-item'>
            <div className='news-cover' onClick={onNewsItemSelected}>
                <img src={imgUrl} alt='cover' />
            </div>
            <div className='news-details'>
                <span className='news-title' onClick={onNewsItemSelected}>{title}</span>
                <span className='news-short-description'>{shortDescription}</span>
            </div>
            <div className='news-control'>
                <Button type={"fa fa-pencil"} />
                <Button type={"fa fa-trash"} />
            </div>
        </div>
    )
}

export default NewsItem