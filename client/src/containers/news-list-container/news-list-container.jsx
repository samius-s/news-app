import React, { Component } from 'react'
import NewsList from '../../components/news-list/news-list'
import Spinner from '../../components/common/spinner/spinner'
import ErrorIndicator from '../../components/error-indicator/error-indicator'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withNewsAppService } from '../../components/hoc/with-news-app-service'
import { fetchNewsList, fetchNewsItem, newsItemDeleted } from '../../actions'
import { compose } from '../../utils/compose'

class NewsListContainer extends Component {

    componentDidMount() {
        this.props.fetchNewsList() // в.14 ownProps
    }

    onNewsItemSelected = (id) => {
        if (this.props.newsItem === null) {
            this.props.fetchNewsItem(id)
        }
        this.props.history.push(`/news/${id}`)
    }

    onNewsItemDeleted = (id) => {
        // this.props.newsItemDeleted(id) // почему-то не импортируется из withNewsAppService
        fetch(`http://localhost:5000/api/news/${id}`, { method: 'DELETE' })
            // .then(() => this.props.fetchNewsList()) // чтобы не обращаться на сервер, удалю из Redux state
            .then(this.props.newsItemDeleted(id))

    }

    onNewsItemChanged = (id) => {
        console.log('changed newsItem', id)
        this.props.history.push(`/edit/`)
    }

    render() {
        const { isAdmin, newsList, loading, error } = this.props
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <NewsList
            isAdmin={isAdmin}
            newsList={newsList}
            onNewsItemDeleted={this.onNewsItemDeleted}
            onNewsItemSelected={this.onNewsItemSelected}
            onNewsItemChanged={this.onNewsItemChanged}
        />
    }
}

const mapStateToProps = ({ isAdmin, newsItem, newsList, loading, error }) => {
    return { isAdmin, newsItem, newsList, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { newsAppService } = ownProps // в.14 ownProps
    return {
        fetchNewsList: fetchNewsList(newsAppService, dispatch),
        fetchNewsItem: fetchNewsItem(newsAppService, dispatch),
        newsItemDeleted: (id) => dispatch(newsItemDeleted(id))
    }
}

export default compose(
    withNewsAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(withRouter(NewsListContainer))
