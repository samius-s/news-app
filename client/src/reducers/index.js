
const initialState = {
    newsList: [],
    loading: true,
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'NEWSLIST_REQUESTED':
            return {
                newsList: [],
                loading: true,
            }
        case 'NEWSLIST_LOADED':
            return {
                newsList: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export default reducer