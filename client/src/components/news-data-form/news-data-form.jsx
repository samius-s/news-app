import React from 'react'
import './news-data-form.css'

const NewsDataForm = () => {
    return (
        <div className='news-data'>
            <h2>Подготовка новости к публикации:</h2>
            <form className='news-data-form'>

                <input name='title' type='text' placeholder='Введите заголовок новости' />
                <input name='shortDescription' type='text' placeholder='Введите краткое описание новости' />
                <textarea name='fullDescription' type='text' placeholder='Введите полное описание новости' />
                <input name='image' type='text' placeholder='Введите image' />
            </form>
        </div>
    )
}

export default NewsDataForm

