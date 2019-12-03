import React, {Component, Fragment} from 'react';
import NavBar from './NavBar.js'
import '../styles/App.css'
import {connect} from 'react-redux';
import {fetchItineraries} from '../actions/itinerariesActions';
import {fetchActivities} from '../actions/activitiesActions';
import PropTypes from 'prop-types';
import Expand from 'react-expand-animated';
import Activities from './Activities.js';
import urlImages from './constants';
import {
    Link
  } from "react-router-dom";


class Itineraries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open:false,
            clicked: false,
        }
    };
    static propTypes = {
        dispatch: PropTypes.func,
      };

    toggle = (itinID) => {
        this.setState(() => ({ open: itinID, clicked: !this.state.clicked }));
        this.props.dispatch(fetchActivities(itinID));
    }

    componentDidMount() {
        let cityID = this.props.match.params.cityID;
        console.log(cityID);
        this.props.dispatch(fetchItineraries(cityID))
       .then(() => console.log(this.props))
    };


render() { 
    const itineraries = this.props.itineraries
    const activities = this.props.activities
    const city = this.props.city

 
    return ( <div className="container">
        <Fragment>
            <div className="container responsiveDiv mb-4 mt-4 text-center h-20"> 
                {city.img && <img src={`${urlImages.urlImages}/images/cities/${city.img}`} className="img-fluid cityImg h-10 w-100" alt=" "/>}
                <span><h2 className="overlayText text-center">{city.name}</h2></span>
            </div>
            <h3 className="text-center m-5">Available Mytineraries:</h3>
            {itineraries.map(itinerary =>     
            <Fragment> 
                <ul className='nonStyleUl p-0'>
                <li key={itinerary._id}>
                    <div className="row itineraryPrev bd-highlight m-0 mb-1 p-2 pb-0 container-fluid">
                        <div className="col-xs-3 pr-0 pl-0 mr-2 justify-content-center">
                            <img className="row userImg m-0" src={`${urlImages.urlImages}/images/users/${itinerary.userPhoto}`} alt=" "/>
                            <span className="row userText m-0 p-0">{itinerary.userName}</span>
                        </div>
                        <div className="col-xs-9 flex-column mb-0 itinText d-flex justify-content-around">
                            <div className="p-3 bd-highlight font-weight-bold">
                                {itinerary.title}
                            </div>
                            <div className="p-3 d-flex justify-content-around">
                                <span >Likes: {itinerary.rating}</span>
                                <span >{itinerary.duration} hs</span>
                                <span >$ {itinerary.price}</span>
                            </div>
                            <div className="p-3 d-flex justify-content-around">
                                {itinerary.hashtag.map (hashtag => 
                                    <span>{hashtag}</span>
                                )}
                            </div>
                        </div>
                    <div className="row col-xs-12 ml-0 pl-0 pr-0 mr-0 d-inline-block container-fluid">
                        <button id={itinerary._id} className="btn btn-light btn-block" onClick={()=>{this.toggle(itinerary._id)}}>View All</button>
                        <Expand open={this.state.open==itinerary._id && this.state.clicked==true}>            
                            <Activities activities={activities}></Activities>
                            <button id={itinerary._id} className="btn btn-light btn-block" onClick={()=>{this.toggle()}}>Close</button> 
                        </Expand>
                    </div>
                    </div>
                </li>
                </ul>
            </Fragment>)}
        </Fragment>
        <div className=" itinText text-center mt-5">
            <Link to="/cities">Choose another city...</Link>
        </div>
    </div>
 )}
}


const mapStateToProps = (state) => { // aca estoy pasando el state del storage como props para ESTE componente
    console.log(state);
    return {
        itineraries: state.itinerariesReducer.itineraries,
        activities: state.activitiesReducer.activities,
        city: state.itinerariesReducer.city
      
        // cities: state.citiesReducer.cities.map(city => city.indexOf(city._id==this.props.match.params.cityID) )
    }
}


export default connect(mapStateToProps)(Itineraries); // 