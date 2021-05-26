import React, { Component } from 'react'
import NewsList from '../../components/news-list/news-list'
import Spinner from '../../components/spinner/spinner'
import ErrorIndicator from '../../components/error-indicator/error-indicator'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withNewsAppService } from '../../components/hoc/with-news-app-service'
import { fetchNewsList } from '../../actions'
import { compose } from '../../utils/compose'

class NewsListContainer extends Component {

    componentDidMount() {
        this.props.fetchNewsList() // в.14 ownProps
    }

    // onNewsItemSelected(id) {
    //     console.log(id)
    //     // this.props.history.push(`/news/${id}`)
    // }

    render() {
        const { newsList, loading, error } = this.props
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <NewsList
            newsList={newsList}
            history={this.props.history}
        // onNewsItemSelected={this.onNewsItemSelected}
        />
    }
}

const mapStateToProps = ({ newsList, loading, error }) => {
    return { newsList, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { newsAppService } = ownProps // в.14 ownProps
    return {
        fetchNewsList: fetchNewsList(newsAppService, dispatch)
    }
}

let withUrlDataNewsListContainer = withRouter(NewsListContainer)

export default compose(
    withNewsAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(withUrlDataNewsListContainer)
