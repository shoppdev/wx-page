import React from 'react'

const AlertCard = ({location, event, expires, headline, instruction}) =>{
    return(
        <div className="ba bw1 br3 grow bg-white ma2 tc shadow-5">
            <p>{location}</p>
            <p>{event}</p>
            <p>Expires: {expires}</p>
            <p>{instruction}</p>
        </div>
    )
}

export default AlertCard

//use border colors to represent alert type