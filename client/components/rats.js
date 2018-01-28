import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

const Rats = (props) => 
    (<div>
        {props.rats && props.rats.length && <p>Total Rats: {props.rats.length}</p>}
    </div>
    )

export default withRouter(connect(null, null)(Rats))