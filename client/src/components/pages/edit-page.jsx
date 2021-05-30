import React from 'react'
import { Redirect } from 'react-router-dom'
import NewsDataForm from '../news-data-form/news-data-form'

const EditPage = ({ isAdmin }) => {

    if (isAdmin) {
        return <NewsDataForm />
    }

    return <Redirect to='/' />
}

export default EditPage