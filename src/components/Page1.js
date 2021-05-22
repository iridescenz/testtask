import React, { useState } from 'react';
import Card from './Card';
import { content, user } from './data';
import { useDispatch } from 'react-redux';
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom';
import Plan from './Plan'

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
  const [active, setActive] = useState(false);


  return (
    <div className='page-container'>
    <Header />
    <div className='container'>
      <div className='subscribe-plan'>
        <h2 className='bold-header'>План подписки</h2>
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
          <h2 className='bold-header'>Количество слотов</h2>
          <div className='slots-area'>
            <form className='slots-form'>
              <input
                className='input'
                type='text'
                name='slots'
                value={slots}
                onChange={(e) => setSlots(e.target.value)}
                onClick={() => setSlots('')}
              />
              <div className='button-choose-slots'>
                <button onClick={ e =>{ e.preventDefault();
                  increment()}}>+</button>
                <button onClick={ e =>{e.preventDefault();
                decrement()}}>-</button>
              </div>
            </form>
            <div className='text-error'>
              Для оформления выбранного плана необходимо более 15 слотов
            </div>
          </div>
        </section>
      </div>
      <Plan pageHeader='Ваш запрос'/>
    </div>
    <Footer link='/subscription-period' step='1/3' stepName='План подписки'/>
    </div>
  );
};

export default Page1;
