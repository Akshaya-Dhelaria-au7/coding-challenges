import React , { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux'
import {countryActionFunction , searchCountry} from '../react_redux/actions/actionTypes'

class Countries extends Component{

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        console.log("Props are",this.props)
        const {countryData} = this.props
        const fetchFromApi = await Axios.get('https://restcountries.eu/rest/v2/all')
        .then((data) => countryData(data.data))
        .catch((error) => console.log("Error while fetching is" , error))
    }
    render(){
        if(this.props.countries[0] == undefined){
            return null
        }
        // console.log("Props in render is" , this.props.countries[0])
        const {countries} = this.props
        return(
            <div>
                <nav>
                    <h3>Where in the world?</h3>
                    <br/>
                    <span>
                    <input type="search" name="search-country" placeholder="Search" />
                    <button><i className="fa fa-search"></i></button>
                    </span>
                </nav>
                {
                   countries[0].map((country,idx) => (
                       <div className="container">
                        <div className="card col-sm-3">
                                <img 
                                className = "card-img-top"
                                src = {country.flag}
                                alt = {country.name}
                                />
                                <div className="row">
                                    <div className="column">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5  className="card-title" key={idx}>{country.name}</h5>
                                                <p className="class-text">Population: {country.population}</p>
                                                <p className="class-text">Region: {country.region}</p>
                                                <p className="class-text">Capital: {country.capital}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const stateMapper = state => {
    // console.log("State is",state.countries)
    return { 
        countries : state.countries
    }
}

const dispatchMapper = dispatch => {
    return {
        countryData: (eachData) => {
            dispatch({
                type:"GET_COUNTRIES",
                payload:eachData
            })
        }
    }
}

export default connect(stateMapper , dispatchMapper)(Countries);