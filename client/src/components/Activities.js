import React, {Component, Fragment} from 'react';
import Carousel from 'react-bootstrap/Carousel'
import foto from '../images/GaudiLover.png'

class Activities extends Component {
    render() { return ( <Fragment>
        <div className="">
            {/* recibir id de itin como prop */}
                <Carousel className="mt-5 mb-3">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={foto}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={foto}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={foto}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
            </Carousel> 
        </div>
    </Fragment>
);
}
}

export default Activities;