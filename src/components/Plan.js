import React from 'react';
import { useSelector } from 'react-redux';

const Plan = ({ pageHeader }) => {
  const plan = useSelector((state) => state.plan);
  const price = useSelector((state) => state.price);
  const slots = useSelector((state) => state.slots);
  const period = useSelector((state) => state.period);
  const discount = useSelector((state) => state.discount);

  return (
    <div className='plan'>
      <h5 className='bold-header'>{pageHeader}</h5>
      <div className='plan-name'>
        {plan !== null ? (
          <div className='chosen-plan'> План "{plan}"</div>
        ) : (
          <div className='chosen-plan'>План не выбран</div>
        )}
        {price === null ? '' : <div className='price'> {price}</div>}
      </div>
      {slots === '' ? '' : <div className='description'>{slots} слотов</div>}
      {period !== null ? (
        <div className='plan'>
        <div className='term-name'>
          <div className='chosen-term'>Срок подписки</div>
          <div className='term-price'>{period.match(/[0-9]/ig)}</div>
          </div>
          <div className='description'> {period}</div>
        </div>
      ) : (
        ''
      )}
      {discount !== 0  ? (
        <div className='plan'>
        <div className='discount-name'>
          <div className='discount'>Скидка</div>
          <div className='discount-val'>{discount}</div>
          </div>
          <div className='description'>на подписку</div>
        </div>
      ) : (
        ''
      )}
    </div>
    
  );
};

export default Plan;
