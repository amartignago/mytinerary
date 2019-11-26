import React, {Component, Fragment} from 'react';
import NavBar from './NavBar.js'
import '../styles/App.css'
import {connect} from 'react-redux';
import {fetchItineraries} from '../actions/itinerariesActions';
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
            clicked: false
        }
    };
    static propTypes = {
        dispatch: PropTypes.func,
      };

    toggle = (id) => {
        this.setState(() => ({ open: id, clicked: !this.state.clicked }));
    }

    componentDidMount() {
        let id = this.props.match.params.cityID;
        console.log(id);
        this.props.dispatch(fetchItineraries(id))
       .then(() => console.log('hola, funciono!'))
    };


render() { 
    const itineraries = this.props.itineraries
    // const id=this.props.match.params.cityID;
    // const cities =this.props.cities;

    return ( <div className="container">
        <NavBar/>
        <Fragment>
            <h3 className="text-center mb-4">Available Mytineraries:</h3>
            {itineraries.map(itinerary =>     
            <Fragment> 
                <div> 
                    {/* <img src={city.img} className="img-fluid cityImg" alt=" "/>
                    <span><h2 className="overlayText">{city.name}</h2></span> */}
                </div>
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
                        {/* {!this.state.clicked?( */}
                        <button id={itinerary._id} className="btn btn-light btn-block" onClick={()=>{this.toggle(itinerary._id)}}>View All</button>
                        {/* // ): //"else" */}
                        <Expand open={this.state.open==itinerary._id && this.state.clicked==true}>
                            <Activities itinerary={itinerary} ></Activities>
                            <button id={itinerary._id} className="btn btn-light btn-block" onClick={()=>{this.toggle('close')}}>Close</button> 
                        </Expand>
                        {/* } */}
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
        cities:state.citiesReducer.cities,
        itineraries: state.itinerariesReducer.itineraries // aca le digo que va a tener una prop itineraries que va a ser manejada por X reducer
    }
}

export default connect(mapStateToProps)(Itineraries); // 