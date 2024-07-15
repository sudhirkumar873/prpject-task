import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import FirstContent from '../components/FirstContent/FirstContent'
import SecondContent from '../components/SecondContent/SecondContent'
import ThirdContent from '../components/ThirdContent/ThirdContent'
import FourthContent from '../components/FourthContent/FourthContent'
import FifthContent from '../components/FifthContent/FifthContent'

const Home = () => {
  return (
    <div>
        <Header/>
        <FirstContent/>
        <SecondContent/>
        <ThirdContent/>
        <FourthContent/>
        <FifthContent/>
        <Footer/>
    </div>
  )
}

export default Home