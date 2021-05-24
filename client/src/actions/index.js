

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

const fetchNewsList = (newsAppService, dispatch) => () => {
    dispatch(newsListRequested())
    newsAppService.getNewsList()
        .then((data) => dispatch(newsListLoaded(data)))
        .catch((err) => dispatch(newsListError(err)))
}

export const newsItemOpened = (newsItemId) => {
    return {
        type: 'NEWS_ITEM_OPENED',
        payload: newsItemId
    }
}

export {
    fetchNewsList
}