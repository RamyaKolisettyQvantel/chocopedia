import React from 'react'
import {Link} from "react-router-dom"
import NavBar from './NavBar';

function ChocolateListItem(props) {
    return (
        < >
          <Link to={`/chocolates/${props.id}`}><img src={props.image}></img></Link>
          <h3>{props.name}</h3> 
        </>
    )
}
export default ChocolateListItem
