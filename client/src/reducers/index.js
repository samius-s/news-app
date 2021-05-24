
const initialState = {
    newsList: [],
    loading: true,
    error: null,
    openedNewsItem: null,
}

const reducer = (state = initialState, action) => {

    console.log(action.type)

    switch (action.type) {
        case 'FETCH_NEWSLIST_REQUEST':
            return {
                ...state,
                newsList: [],
                loading: true,
                error: null
            }
        case 'FETCH_NEWSLIST_SUCCESS':
            return {
                ...state,
                newsList: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_NEWSLIST_FAILURE':
            return {
                ...state,
                newsList: [],
                loading: false,
                error: action.payload
            }
        case 'NEWSITEM_OPENED':
            const newsItemId = action.payload
            const newsItem = state.newsList.find((newsItem) => newsItem.image === newsItemId)
            return {
                ...state,
                openedNewsItem: newsItem.image
            }

        default:
            return state
    }
}

export default reducer