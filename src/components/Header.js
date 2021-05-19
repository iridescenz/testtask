import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  return (
    <div className='header'>
      <h5 className='page-title'>Оформление подписки</h5>
      <div className='close-icon'> 
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Header;
