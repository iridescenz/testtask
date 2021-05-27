import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Plan from './Plan';
import { BsChevronDown } from 'react-icons/bs';
import store from '../store';

const SecondPage = () => {
  return (
    <div className='page-container'>
      <Header />
      <div className='container'>
        <div className='period'>
          <h2 className='bold-header'>Срок подписки</h2>
          <div className='input-area'>
            <input
              list='select'
              name='select'
              className='form-input'
              onChange={(e) => {
                store.dispatch({
                  type: 'SET PERIOD',
                  payload: e.target.value,
                });
                store.dispatch({
                  type: 'SET DISCOUNT',
                  payload:
                    e.target.value.match(/[0-9]/gi) > 1
                      ? `${+e.target.value.match(/[0-9]/gi) * 10 - 10}%`
                      : 0,
                });
              }}
            />
            <span className='caret-down'>
              {' '}
              <BsChevronDown />
            </span>
          </div>
          <datalist className='form-control' id='select'>
            <option value='1 месяц' />
            <option value='2 месяца' />
            <option value='3 месяца' />
            <option value='4 месяца' />
          </datalist>
        </div>
        <Plan pageHeader='Ваш запрос' />
      </div>
      <Footer
        link='/purchase'
        back={'/'}
        step='2/3'
        progress='66%'
        stepName='План подписки'
      />
    </div>
  );
};

export default SecondPage;
