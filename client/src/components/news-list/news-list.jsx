import React, { Component, useEffect } from 'react'
import NewsItem from '../news-item/news-item'
import { connect } from 'react-redux'
import { withNewsAppService } from '../hoc/with-news-app-service'
import { newsListLoaded } from '../../actions/'
import { compose } from '../../utils/compose'
import './news-list.css'

class NewsList extends Component {

    componentDidMount() {
        const { newsAppService } = this.props
        const data = newsAppService
            .getNewsList()
            .then((data) => {
                this.props.newsListLoaded(data)
            })
    }

    render() {
        const { newsList } = this.props
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

const mapStateToProps = ({ newsList }) => {
    return { newsList }
}

const mapDispatchToProps = {
    newsListLoaded
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
