import React from 'react'
import './news-data-form.css'

const NewsDataForm = ({ title, shortDescription, fullDescription, image, onSubmitHandler }) => {

    return (
        <div className='news-data'>
            <h2>Подготовка новости к публикации</h2>
            <form className='form' onSubmit={onSubmitHandler}>
                <div className='input-area'>
                    <label htmlFor='title'>
                        Заголовок новости:
                    </label>

                    {(title.isDirty && title.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым!</div>}

                    {(title.isDirty && title.maxLengthError) && <div style={{ color: 'red' }}>Заголовок новости не должен превышать 256 символов!</div>}

                    <input
                        value={title.value}
                        onChange={e => title.onChange(e)}
                        onBlur={e => title.onBlur(e)}
                        name='title'
                        type='text'
                        id='title'
                        placeholder='Введите заголовок новости' />
                </div>

                <div className='input-area'>
                    <label htmlFor='shortDescription'>
                        Краткое описание новости:
                    </label>

                    {(shortDescription.isDirty && shortDescription.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым!</div>}

                    {(shortDescription.isDirty && shortDescription.maxLengthError) && <div style={{ color: 'red' }}>Описание новости не должно превышать 256 символов!</div>}

                    <input
                        value={shortDescription.value}
                        onChange={e => shortDescription.onChange(e)}
                        onBlur={e => shortDescription.onBlur(e)} name='shortDescription'
                        type='text'
                        id='shortDescription'
                        placeholder='Введите краткое описание новости' />
                </div>

                <div className='input-area'>
                    <label htmlFor='fullDescription'>
                        Полный текст новости:
                </label>
                    {(fullDescription.isDirty && fullDescription.isEmpty) && <div style={{ color: 'red' }}>Поле не может быть пустым!</div>}

                    {(fullDescription.isDirty && fullDescription.maxLengthError) && <div style={{ color: 'red' }}>Текст новости не должен превышать 256 символов!</div>}
                    <textarea
                        value={fullDescription.value}
                        onChange={e => fullDescription.onChange(e)}
                        onBlur={e => fullDescription.onBlur(e)} name='fullDescription'
                        type='text'
                        id='fullDescription'
                        placeholder='Введите полное описание новости' />
                </div>

                <div className='input-area'>
                    {!image.isFileSelect && <div style={{ color: 'black', fontSize: '1.3rem' }}>Выберите прикрепляемое изображение:</div>}
                    <input
                        className='image-input'
                        name='image'
                        type='file'
                        accept='image/*'
                        onChange={e => image.onChange(e)} />
                </div>

                <button disabled={!title.inputValid || !shortDescription.inputValid || !fullDescription.inputValid || !image.inputValid} type='submit'>Опубликовать</button>
            </form>
        </div>
    )
}

export default NewsDataForm
