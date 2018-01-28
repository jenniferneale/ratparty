import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

const RatTotal = (props) => 
    (<div>
        <p>Total Bites: {props.total}</p>
    </div>
    )

export default withRouter(connect(null, null)(RatTotal))