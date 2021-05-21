import React, {useState} from 'react'

const Plan = () => {
  const[price, setPrice] = useState('')
  const[plan, setPlan] = useState('')
  return (
    <div className='plan'>
    <h5 className='bold-header'>Ваш запрос </h5>
    <div className='plan-name'>
      {plan === null ? <div className='chosen-plan'>План не выбран</div> : <div className='chosen-plan'> План "{plan}"</div>}
      {() => setPrice('price')}
      {price === 0 ? <div className='price'> 0 </div> : <div className='price'> {price}</div>}
    </div>
  </div>
  )
}

export default Plan
