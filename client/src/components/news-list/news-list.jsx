import React from 'react'
import NewsItem from '../news-item/news-item'
import './news-list.css'

const NewsList = (props) => {

    const onNewsItemSelected = (id) => {
        console.log(id)
        props.history.push(`/news/${id}`)
    }

    const { newsList } = props

    const elements = newsList.map((newsItem) => {
        return (
            <li key={newsItem.image}>
                <NewsItem
                    newsItem={newsItem}
                    onNewsItemSelected={() => { onNewsItemSelected(newsItem.image) }}
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
