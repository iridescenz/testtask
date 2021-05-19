import React, { useState } from 'react';

const Card = ({ header, price, onClick }) => {
  const plans = [
    { name: 'Стандарт', slots: 20, countries: 59, price: 79 },
    { name: 'Стандарт+', slots: 15, countries: 74, price: 99 },
    { name: 'Премиум', slots: 10, countries: 90, price: 119 },
  ];
  return (
    <div className='card' onClick={onClick}>
      <h3>{header}</h3>
      <ul className='li-container'>
        {plans
          .filter((elem) => elem.name === header)
          .map((el) => {
            return (
              <>
                <li key={el.slots}>От {el.slots} слотов,</li>
                <li key={el.countries}>{el.countries} стран ГЕО,</li>
                <li key={el.price}>
                  {el.price} {` за слот`}
                </li>
              </>
            );
          })}
      </ul>
      <div>{price}</div>
    </div>
  );
};

export default Card;
