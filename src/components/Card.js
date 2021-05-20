import React from 'react';

const Card = ({ header, price, onClick }) => {
  const plans = [
    { name: 'Стандарт', slots: 20, countries: 59, price: 79 },
    { name: 'Стандарт+', slots: 15, countries: 74, price: 99 },
    { name: 'Премиум', slots: 10, countries: 90, price: 119 },
  ];

  return (
    <div className='card' onClick={onClick}>
      <h1>{header}</h1>
      <ul className='li-container'>
        {plans
          .filter((elem) => elem.name === header)
          .map((el) => {
            return (
              <>
                <li key={el.slots}>От {el.slots} слотов,</li>
                <li key={el.countries}>{el.countries} стран ГЕО,</li>
                <li className='price' key={el.price}>
                  {el.price} {` за слот`}
                </li>
              </>
            );
          })}
      </ul>
      <div className='price-card'>{price}</div>
      <a href=''>Подробнее</a>
    </div>
  );
};

export default Card;
