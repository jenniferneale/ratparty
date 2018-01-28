import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

const HumanTotal = (props) => 
    (<div>
        <p>Total Vaccinations: {props.total}</p>
    </div>
    )

export default withRouter(connect(null, null)(HumanTotal))