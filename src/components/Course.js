import React from 'react'

const Course = ({ name, url }) => {
    return (
        <div>
            <a href={url}>{name}</a>
        </div>
    )
}

export default Course

