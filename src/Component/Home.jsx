import React from 'react'
import  Nav  from './Nav'
import Foter from './Foter'
import Maps from './Maps'
import Maine from './Maine'
import WhatsAppButton from './Whatsapp'
const Home = () => {
  return (
    <>
    <div style={{backgroundColor:'#FCF9F1'}}>
      <Nav/>   
      <Maine/>
      <Maps/>
      <WhatsAppButton/>
      <Foter/>
      </div>
    </>
  )
}

export default Home
