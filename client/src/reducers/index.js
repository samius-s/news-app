
const initialState = {
    isAdmin: true,
    newsItem: null,
    newsItemToEdit: null,
    newsList: [],
    loading: true,
    error: null,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADMIN_TOGGLED_ON':
            return {
                ...state,
                isAdmin: true
            }
        case 'ADMIN_TOGGLED_OFF':
            return {
                ...state,
                isAdmin: false
            }
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
        case 'FETCH_NEWSITEM_REQUEST':
            return {
                ...state,
                newsItem: null,
                loading: true,
                error: null
            }
        case 'FETCH_NEWSITEM_SUCCESS':
            return {
                ...state,
                newsItem: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_NEWSITEM_FAILURE':
            return {
                ...state,
                newsItem: null,
                loading: false,
                error: action.payload
            }
        case 'FETCH_NEWSITEM_DELETE':
            const idx = state.newsList.findIndex((el) => el.image === action.payload)
            const newNewsList = [
                ...state.newsList.slice(0, idx),
                ...state.newsList.slice(idx + 1)
            ]
            return {
                ...state,
                newsList: newNewsList
            }
        case 'NEWSITEM_EDIT':
            const idxToEdit = state.newsList.findIndex((el) => el.image === action.payload)
            return {
                ...state,
                newsItemToEdit: state.newsList[idxToEdit],
            }

        default:
            return state
    }
}

export default reducer