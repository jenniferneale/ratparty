import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile, addPoint } from '../store'

class singleTutor extends Component {
    state = {
        loading: true
      }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.loadUser(userId)
        console.log('UserId: ', userId)
    }

    render() {
        const user = this.props.currentUserView;
        return (
            <div>
                {user && user.id && 
                    <div>
                        <h1>{user.username}</h1>
                        <h5>{ user.isRat ? 'Rat' : 'Human' }</h5>
                        {/*<img src={tutor.img} className="profileImg" />*/}
                        <p>{ user.isRat ? 'Bites' : 'Antibodies' } {user.points}</p>
                        <button onClick={this.props.clickPoint}>{user.isRat ? 'Bite!' : 'Vaccinate!'}</button>                      
                    </div>                    
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUserView: state.currentUserView
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        loadUser: userId => {
            dispatch(fetchProfile(userId))            
        },
        clickPoint: e => {
            e.preventDefault();
            console.log(ownProps.match.params.userId)
            dispatch(addPoint(ownProps.match.params.userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(singleTutor)
