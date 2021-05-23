
const initialState = {
    newsList: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'NEWSLIST_LOADED':
            return {
                newsList: action.payload
            }

        default:
            return state
    }
}

export default reducer