import React from 'react'
import Header from './Header'
import Plan from './Plan'
import { Link } from 'react-router-dom'

const FourthPage = () => {
  return (
    <div className='page-container'>
      <Header />
      <div className='success'>
      <h1>Готово!</h1>
      <p>Подписка на аккаунты успешно оформлена <br />
Начните запрашивать аккаунты из раздела «Подписка»</p>
        <Plan />
        <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><input className='see-request' type='button' value='Перейти к запросу'/></Link>
      </div>
    </div>
  );
}

export default FourthPage
