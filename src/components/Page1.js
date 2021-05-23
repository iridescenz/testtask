import React from 'react';
import Card from './Card';
import { content } from './data';
import Header from './Header';
import Footer from './Footer';
import Plan from './Plan';
import store from '../store';
import { connect, useSelector } from 'react-redux';

const Page1 = () => {
  const increment = () => store.dispatch({ type: 'INCREMENT' });
  const decrement = () => store.dispatch({ type: 'DECREMENT' });
  const slots = useSelector((state) => state.slots);

  // const [active, setActive] = useState(false);

  return (
    <div className='page-container'>
      <Header />
      <div className='container'>
        <div className='subscribe-plan'>
          <h2 className='bold-header'>План подписки</h2>
          <div className='card-container'>
            {content.map((el) => (
              <Card
                header={el.plan}
                price={el.price}
                key={el.ind}
                onClick={(e) => {
                  e.preventDefault();
                    store.dispatch({
                      type: 'SET SLOTS',
                      payload: el.slots,
                    })
                    store.dispatch({
                      type: 'SET PLAN',
                      payload: el.plan,
                    })
                    store.dispatch({
                      type: 'SET PRICE',
                      payload: el.price,
                    })
                }}
              />
            ))}
          </div>
          <section>
            <h2 className='bold-header'>Количество слотов</h2>
            <div className='slots-area'>
              <form className='slots-form'>
                <input
                  className='input'
                  type='text'
                  name='slots'
                  value={slots}
                  onChange={(e) =>
                    store.dispatch({
                      type: 'SET SLOTS',
                      payload: +e.target.value,
                    })
                  }
                />
                <div className='button-choose-slots'>
                  <button type='button' onClick={() => increment()}>
                    +
                  </button>
                  <button type='button' onClick={() => decrement()}>
                    -
                  </button>
                </div>
              </form>
              <div className='text-error'>
                Для оформления выбранного плана необходимо более 15 слотов
              </div>
            </div>
          </section>
        </div>
        <Plan pageHeader='Ваш запрос' />
      </div>
      <Footer link='/subscription-period' step='1/3' stepName='План подписки' />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    slots: state.slots,
    plan: state.plan,
  };
};

export default connect(mapStateToProps)(Page1);
