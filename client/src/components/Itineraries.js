import React, {Component} from 'react';
import NavBar from './NavBar.js'
import ItinerariesList from './ItinerariesList.js'
import '../styles/App.css'
import {connect} from 'react-redux';
import {fetchItineraries} from '../actions/itinerariesActions';
import PropTypes from 'prop-types';


class Itineraries extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    };
    static propTypes = {
        dispatch: PropTypes.func,
      }
    
    componentDidMount() {
        let id = this.props.match.params.cityID;
        console.log(id);
        
       this.props.dispatch(fetchItineraries(id))
       .then(() => console.log('hola, funciono!'))
    }

render() { 
    const itineraries = this.props.itineraries

    return ( <div className="container">
    <NavBar/>
    <h1>Itineraries Page</h1>
    <div>
     <ItinerariesList itineraries = {itineraries}/> 
     </div>
</div>
 )}
 //aca renderizaria mi pagina segun ciudad, prop itineraryCity
}


const mapStateToProps = (state) => { // aca estoy pasando el state del storage como props para ESTE componente
    console.log(state);
    return {
        itineraries: state.itinerariesReducer.itineraries // aca le digo que va a tener una prop itineraries que va a ser manejada por X reducer
    }
}

export default connect(mapStateToProps)(Itineraries); // 