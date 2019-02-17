import React from 'react'


const Kideapp = ( { props }) => {
    return (
        <div>
            <a rel="noopener noreferrer" target="_blank" href={`https://bailataan.fi/events/${props.id}`}>{props.name}</a>
        </div>
    )
}

export default Kideapp