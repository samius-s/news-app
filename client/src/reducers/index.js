
const initialState = {
    isAdmin: false,
    newsItem: null,
    newsList: [],
    loading: true,
    error: null,
}

const reducer = (state = initialState, action) => {

    console.log(action.type)

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




        default:
            return state
    }
}

export default reducer