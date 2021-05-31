import React from 'react'
import { Redirect } from 'react-router-dom'
import NewsDataFormContainer from '../../containers/news-data-form-container/news-data-form-container'

const EditPage = ({ isAdmin }) => {

    if (isAdmin) {
        return <NewsDataFormContainer />
    }

    return <Redirect to='/' />
}

export default EditPage