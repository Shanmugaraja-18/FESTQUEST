import React from 'react'
import Footer from '../components/Footer/Footer';
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <>
    <NavBar/>
    <Header />
    <GetStarted />
    <GetInTouch />
    <Footer/>
    </>

  )
}

export default Home