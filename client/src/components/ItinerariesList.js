import React, {Component, Fragment} from 'react'; 


 const ItinerariesList = ({itineraries}) =>
   itineraries.map(itinerary => <Fragment>
    {/* <div> deberia recibir city como un param
      <img src={city.img} className="img-fluid cityImg" alt=" "/>
      <span><h2 className="overlayText">{city.name}</h2></span>
    </div> */}
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
        </div>
      </li>
    </ul>
  </Fragment>);
 
export default ItinerariesList
