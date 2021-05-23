import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Plan = ({ pageHeader }) => {
  const plan = useSelector((state) => state.plan);
  const price = useSelector((state) => state.price);
  const slots = useSelector((state) => state.slots);

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
      {slots === '' ? '' :  <div className='description'>{slots} слотов</div>}
     
    </div>
  );
};

export default Plan;
