import React from 'react'
import NewsListContainer from '../../containers/news-list-container/news-list-container'

const HomePage = ({ history }) => {
    return (
        <NewsListContainer history={history} />
    )
}

export default HomePage