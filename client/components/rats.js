import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import {NavLink} from 'react-router-dom'

const Rats = (props) => {
    return (<div className="rats">
        <h3>Rats</h3><span>Total Rats: {props.rats.length}</span>
        <table className="table table-striped table-hover col-sm-11">
        <thead>
            <tr className="row">
            <th>ID</th>
            <th>Name</th>
            <th>Bites</th>
            </tr>
        </thead>
        <tbody>
        {props.rats && props.rats.sort((a,b) => (b.points - a.points)).map(rat => (
        <tr key={rat.id} className="row">
                <td>{rat.id}</td>
                <td><NavLink to={`/users/${rat.id}`}>{rat.username}</NavLink></td>
                <td>{rat.points}</td>
            </tr>)
        )}
        </tbody>
        </table>
    </div>    
    )}

export default withRouter(connect(null, null)(Rats))