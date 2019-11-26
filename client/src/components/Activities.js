import React, {Component, Fragment} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import urlImages from './constants';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchActivities} from '../actions/activitiesActions';

class Activities extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          }
      };
      
    static propTypes = {
    dispatch: PropTypes.func,
    };

    componentDidMount() {
        let id = this.props.itinerary._id;
        console.log(id);
        this.props.dispatch(fetchActivities(id))
       .then(() => console.log('working'))
    };


    render() { 
        const activities = this.props.activities; 
        
        return ( <Fragment>
        <div className="d-flex mt-2 container h-70">
            <h4 className="text-center mb-4 itinText font-weight-bold">Activities:</h4>
            <Carousel className="mt-5 mb-3">
                {activities.map(activity => 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 itinText"
                                src={`${urlImages.urlImages}/images/activities/${activity.photo}`}
                                alt={activity.name}
                            />
                            <Carousel.Caption>
                                <h3 className="text-dark">{activity.name}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                )}
            </Carousel> 
        </div>
    </Fragment>
);
}
}

const mapStateToProps = (state) => { 
    console.log(state);
    return {
        itineraries: state.itinerariesReducer.itineraries,
        activities: state.activitiesReducer.activities
    }
}

export default connect(mapStateToProps)(Activities); // 