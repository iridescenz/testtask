import React from 'react';
import Header from './Header';
import Plan from './Plan';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FourthPage = () => {
  const price = useSelector((state) => state.price);
  const slots = useSelector((state) => state.slots);
  const period = useSelector((state) => state.period);
  const discount = useSelector((state) => state.discount);

  return (
    <div className='page-container'>
      <Header />
      <div className='success'>
        <h1>Готово!</h1>
        <p>
          Подписка на аккаунты успешно оформлена <br />
          Начните запрашивать аккаунты из раздела «Подписка»
        </p>
        <Plan />
        <div className='chosen-plan'>
          Итого:{' '}
          {period !== null && (
            <span> {slots * price * +period.match(/[0-9]/gi)}</span>
          )}
        </div>
        <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <input
            className='see-request'
            type='button'
            value='Перейти к запросу'
          />
        </Link>
      </div>
    </div>
  );
};

export default FourthPage;
