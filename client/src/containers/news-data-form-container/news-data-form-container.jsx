import React from 'react'
import NewsDataForm from '../../components/news-data-form/news-data-form'
import { useInput } from '../../components/form-verification-hook/form-verification-hook'

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
        .then(alert('Новость опубликована'))
}

const NewsDataFormContainer = () => {

    const title = useInput('', { isEmpty: true, maxLengthError: 256 })
    const shortDescription = useInput('', { isEmpty: true, maxLengthError: 256 })
    const fullDescription = useInput('', { isEmpty: true, maxLengthError: 2048 })
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