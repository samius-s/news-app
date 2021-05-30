import React, { useEffect, useState } from 'react'
import './news-data-form.css'

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [isFileSelect, setFileSelect] = useState(true)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {

            switch (validation) {
                case 'maxLengthError':
                    value.length > validations[validation]
                        ? setMaxLengthError(true)
                        : setMaxLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isFileSelect':
                    if (value) {
                        setFileSelect(true)
                        setMaxLengthError(false)
                        setEmpty(false)
                    } else {
                        setFileSelect(false)
                    }
                    // value ? setFileSelect(true) : setFileSelect(false)
                    break;
                default:
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || maxLengthError || !isFileSelect) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, maxLengthError, isFileSelect])

    return {
        isEmpty,
        maxLengthError,
        isFileSelect,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {
        value,
        isDirty,
        onBlur,
        onChange,
        ...valid
    }
}

const NewsDataForm = () => {

    const title = useInput('', { isEmpty: true, maxLengthError: 256 })
    const shortDescription = useInput('', { isEmpty: true, maxLengthError: 256 })
    const fullDescription = useInput('', { isEmpty: true, maxLengthError: 2048 })
    const image = useInput('', { isFileSelect: true })

    return (
        <div className='news-data'>
            <h2>Подготовка новости к публикации</h2>
            <form className='form'>
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

