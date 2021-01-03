import React , { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux'
import {searchCountry} from '../react_redux/actions/actionTypes'

class Search extends Component{

    changeHandler = (e) => {
        const {name,value} = e.target
        // console.log(name,value)
        // console.log("Props in search query " , this.props)
        this.props.match.params = value
    }

    searchHandler = (e) => {
        e.preventDefault()
        this.fetchData()
    }   

    fetchData = async () => {
        console.log("Props are",this.props)
        const {searchData} = this.props
        const fetchFromApi = await Axios.get(`https://restcountries.eu/rest/v2/name/${this.props.match.params}`)
        // .then((data) => console.log(data.data))
        .then((data) => searchData(data))
        .catch((error) => console.log("Error while fetching is" , error))
    }
    render(){
        // if(this.props.searchCountry.data == undefined){
        //     return null
        // }
        // const {countries} = this.props
        console.log("Props in search render" , this.props)
        return(
            <div>
                <nav>
                    <h3>Where in the world?</h3>
                    <br/>
                    <span>
                    <input type="search" name="search-country" onChange={this.changeHandler} placeholder="Search" />
                    <button><i className="fa fa-search" onClick={this.searchHandler}></i></button>
                    </span>
                </nav>
            </div>
        )
    }
}

const stateMapper = state => {
    console.log("State is",state)
    return { 
        searchCountry : state.search_query
    }
}

const dispatchMapper = dispatch => {
    return {
        searchData: (search) => {
            dispatch({
                type:"SEARCH_COUNTRIES",
                payload:search
            })
        }
    }
}

export default connect(stateMapper,dispatchMapper)(Search);