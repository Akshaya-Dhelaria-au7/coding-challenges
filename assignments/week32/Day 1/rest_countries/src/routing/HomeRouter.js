import React , {Component} from 'react';
import {Link,Switch,Route} from 'react-router-dom'
import Countries from '../component/countries'
import Search from '../component/search'

class Homerouter extends Component{
    render(){
        // console.log("Props in home router is" , this.props)
        return(
            <div>
                <ul>
                    <Link to='/'>All countries</Link>
                    <Link to='/search/:country_name'>Search for a country</Link>
                </ul>
                <Switch>
                    <Route path='/' exact component={Countries} />
                    <Route path='/search/:country_name' exact component={Search} />
                </Switch>
            </div>
        )
    }
}

export default Homerouter;