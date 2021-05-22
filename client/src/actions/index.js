const newsListLoaded = (newsList) => {
    return {
        type: 'NEWSLIST_LOADED',
        payload: newsList
    }
}

export {
    newsListLoaded
}