import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile, addPoint } from '../store'
import { Signup } from './auth-form';

class FirstBite extends Component {
    
    componentDidMount() {
        
    }

    render() {
        const sireId = this.props.match.params.sireId;
        return (
            <div>
                <p>Oh god! You've been bitten by a rat! Quick, do something!</p>
                <Signup sireId={sireId} />
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
