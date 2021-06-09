import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { user } from './data';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../store';

const Footer = ({ link, back, step, progress, stepName, success }) => {
  const price = useSelector((state) => state.price);
  const slots = useSelector((state) => state.slots);
  const period = useSelector((state) => state.period);
  const plan = useSelector((state) => state.plan);
  const total = useSelector((state) => state.total);
  const discount = useSelector((state) => state.discount);
  
const discountValue = (100 - discount) / 100;

period === null ?  store.dispatch({
    type: 'SET TOTAL',
    payload: (slots * price),
  }) : 
  store.dispatch({
    type: 'SET TOTAL',
    payload: (slots * price * (+period.match(/[0-9]/gi)))  * discountValue
  })
      
 
  return (
    <footer>
      <section className='next'>
        <Link to={link} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <input className='next' disabled={plan === null ? true : false}  type='button' value='Продолжить' />
        </Link>
        {back ? (
          <Link
            to={back}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <div className='comeback'>
              <IoIosArrowBack /> Вернуться назад
            </div>
          </Link>
        ) : (
          <div className='comeback' style={{ width: '119px' }}></div>
        )}
        <div className='step-container'>
          <div className='step'>
            <span className='step-value'>Шаг {step}</span>
            <span className='plan-value'>{stepName}</span>
          </div>
          <div className='progress'>
            <span style={{ width: progress }}></span>
          </div>
        </div>
      </section>
      <section className='total-balance'>
        <div className='total'>
          <span>Итого:</span><span  className='price'>{total}</span>
        </div>
        <div className='checkout'>
          <div className='balance'>
            <h2>Ваш баланс:</h2>
            <div className='price'>{` ${user.balance}`}</div>
          </div>

          <Link
            to={success}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
          >
            <input type='button' disabled={(plan === null )||(period === null) || (total > user.balance)? true : false} value='Запросить' className='balance-check' />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
