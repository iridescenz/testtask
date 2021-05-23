import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Plan from './Plan';
import { BiDollar } from 'react-icons/bi';


const ThirdPage = () => {
  return (
    <div className='page-container'>
      <Header />
      <div className='container'>
        <div className='top-up-balance'>
          <h2 className='bold-header'>Пополнение</h2>
          <div className='purchase-form'>Введите сумму</div>
          <div className='input-area'>
            <input type='text' className='form-input' />
            <span className='dollar-sign'>
              {' '}
              <BiDollar />
            </span>
          </div>
          <div className='purchase-form'>Способ пополнения</div>
          <div className='purchase-types'>
            <div className='first'>
              <label>
                <input type='radio' name='radio' value='card' />
                <img src='credit-card.png' alt='card' /> Кредитной картой
              </label>
              <label>
                <input type='radio' name='radio' value='ya' />
                <img src='ya.png' alt='ya' /> Яндекс.деньги
              </label>
              <label>
                <input type='radio' name='radio' value='qiwi' />
                <img src='qiwi.png' alt='qiwi' /> QIWI кошелек
              </label>
            </div>
            <div className='second'>
              <label>
                <input type='radio' name='radio' value='wm' />
                <img src='wm.png' alt='wm' /> Webmoney
              </label>
              <label>
                <input type='radio' name='radio' value='b-coin' />
                <img src='b-coin.png' alt='bitcoin' /> Bitcoin
              </label>
            </div>
          </div>
        </div>
        <Plan pageHeader='Ваш запрос' />
      </div>
      <Footer
        back='/subscription-period'
        step='2/3'
        progress='100%'
        stepName='Оплата'
        success='/success'
      />
    </div>
  );
};

export default ThirdPage;
