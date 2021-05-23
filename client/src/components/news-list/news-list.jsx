import React, { Component, useEffect } from 'react'
import NewsItem from '../news-item/news-item'
import './news-list.css';


export default class NewsList extends Component {
    render() {

        const { newsList } = this.props

        console.log(newsList)
        return (
            <ul>
                {
                    newsList.map((newsItem) => {
                        return (
                            <li key={newsItem.image}><NewsItem
                                newsItem={newsItem}
                            /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

// const NewsList = () => {

//     useEffect(() => {
//         console.log('mount')
//     }, [])

//     return (
//         <div>
//             <NewsItem />
//             <NewsItem />
//             <NewsItem />
//         </div>
//     )
// }

// export default NewsList
