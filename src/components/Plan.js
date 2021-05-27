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
      <section>
      <div className='item-block'>
        {plan !== null ? (
          <h3> План "{plan}"</h3>
        ) : (
          <h3>План не выбран</h3>
        )}
        {price === null ? '' : <div className='price'> {price}</div>}
        </div>
      {slots === '' ? '' : <div className='description'>{slots} слотов</div>}
     </section>
     <section>
      {period !== null ? (
        <>
        <div className='item-block'>
        <h3>Срок подписки</h3>
          <div className='term price'>{period.match(/[0-9]/ig)}</div>
          </div>
          <div className='description'> {period}</div>
          </>
      ) : (
       <div></div>
      )}
      </section>
      {discount !== 0  ? ( 
        <section>
        <div className='item-block'>
        <h3>Скидка</h3>
          <div className='discount'>{discount}</div>
          </div>
          <div className='description'>на подписку</div>
          </section>
          
      ) : (
        ''
      )}
    </div>
    
  );
};

export default Plan;
