import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile, addPoint } from '../store'

class FirstBite extends Component {
    
    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                Some text here
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

export default connect(mapStateToProps, mapDispatchToProps)(FirstBite)
