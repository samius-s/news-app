import React, { Component } from 'react'
import NewsList from '../../components/news-list/news-list'
import Spinner from '../../components/spinner/spinner'
import ErrorIndicator from '../../components/error-indicator/error-indicator'
import { connect } from 'react-redux'
import { withNewsAppService } from '../../components/hoc/with-news-app-service'
import { fetchNewsList, newsItemOpened } from '../../actions'
import { compose } from '../../utils/compose'

class NewsListContainer extends Component {

    componentDidMount() {
        this.props.fetchNewsList() // в.14 ownProps
    }

    render() {
        const { newsList, loading, error, onOpenedNewsItem } = this.props
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }
        return <NewsList newsList={newsList} onOpenedNewsItem={onOpenedNewsItem} />
    }
}

const mapStateToProps = ({ newsList, loading, error }) => {
    return { newsList, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { newsAppService } = ownProps // в.14 ownProps
    return {
        fetchNewsList: fetchNewsList(newsAppService, dispatch),
        onOpenedNewsItem: (id) => {
            dispatch(newsItemOpened(id))
        }
    }
}

export default compose(
    withNewsAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(NewsListContainer)