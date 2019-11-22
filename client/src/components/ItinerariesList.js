import React, {Component} from 'react'; 

 const ItinerariesList = ({itineraries}) =>
   itineraries.map(itinerary => <li key={itinerary._id}>{itinerary.title}</li>);
 
export default ItinerariesList
