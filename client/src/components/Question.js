import React from 'react'

const Qestion = ( { children, title, id} ) => {
    return (
        <div id={id}>
            <h3> <span className="question-title">{title} </span> </h3>
            <p className="question-body"> {children} </p>
        </div>
    )
}

export default Qestion
