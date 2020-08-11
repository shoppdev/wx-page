import React from 'react';
import './App.css';
import DisplayAlerts from './DisplayAlerts'
import DisplayData from './DisplayData'
import 'tachyons'


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
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-50-ns pa2">
            <div className="outline bg-none pv4">
              <DisplayAlerts alerts={this.state.alerts} />
            </div>
          </div>
          <div className="fl w-100 w-50-ns pa2">
          <div className="outline bg-none pv4">
            <DisplayData />
          </div>
        </div>
      </div>
    </div>
    )
  }
}
}

export default App;