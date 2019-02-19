import React from 'react'

export const Input = (props) => {
    return (
        <div className="form-label-group">
            <input type={ props.type } id={ props.id } className="form-control" placeholder={ props.placeholder } required/>
            <label htmlFor={ props.id }> { props.children } </label>
        </div>
    )
}