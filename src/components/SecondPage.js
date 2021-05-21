import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Plan from './Plan'

const SecondPage = () => {
  return (
    <div className='page-container'>
    <Header />
    <div className='container'>
    <div className='period'>
     <h2 className='bold-header'>Срок подписки</h2> 
     <select>
       <option value='one-month' selected> 1 месяц</option>
       <option value='two-months'> 2 месяца</option>
       <option value='three-months'>3 месяца</option>
       <option value='four-months'>4 месяца</option>
     </select>
    </div>
    <Plan />
    </div>
    <Footer link='/purchase' back={'/'}/>
    </div>
  )
}

export default SecondPage
