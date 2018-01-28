import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

const Humans = (props) => 
    (<div>
        {props.humans && props.humans.length && <p>Total Humans: {props.humans.length}</p>}
    </div>
    )

export default withRouter(connect(null, null)(Humans))