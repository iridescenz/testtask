import React, { useState } from "react";
import Card from "./Card";
import content from "./content";
import user from "./userInfo";

const Page1 = () => {
  const plans = [
    {  name: "Стандарт", slots: 20, countries: 59, price: 79},
    { name: "Стандарт+", slots: 15, countries: 74, price: 99 },
    { name: "Премиум", slots: 10, countries: 90, price: 119 },
  ];

  const [slots, setSlots] = useState('');
  const [step, setStep] = useState("1/3");
  const [plan, setPlan] = useState(null);
  const [price, setPrice] = useState(0);

  return (
    <div className='container'>
      <div className='subscribe-plan'>
        <h2>План подписки</h2>
        <div className='card-container'>
          {content.map((el) => (
            <Card
              header={el.header}
              price={el.price}
              key={el.ind}
              onClick={async(e) => {
                e.preventDefault();
                setPlan(el.header);
                const element = plans.filter(el => el.name == plan);
                element.length > 0  && setPrice(element[0].price);
                element.length > 0  && setSlots(element[0].slots);
                // let result =  new Promise ((resolve, reject) => resolve (plans.filter(el => el.name === plan)));
                // const elem = await result.then();

                }} />
          ))}
        </div>
        <form className='form'>
          <input
            className='input'
            type='text'
            name='slots'
            value={slots}
            onChange={(e) => setSlots(e.target.value)}
            onClick={() => setSlots('')}
            placeholder={'выберите слоты'}
            
          />
          <div className='plus-minus'>
            <button
              className='button'
              type=''
              onClick={(e) => {
                e.preventDefault();
                setSlots(slots + 1);
              }}
            >
              +
            </button>
            <button
              className='button'
              type=''
              onClick={(e) => {
                e.preventDefault();
                setSlots(slots - 1);
              }}
            >
              -
            </button>
          </div>
        </form>
        <div className='footer'>
          <button className='next'>Продолжить</button>
          <div className='progress'>
            <div>Шаг: {step}</div>
            <p>План подписки</p>
          </div>
        </div>
      </div>
      <div className='plan'>
        <h2>Ваш запрос</h2>
        <div className='plan-name'>
          {plan === null ? <div>План не выбран</div> : `План "${plan}"`}
          {() => setPrice(price)}
          { price === 0 ? <div> 0 </div> : <div>{price} </div>}
        </div>
        <div>Итого: {price * slots}</div>
        <div className='balance'>
          <div>Ваш баланс:{` ${user.balance}`}</div>
          <div className='footer'>
            <button className='balance-check'>Запросить</button> 
            <h1>{plan}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
