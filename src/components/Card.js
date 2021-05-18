import React, {useState} from "react";

const Card = ({ header, price, onClick }) => {
  const plans = [
    { name: "Стандарт", slots: 20, countries: 59, price: 79 },
    { name: "Стандарт+", slots: 15, countries: 74, price: 99 },
    { name: "Премиум", slots: 10, countries: 90, price: 119 },
  ];
  return (
    <div className='card' onClick={onClick}>
      <h3>{header}</h3>
      <ul className='li-container'>
        {plans
          .filter((elem) => elem.name === header)
          .map((el, i) => {
            return (
              <>
                <li key={i + 1}>От {el.slots} слотов,</li>
                <li key={i + 2}>{el.countries} стран ГЕО,</li>
                <li key={i + 3}>
                  {el.price.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "USD",
                  })  } {` за слот`}
                     
                </li>
              </>
            );
          })}
      </ul>
      <h2>
        {price.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
          style: "currency",
          currency: "USD",
        })}/ месяц
      </h2>
    </div>
  );
};

export default Card;
