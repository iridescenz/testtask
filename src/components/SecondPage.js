import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Plan from './Plan'
import {BsChevronDown} from 'react-icons/bs'
import {BsChevronUp} from 'react-icons/bs'


const SecondPage = () => {
  return (
    <div className='page-container'>
    <Header />
    <div className='container'>
    <div className='period'>
     <h2 className='bold-header'>Срок подписки</h2> 
     <input list="select" name="select" className='period-form-input'/>
     <div className='caret-down'><BsChevronDown /></div>
     <datalist className="form-control"  id="select"> 
       <option value='1 месяц' style={{backgroundColor: 'white'}}/>
       <option value='2 месяца' />
       <option value='3 месяца'/>
       <option value='4 месяца' />
       </datalist>
    </div>
    <Plan />
    </div>
    <Footer link='/purchase' back={'/'}/>
    </div>
  )
}

export default SecondPage
