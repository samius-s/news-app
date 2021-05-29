import React from 'react'
import './button.css'

const Button = ({ type }) => {
    //type => обозначение "fa fa-pencil" с https://fontawesome.bootstrapcheatsheets.com/
    return (
        <button className="control-button"><i className={type} /></button>

    )
}

export default Button