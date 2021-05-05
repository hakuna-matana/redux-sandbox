import * as React from 'react';
import ReactDOM from 'react-dom';

import {createStore, bindActionCreators} from 'redux';

import Counter from './Counter';

import * as actions from "./actions";
import reducer from "./reducer";

const counter = document.getElementById('counter');
const inc = document.getElementById('inc');
const dec = document.getElementById('dec');
const rnd = document.getElementById('rnd');

// store координирует работу с данными в redux приложении
const store = createStore(reducer);
const { dispatch } = store;

// похожим образом работает bindActionCreators
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// };


// bindActionCreators связывает функцию action с функцией dispatch
// с помощью dispatch обновляются данные в store
const {incAction, decAction, rndAction} = bindActionCreators(actions, dispatch);

// inc.addEventListener('click', incAction);
// dec.addEventListener('click', decAction);
// rnd.addEventListener('click', () => {
//   const payload = Math.floor(Math.random()*10);
//   rndAction(payload)
// });
const update = () => {
  let counter = <Counter
    dec={decAction}
    inc={incAction}
    rnd={() => {
      const payload = Math.floor(Math.random()*10);
      rndAction(payload)
    }}
    counter={store.getState()}
  />;
  ReactDOM.render(counter, document.getElementById('root'))
};
update();
// подписка на изменение состояния, используем для обновления ui
store.subscribe(() => {
  // counter.innerHTML = store.getState();
  update()
});