import React from 'react'
import FullNewsItemContainer from '../../containers/full-news-item-container/full-news-item-container'

const NewsItemPage = ({ newsItemId }) => {
    console.log(newsItemId)
    return (
        <div>
            <FullNewsItemContainer newsItemId={newsItemId}
            />
        </div>
    )
}

export default NewsItemPage