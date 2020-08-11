import React from 'react';
import './App.css';
import DisplayAlerts from './DisplayAlerts'
import DisplayData from './DisplayData'
import Search from './Search'
import SearchButton from './SearchButton'
import 'tachyons'


var nationalURL = 'https://api.weather.gov/alerts'
//var stateURL = 'https://api.weather.gov/alerts/active?area=KS'



class App extends React.Component{
constructor(props){
  super(props)
  this.state = {
    alerts: [],
    isLoaded: 'False',
    searchField: ''
  }
}

componentDidMount(){
  fetch(nationalURL)
  .then(resp => resp.json())
  .then(alerts => this.setState({alerts: alerts['features']}))
  .then(done => this.setState({isLoaded: 'True'}))
}

//recieve user selection to filter results
onSelect = (event) =>{
  //console.log(event.target.value)
  this.setState({searchField: event.target.value}) 
}

render(){
//filter results based on user choices
const filteredAlerts = this.state.alerts.filter(alert =>{
  return alert.properties.areaDesc.includes(this.state.searchField)
})

  if(this.state.isLoaded === "False"){
    return<h1>Loading...</h1>
  }else{
    return(
      <div>
        <header>
        <Search onSelect={this.onSelect}/>
        {/* <SearchButton /> */}
        </header>
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">
            <div className="fl w-100 w-50-ns pa2">
              <div className="outline bg-none pv4">
                <DisplayAlerts alerts={filteredAlerts} />
              </div>
            </div>
            <div className="fl w-100 w-50-ns pa2">
            <div className="outline bg-none pv4">
              <DisplayData />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
}

export default App;