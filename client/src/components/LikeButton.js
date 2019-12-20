import React, {Component} from 'react';
import {fetchFav} from '../actions/favouritesActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const likeMeName="like me!";
const dislikeMeName="dislike me :(" 

class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            liked: false,
            name: likeMeName
        }
    }

    static propTypes = {
        dispatch: PropTypes.func,
      };

    async fetchFavFunction(itinID) {
        if (localStorage.token) {
            const token = localStorage.token
            await this.props.dispatch(fetchFav(token, itinID));
            this.checkIsFav()
        } else {
            return null
        }

    }

    checkIsFav=()=> {  
        const itinFav= this.props.favourites;
        if ((itinFav) && (itinFav.liked===true)) {
                this.setState({  
                    name: dislikeMeName
                })
        } else {
                this.setState({
                    liked:false,
                    name: likeMeName
                })
        } 
    } 
      
    async componentDidMount() {
       await this.fetchFavFunction(this.props.itinID)
    }
    

    render() 
        { return ( 
            <div className="col-xs-3 float-right">
                <button id={this.props.itinID} onClick={()=>{this.fetchFavFunction(this.props.itinID)}}>
                    {this.state.name}
                </button>
            </div>

        )}
}

const mapStateToProps = (state) => { 
    return {
        favourites: state.favouritesReducer
    }
}

export default connect(mapStateToProps)(LikeButton);