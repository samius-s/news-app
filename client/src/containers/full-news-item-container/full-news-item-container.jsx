import React, { Component } from 'react'
import Spinner from '../../components/common/spinner/spinner'
import ErrorIndicator from '../../components/error-indicator/error-indicator'
import FullNewsItem from '../../components/full-news-item/full-news-item'
import { connect } from 'react-redux'
import { withNewsAppService } from '../../components/hoc/with-news-app-service'
import { fetchNewsItem } from '../../actions'
import { compose } from '../../utils/compose'

class FullNewsItemContainer extends Component {

    componentDidMount() {
        const id = this.props.newsItemId
        this.props.fetchNewsItem(id) // в.14 ownProps
    }

    render() {
        const { newsItem, loading, error } = this.props
        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return <FullNewsItem newsItem={newsItem} />
    }
}

const mapStateToProps = ({ newsItem, loading, error }) => {
    return { newsItem, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { newsAppService } = ownProps // в.14 ownProps
    return {
        fetchNewsItem: fetchNewsItem(newsAppService, dispatch)
    }
}

export default compose(
    withNewsAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FullNewsItemContainer)
