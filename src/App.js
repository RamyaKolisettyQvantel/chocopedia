import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChocolateList from './components/ChocolateList';
import NavBar from './components/NavBar';
import {Switch,Route} from "react-router-dom";
import ChocolateDetails from './components/ChocolateDetails';
import BrandsList from './components/BrandsList';
import BrandsDetails from './components/BrandsDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SearchData from './components/SearchData';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/search" exact component={SearchData}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/brands" exact component={BrandsList}></Route>
        <Route path="/brands/:id" exact component={BrandsDetails}></Route>
        <Route path="/chocolates" exact component={ChocolateList}></Route>
        <Route path="/chocolates/:id" exact component={ChocolateDetails}></Route>
      </Switch>
    </>
    
  );
}

export default App;
