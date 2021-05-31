import React from 'react'
import NewsDataForm from '../../components/news-data-form/news-data-form'
import { useInput } from '../../components/form-verification-hook/form-verification-hook'

const onSubmitHandler = (e) => {
    e.preventDefault()
    // debugger
    const title = e.target.elements.title.value
    const shortDescription = e.target.elements.shortDescription.value
    const fullDescription = e.target.elements.fullDescription.value
    const image = e.target.elements.image.value

    const a = { title, shortDescription, fullDescription, image }
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(a)
    };
    fetch('http://localhost:5000/api/news', requestOptions)
        .then(response => response.json())
        .then(console.log('post', a));
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