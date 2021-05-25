

const newsListRequested = () => {
    return {
        type: 'FETCH_NEWSLIST_REQUEST'
    }
}

const newsListLoaded = (newsList) => {
    return {
        type: 'FETCH_NEWSLIST_SUCCESS',
        payload: newsList
    }
}

const newsListError = (error) => {
    return {
        type: 'FETCH_NEWSLIST_FAILURE',
        payload: error
    }
}

const newsItemRequested = (id) => {
    return {
        type: 'FETCH_NEWSITEM_REQUEST',
        payload: id
    }
}

const newsItemLoaded = (newsItem) => {
    return {
        type: 'FETCH_NEWSITEM_SUCCESS',
        payload: newsItem
    }
}

const newsItemError = (error) => {
    return {
        type: 'FETCH_NEWSITEM_FAILURE',
        payload: error
    }
}

const fetchNewsList = (newsAppService, dispatch) => () => {
    dispatch(newsListRequested())
    newsAppService.getNewsList()
        .then((data) => dispatch(newsListLoaded(data)))
        .catch((err) => dispatch(newsListError(err)))
}

const fetchNewsItem = (newsAppService, dispatch) => (id) => {
    dispatch(newsItemRequested(id))
    newsAppService.getNewsItem()
        .then((data) => dispatch(newsItemLoaded(data)))
        .catch((err) => dispatch(newsItemError(err)))
}

export {
    fetchNewsList,
    fetchNewsItem
}