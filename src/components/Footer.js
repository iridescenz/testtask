import React from 'react'
import axios from 'axios';
import {IoIosArrowBack} from 'react-icons/io'

const Footer = () => {
  const fetchData = (e) => {
    e.preventDefault();
    console.log('Fetching data');
    axios.get(`url`).then().catch();
  };
  return (
<footer>
<section className='next'>
          <input className='next' type='button' value='Продолжить'/>
          <div className='comeback'> <IoIosArrowBack /> Вернуться назад</div>
            <div classname='step'>Шаг: {'step 1 of 3'} / {'stepr-name'}
            </div>
        </section>
        <section className='total-balance'>
       <div className='total'>Итого:<span className='price'> {'price * slots'}</span></div> 
        <div className='balance'>
          <div className='check'>
            Ваш баланс: <span className='price'>{` ${'user.balance'}`}</span>
          </div>
            <input type='button' value='Запросить' className='balance-check' onClick={'fetchData'} />
          </div>
          </section>
    </footer>
  )
}

export default Footer
