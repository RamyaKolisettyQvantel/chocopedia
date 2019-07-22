import React from 'react'
import NavBar from './NavBar';
import SearchData from './SearchData';
import './Header.css'


function Header(props) {
    return (
        <>
          <header class="choco-header">
            <h1 style={{textAlign:"center"}}>Choclate</h1>
            <p style={{textAlign:"center"}}>is the answer, who cares what the Question is !!!</p>
          </header>
        </>
    )
}

export default Header
