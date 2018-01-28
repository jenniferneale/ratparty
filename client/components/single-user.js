import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile, addPoint } from '../store'

class SingleUser extends Component {    

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.props.loadUser(userId)        
    }

    render() {
        const user = this.props.currentUserView;
        return (
            <div>
                {(user && user.id) ?
                    <div>
                        <h1>{user.username}</h1>
                        <h5>{ user.isRat ? 'Rat' : 'Human' }</h5>
                        {/*<img src={tutor.img} className="profileImg" />*/}
                        <p>{ user.isRat ? 'Bites' : 'Vaccinations' } {user.points}</p>
                        <div className="col-10 offset-1">
                            <img onClick={this.props.clickPoint} className={`img-fluid ${user.isRat? 'ratClick' : 'humanClick'}`} />
                            <h2 className="text-centered-img">{user.isRat ? 'Bite!' : 'Vaccinate!'}</h2>
                        </div>
                    </div>   
                    :
                    <div>User not yet loaded</div>                 
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
            dispatch(addPoint(ownProps.match.params.userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)
