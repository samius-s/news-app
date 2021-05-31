import React from 'react'
import './full-news-item.css'

const FullNewsItem = ({ newsItem }) => {

    const { fullDescription, image, title, shortDescription } = newsItem

    const fullDescriptionEdit = fullDescription.split('\\n').map((text) => {
        return (
            <p>{text}</p>
        )
    })

    const imgUrl = `http://localhost:5000/newsImage-${image}.jpg`

    return (
        <article className='full-news-list'>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
            <div className='image-container'>
                <img src={imgUrl} alt='cover' />
            </div>

            {fullDescriptionEdit}
            {/* <p>{fullDescription}</p> */}

        </article>
    )
}

export default FullNewsItem