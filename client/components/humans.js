import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {NavLink} from 'react-router-dom'

const Humans = (props) => {
    return (<div className="rats">
        <h3>Humans</h3><span>Total Humans: {props.humans.length}</span>
        <table className="table table-striped table-hover col-sm-11">
        <thead>
            <tr className="row">
            <th>ID</th>
            <th>Name</th>
            <th>Vaccinations</th>
            </tr>
        </thead>
        <tbody>
        {props.humans && props.humans.sort((a,b) => (b.points - a.points)).map(human => (
        <tr key={human.id} className="row">
                <td>{human.id}</td>
                <td><NavLink to={`/users/${human.id}`}>{human.username}</NavLink></td>
                <td>{human.points}</td>
            </tr>)
        )}
        </tbody>
        </table>
    </div>    
    )}

export default withRouter(connect(null, null)(Humans))