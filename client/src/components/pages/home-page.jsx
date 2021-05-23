import React from 'react'
import NewsList from '../news-list/news-list'

const HomePage = () => {

    const newsList = [
        {
            "title": "Новость №1",
            "shortDescription": "Краткое описание новости №1",
            "image": 1
        },
        {
            "title": "Новость №2",
            "shortDescription": "Краткое описание новости №2",
            "image": 2
        },
        {
            "title": "Новость №3",
            "shortDescription": "Краткое описание новости №3",
            "image": 3
        },
        {
            "title": "Новость №4",
            "shortDescription": "Краткое описание новости №4",
            "image": 4
        }
    ]

    return (
        <NewsList newsList={newsList} />
    )
}

export default HomePage