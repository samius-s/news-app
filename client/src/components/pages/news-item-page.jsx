import React from 'react'
import FullNewsItemContainer from '../../containers/full-news-item-container/full-news-item-container'

const NewsItemPage = (props) => {
    return (
        <div>
            NewsItemPage
            <FullNewsItemContainer id={props.match.params.id} />
        </div>
    )
}

export default NewsItemPage