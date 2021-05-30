import React from 'react'
import NewsItem from '../news-item/news-item'
import './news-list.css'

const NewsList = ({ isAdmin, newsList, onNewsItemSelected, onNewsItemDeleted, onNewsItemChanged }) => {

    const elements = newsList.map((newsItem) => {
        return (
            <li key={newsItem.image}>
                <NewsItem
                    isAdmin={isAdmin}
                    newsItem={newsItem}
                    onNewsItemSelected={() => { onNewsItemSelected(newsItem.image) }}
                    onNewsItemDeleted={() => { onNewsItemDeleted(newsItem.image) }}
                    onNewsItemChanged={() => { onNewsItemChanged(newsItem.image) }}
                />
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
