import React, {Component, Fragment} from 'react';
import NavBar from './NavBar.js'
import '../styles/App.css'
import {connect} from 'react-redux';
import {fetchItineraries} from '../actions/itinerariesActions';
import PropTypes from 'prop-types';
import Expand from 'react-expand-animated';
import Activities from './Activities.js'


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
        this.setState(() => ({ open: id, clicked: !this.state.clicked }))
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
        <h3 className="text-left">Available Mytineraries:</h3>
        {itineraries.map(itinerary =>     
        <Fragment> 
            <div> 
                {/* <img src={city.img} className="img-fluid cityImg" alt=" "/>
                <span><h2 className="overlayText">{city.name}</h2></span> */}
            </div>
            <ul className='nonStyleUl'>
            <li key={itinerary._id}>
                <div className="row itineraryPrev">
                    <div className="col-sm-3">
                        <img className="row" src={itinerary.userPhoto} alt=" "/>
                        <span className="row itinText">{itinerary.userName}</span>
                    </div>
                    <div className="col-sm-9">
                        <div className="row">
                            {itinerary.title}
                        </div>
                        <div className="row">
                            <span className="col-sm-4">Likes: {itinerary.rating}</span>
                            <span className="col-sm-4">{itinerary.duration} hs</span>
                            <span className="col-sm-4">$ {itinerary.price}</span>
                        </div>
                        <div className="row">
                            {itinerary.hashtag}
                        </div>
                    </div>
                <div className="row col-sm-12 ml-0 pl-0 pr-0 mr-0 d-inline-block container-fluid">
                    {/* {!this.state.clicked?( */}
                    <button id={itinerary._id} className="btn btn-light btn-block" onClick={()=>{this.toggle(itinerary._id)}}>View All</button>
                    {/* // ): //"else" */}
                    <Expand open={this.state.open==itinerary._id && this.state.clicked==true}>
                        <Activities itineraries = {itineraries} ></Activities>
                        <button id={itinerary._id} className="btn btn-light btn-block" onClick={()=>{this.toggle('close')}}>Close</button> 
                    </Expand>
                    {/* } */}
                </div>
                </div>
            </li>
            </ul>
        </Fragment>)}
    </Fragment>
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