import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HumanTotal, RatTotal, Humans, Rats } from './index'
import { fetchRats, fetchHumans } from '../store'

class Leaderboard extends Component {

    componentDidMount() {
        this.props.dispRats();
    }

    render() {
        return (
            <div>
                <p>Leaderboard goes here</p>
                <RatTotal total={this.props.users.ratPoints} />
                <HumanTotal total={this.props.users.humanPoints} />
                <Rats rats={this.props.users.rats} />
                <Humans humans={this.props.users.humans} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersView
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        dispRats: () => {
            dispatch(fetchRats())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard)
