import React, {useState} from "react";
import Card from "./Card";
import content from "./content";

const Page1 = () => {
  const plans = [
    { name: "Стандарт", slots: 20, countries: 59, price: 79 },
    { name: "Стандарт+", slots: 15, countries: 74, price: 99 },
    { name: "Премиум", slots: 10, countries: 90, price: 119 },
  ];
  const [slots, setSlots] = useState(0)
  const [step, setStep] = useState('1/3')
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
            onClick={(e) => {
        e.preventDefault();
        plans.filter(el => el.name === el.header)
        }}
          />
        ))}
        </div>
      <form className='form' >
      <input
        className='input'
        type='text'
        name='slots'
        value={slots}
        onChange={(e) => setSlots(e.target.value)}
        onClick={() => setSlots('')}
        placeholder={slots}
      />
      <div className='plus-minus'>
      <button className='button' type='' onClick={(e) => {
        e.preventDefault();
        setSlots(slots + 1)}}
      >
        +
      </button>
      <button className='button' type='' onClick={(e) => {
        e.preventDefault();
        setSlots(slots - 1)}}
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
          <div>План не выбран</div>
          <div>цена</div>
        </div>
        <div>Итого:</div>
        <div className='balance'>
          <div>Ваш баланс:</div>
          <div className='footer'>
  <button className='balance-check'>Запросить</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
