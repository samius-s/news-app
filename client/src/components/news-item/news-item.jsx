import React, { Fragment } from 'react'
import Button from '../common/button/button'
import './news-item.css'

const NewsItem = ({ isAdmin, newsItem, onNewsItemSelected, onNewsItemDeleted, onNewsItemChanged }) => {

    const { title, shortDescription, image } = newsItem
    const imgUrl = `http://localhost:5000/newsImage-${image}.jpg`
    const newsControl = isAdmin ?
        <Fragment>
            <Button type={"fa fa-pencil"} onAction={onNewsItemChanged} />
            <Button type={"fa fa-trash"} onAction={onNewsItemDeleted} />
        </Fragment>
        : null

    return (
        <div className='news-list-item'>
            <div className='news-details'>
                <div className='news-cover' onClick={onNewsItemSelected}>
                    <img src={imgUrl} alt='cover' />
                </div>
                <div className='news-description'>
                    <div className='news-title' onClick={onNewsItemSelected}>{title}</div>

                    <div className='news-short-description'>{shortDescription}</div>
                </div>

            </div>
            <div className='news-control' >
                {newsControl}
            </div>
        </div>
    )
}

export default NewsItem