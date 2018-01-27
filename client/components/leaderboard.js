import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile, addPoint } from '../store'

class Leaderboard extends Component {
    
    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                Leaderboard goes here
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        //currentUserView: state.currentUserView
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)
