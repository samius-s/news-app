import React from 'react'
import NewsDataForm from '../../components/news-data-form/news-data-form'
import { useInput } from '../../components/form-verification-hook/form-verification-hook'
import { useSelector } from 'react-redux'

const onSubmitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append('title', e.target.elements.title.value)
    formData.append('shortDescription', e.target.elements.shortDescription.value)
    formData.append('fullDescription', e.target.elements.fullDescription.value)
    formData.append('image', e.target.elements.image.files[0])

    const requestOptions = {
        method: 'POST',
        body: formData
    };
    fetch('http://localhost:5000/api/news', requestOptions)
        .then(response => response.json())
        .then(
            e.target.elements.title.value = '',
            e.target.elements.shortDescription.value = '',
            e.target.elements.fullDescription.value = '',
            e.target.elements.image.files[0].length = 0)
        .then(alert('Новость опубликована'))
}

const NewsDataFormContainer = () => {

    const newsItemToEdit = useSelector(state => state.newsItemToEdit)

    const a = {}

    if (newsItemToEdit) {
        a.title = newsItemToEdit.title
        a.shortDescription = newsItemToEdit.shortDescription
        a.fullDescription = newsItemToEdit.fullDescription
    }

    const title = useInput(a.title || '', { isEmpty: true, maxLengthError: 256 })
    const shortDescription = useInput(a.shortDescription || '', { isEmpty: true, maxLengthError: 256 })
    const fullDescription = useInput(a.fullDescription || '', { isEmpty: true, maxLengthError: 2048 })
    const image = useInput('', { isFileSelect: true })

    return <NewsDataForm
        title={title}
        shortDescription={shortDescription}
        fullDescription={fullDescription}
        image={image}
        onSubmitHandler={onSubmitHandler}
    />
}

export default NewsDataFormContainer