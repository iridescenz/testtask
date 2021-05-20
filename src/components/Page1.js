import React, { useState } from 'react';
import Card from './Card';
import { content, user } from './data';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Page1 = () => {
  const plans = [
    { name: 'Стандарт', slots: 20, countries: 59, price: 79 },
    { name: 'Стандарт+', slots: 15, countries: 74, price: 99 },
    { name: 'Премиум', slots: 10, countries: 90, price: 119 },
  ];

  const dispatch = useDispatch();
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });


  const [slots, setSlots] = useState('');
  const [step, setStep] = useState('1/3');
  const [plan, setPlan] = useState(null);
  const [price, setPrice] = useState(0);


  const fetchData = (e) => {
    e.preventDefault();
    console.log('Fetching data')
    axios
    .get(`url`)
    .then()
    .catch();
  }

  return (
    <div className='container'>
      <div className='subscribe-plan'>
        <div className='bold-header'>План подписки</div>
        <div className='card-container'>
          {content.map((el) => (
            <Card 
              header={el.header}
              price={el.price}
              key={el.ind}
              onClick={(e) => {
                e.preventDefault();
                setPlan(el.header);
                const element = plans.filter((el) => el.name == plan);
                element.length > 0 && setPrice(element[0].price);
                element.length > 0 && setSlots(element[0].slots);
                // let result =  new Promise ((resolve, reject) => resolve (plans.filter(el => el.name === plan)));
                // const elem = await result.then();
              }}
            />
          ))}
        </div>
        <section>
          <h5 className='bold-header'>Количество слотов</h5>
          <form className='slots-form'>
            <input
              className='input'
              type='text'
              name='slots'
              value={slots}
              onChange={(e) => setSlots(e.target.value)}
              onClick={() => setSlots('')}
              placeholder={'выберите слоты'}
            />
            <div className='button-choose-slots'>
              <button
                onClick={increment}
              >
                +
              </button>
              <button
                onClick={decrement}
              >
                -
              </button>
            </div>
          </form>
        </section>
        <div className='footer'>
          <button className='next'>Продолжить</button>
          <div className='progress'>
            <div>Шаг: {step}</div>
            <p>План подписки</p>
          </div>
        </div>
      </div>
      <div className='plan'>
        <h5 className='bold-header'>Ваш запрос </h5>
        <div className='plan-name'>
          {plan === null ? <div>План не выбран</div> : `План "${plan}"`}
          {() => setPrice(price)}
          {price === 0 ? (
            <div> 0 </div>
          ) : (
            <div className='price'>
              {price}
            </div>
          )}
        </div>
        <div>Итого: {price * slots}</div>
        <div className='balance'>
          <div>Ваш баланс: <span className='price'>{` ${user.balance}`}</span></div>
          <div className='footer'>
            <button className='balance-check' onClick={fetchData}>Запросить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
