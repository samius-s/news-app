const newsListLoaded = (newsList) => {
    return {
        type: 'NEWSLIST_LOADED',
        payload: newsList
    }
}

const newsListRequested = () => {
    return {
        type: 'NEWSLIST_REQUESTED'
    }
}

export {
    newsListLoaded,
    newsListRequested
}