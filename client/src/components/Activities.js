import Carousel from 'react-bootstrap/Carousel';
import urlImages from './constants';
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MaterialIcon, {colorPalette} from 'material-icons-react';
import '../styles/App.css'

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
        <h4 className="text-left m-3 itinText font-weight-bold">Activities:</h4>
        <div className="d-flex container-fluid row justify-content-center">
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
        <div className="mt-4 inlineForm">
            {/* agregarle a Form onSubmit={lo que quiera que haga, agregarle  event.preventDefault()} */}
            <Form> 
                    <Form.Group as={Row} controlId="sendActComment" className="inlineForm">
                        <Form.Label column xs={2} className="ml-3"><span className="itinText font-weight-bold">Comments</span></Form.Label>
                        <Col xs={8}>
                            <Form.Control type="input"  placeholder="Your comment..." />
                        </Col>
                        <Col xs={1}>
                            {/* ver de agregarle onClick={this.onSubmit} al boton */}
                            <Button type="submit" >
                                <MaterialIcon icon="arrow_forward_ios" size={20} />
                            </Button>
                        </Col> 
                    </Form.Group>
                   
            </Form>
        </div>
</Fragment>
);
}
}

const mapStateToProps = (state) => { 
  return {
      activities: state.activitiesReducer.activities
  }
}

export default connect(mapStateToProps)(Activities); // 

