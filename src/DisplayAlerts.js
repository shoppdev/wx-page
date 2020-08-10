 import React from 'react'
 import AlertCard from './AlertCard'

 const DisplayAlerts = ({ alerts }) =>{
    console.log(alerts)
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

export default DisplayAlerts