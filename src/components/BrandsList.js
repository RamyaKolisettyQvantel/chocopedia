import React,{useEffect} from 'react'
import { getBrands } from '../actionCreators/BrandCreators';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';

function BrandsList(props) {
    console.log(props.brands);
    useEffect(() => {
       props.dispatch(getBrands());
    },[])
    return (
        <>
        <NavBar />
        <Header />
            <div className="container"  >
                <div >
                    <ul className="row">
                        {props.isLoading && <p>Please wait....</p>}
                         {props.brands.map(prop => (
                            <li className="col-md-4"  key={prop.id}>
                                <h3><Link to={`/brands/${prop.id}`}><img style={{height:"90px"}} src={prop.logo}></img></Link></h3>
                                <h3>{prop.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        <Footer />
        </>
    )
}
function mapStateToProps(brandState){
    return{
        brands:brandState.brandsReducer.brands,
        isLoading : brandState.brandsReducer.isLoading
    }
}
export default connect (mapStateToProps)(BrandsList)
