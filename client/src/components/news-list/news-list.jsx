import React, { Component, useEffect } from 'react'
import NewsItem from '../news-item/news-item'
import Spinner from '../spinner/spinner'
import { connect } from 'react-redux'
import { withNewsAppService } from '../hoc/with-news-app-service'
import { newsListLoaded, newsListRequested } from '../../actions/'
import { compose } from '../../utils/compose'
import './news-list.css'

class NewsList extends Component {

    componentDidMount() {
        const { newsAppService, newsListLoaded, newsListRequested } = this.props
        newsListRequested()
        const data = newsAppService
            .getNewsList()
            .then((data) => newsListLoaded(data))
    }

    render() {
        const { newsList, loading } = this.props
        if (loading) {
            return <Spinner />
        }

        return (
            <ul className='news-list'>
                {
                    newsList.map((newsItem) => {
                        return (
                            <li key={newsItem.image}><NewsItem
                                newsItem={newsItem}
                            /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ newsList, loading }) => {
    return { newsList, loading }
}

const mapDispatchToProps = {
    newsListLoaded,
    newsListRequested
}

export default compose(
    withNewsAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(NewsList)

// const NewsList = () => {
//     useEffect(() => {
//         console.log('mount')
//     }, [])
//     return (
//         <div>
//             <NewsItem />
//             <NewsItem />
//             <NewsItem />
//         </div>
//     )
// }
// export default NewsList
