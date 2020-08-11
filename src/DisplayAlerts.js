 import React from 'react'
 import AlertCard from './AlertCard'

 const DisplayAlerts = ({ alerts }) =>{
    if(alerts.length <= 0){
        return <h1>All Clear! ^.^</h1>
    } else {
        return(
            <div>
                {
                    alerts.map((alert,i)=>{
                        return <AlertCard
                        key={i}
                        location={alert.properties.areaDesc}
                        event={alert.properties.event}
                        expires={alert.properties.expires}
                        headline={alert.properties.headline}
                        instruction={alert.properties.instruction}
                        />
                    })
                }
            </div>
        )
    }
 }

export default DisplayAlerts