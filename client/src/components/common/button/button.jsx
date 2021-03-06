import React from 'react'
import './button.css'

const Button = ({ type, onAction }) => {
    //type => обозначение "fa fa-pencil" с https://fontawesome.bootstrapcheatsheets.com/
    return (
        <button className="control-button" onClick={onAction}><i className={type} /></button>

    )
}

export default Button