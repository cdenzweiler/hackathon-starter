import React from 'react';

import {Link, link} from 'react-router-dom';

function Navigation(props) {
    return(
        <div className="Navigation">

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/profile"> Profile</Link>
                </li>

                <li>
                    <Link to="/logout"> Logout</Link>
                </li>




    
            </ul>




        </div>
    );
}

export default Navigation;