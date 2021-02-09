import React from 'react';

import {Link, link} from 'react-router-dom'

function Navigation(props) {
    return(
        <div className='Navigation'>

<ul>

<li>
    <Link to="/"><h2>Home</h2></Link>
</li>

<Link to="/profile"><h2>Profile</h2></Link>

<li>
    <Link to="/logout"><h2>Logout</h2></Link>
</li>

</ul>





        </div>
    )
}
 export default Navigation