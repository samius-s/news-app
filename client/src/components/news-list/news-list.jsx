import React from 'react'
import NewsItem from '../news-item/news-item'
import './news-list.css'

const NewsList = ({ newsList }) => {
    const elements = newsList.map((newsItem) => {
        return (
            <li key={newsItem.image}>
                <NewsItem
                    newsItem={newsItem} />
            </li>
        )
    })
    return (
        <ul className='news-list'>
            {elements}
        </ul>
    )
}

export default NewsList
