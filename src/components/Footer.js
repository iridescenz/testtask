import React from 'react'
import axios from 'axios';
import {IoIosArrowBack} from 'react-icons/io'
import {user} from './data'
import { Link } from 'react-router-dom';

const Footer = ({link, back}) => {
  const fetchData = (e) => {
    e.preventDefault();
    console.log('Fetching data');
    axios.get(`url`).then().catch();
  };
  return (
<footer>
<section className='next'>
<Link to={link} style={{ color: 'inherit', textDecoration: 'inherit'}}><input className='next' type='button' value='Продолжить'/></Link>
{back ? 
<Link to={back} style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='comeback'> <IoIosArrowBack /> Вернуться назад</div></Link> : <div className='comeback' style={{width: '119px'}}></div>}
          <div className='step-container'>
            <div classname='step'><span className='step-value'>Шаг 1/3</span><span className='plan-value'>План подписки</span> </div>
            <div className='progress'><span></span></div>
            </div>
        </section>
        <section className='total-balance'>
       <div className='total'><span>Итого:</span> <span className='price'> {'2470'}</span></div> 
        <div className='checkout'>
        <div className='balance'><h2>Ваш баланс:</h2><div className='price'>{` ${user.balance}`}</div></div>
            <input type='button' value='Запросить' className='balance-check' onClick={'fetchData'} />
          </div>
          </section>
    </footer>
  )
}

export default Footer
