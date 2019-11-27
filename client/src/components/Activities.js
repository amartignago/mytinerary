import Carousel from 'react-bootstrap/Carousel';
import urlImages from './constants';
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Activities extends Component {
  constructor(props) {
      super(props) 
      this.state = {
        }
    };
    
  static propTypes = {
  dispatch: PropTypes.func,
  };

  render() { 
    // const activities = this.props.activities; 
    
    return ( <Fragment>
        <h4 className="text-left m-4 itinText font-weight-bold">Activities:</h4>
        <div className="d-flex container-fluid justify-content-center">
        <Carousel className="mt-5 mb-3">
            {this.props.activities.map(activity => 
                    <Carousel.Item>
                        <img
                            className="d-block w-100 itinText CarouselImg"
                            src={`${urlImages.urlImages}/images/activities/${activity.photo}`}
                            alt={activity.name}
                        />
                        <Carousel.Caption>
                            <h3 className="text-dark carouselCaption">{activity.name}</h3>
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
      activities: state.activitiesReducer.activities
  }
}

export default connect(mapStateToProps)(Activities); // 

