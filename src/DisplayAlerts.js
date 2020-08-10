 import React from 'react'
 import AlertCard from './AlertCard'

 const DisplayAlerts = ({ alerts }) =>{
     return(
         <div>
             {
                 alerts.map((alert, i)=>{
                     return <AlertCard />
                 })
             }
         </div>
     )
 }

export default DisplayAlerts