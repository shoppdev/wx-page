import React from 'react'

const AlertCard = ({location, event, expires, headline, instruction}) =>{
    return(
        <div className="window">
            <p>{location}</p>
            <p>{event}</p>
            <p>{expires}</p>
            <p>{instruction}</p>
        </div>
    )
}

export default AlertCard