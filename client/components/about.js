import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

const About = (props) => 
    (<div className="">
        <h3>About</h3>
        <p>Created for <a href="https://globalgamejam.org/2018/games/rattus-rattus-wwwrattus">Global Game Jam NYC 2018</a></p>
        <div className="bubble-div row col-xs-12">
            <img className="profile-pic img-fluid" src="/images/profilesm.jpg" />
            <p className="bubble rounded col-xs-11 col-md-4">Web development using PostgreSQL, Express, Redux, and React, by Jennifer Neale. 
            Jennifer writes code in Javascript and C#, makes games in Unity, writes short fiction, and enjoys cheese.<br />
            View her dev blog and portfolio at <a href="http://www.threeturtleday.com">ThreeTurtleDay.com</a>.</p>
        </div>
        <div className="bubble-div row col-xs-12">
            <img className="profile-pic img-fluid" src="/images/cropped-k010039.jpg" />
            <p className="bubble rounded col-xs-11 col-md-4">Art by Alex Sherman. 
            Alex is a visual artist and writer, specializing in animation and film editing.<br />
            View his work at <a href="http://www.alxqs.com">Alxqs.com</a>.</p>
        </div>
    </div>
    )

export default withRouter(connect(null, null)(About))