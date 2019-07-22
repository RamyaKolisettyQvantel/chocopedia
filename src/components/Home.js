import React from 'react'
import NavBar from './NavBar';
import SearchData from './SearchData';
import Header from './Header';
import Footer from './Footer';


function Home(props) {
    return (
        <>
          <NavBar />
          <Header />
          {<p style={{textAlign:"center", margin:"10%"}}>
              Choclate collection is a crowd sources portal <br /> which gives you details about world renowned <br />
              brands and chocolates
          </p>}
          <Footer />
        </>
    )
}

export default Home
