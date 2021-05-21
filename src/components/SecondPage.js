import React from 'react'
import Header from './Header'
import Footer from './Footer'

const SecondPage = () => {
  return (
    <div className='page-container'>
    <Header />
    <div>
      no content
    </div>
    <Footer link='/purchase' />
    </div>
  )
}

export default SecondPage
