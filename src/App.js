import React from 'react';
import './App.css';
import DisplayAlerts from './DisplayAlerts'


var nationalURL = 'https://api.weather.gov/alerts'
var stateURL = 'https://api.weather.gov/alerts/active?area=KS'



class App extends React.Component{
constructor(props){
  super(props)
  this.state = {
    alerts: [],
    isLoaded: 'False'
  }
}

componentDidMount(){
  fetch(nationalURL)
  .then(resp => resp.json())
  .then(alerts => this.setState({alerts: alerts['features']}))
  .then(done => this.setState({isLoaded: 'True'}))
}

render(){
  if(this.state.isLoaded === "False"){
    return<h1>Loading...</h1>
  }else{
    return(
      <div>
        <DisplayAlerts alerts={this.state.alerts}/>
      </div>
    )
  }
}
}

export default App;