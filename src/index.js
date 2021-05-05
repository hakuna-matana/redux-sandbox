import * as React from 'react';
import ReactDOM from 'react-dom';

import {createStore, bindActionCreators} from 'redux';
import {Provider} from 'react-redux';

import App from './components/App';

import reducer from "./reducer";

// store координирует работу с данными в redux приложении
const store = createStore(reducer);

// const { dispatch } = store;
// похожим образом работает bindActionCreators
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// };

// bindActionCreators связывает функцию action с функцией dispatch
// с помощью dispatch обновляются данные в store
// const {incAction, decAction, rndAction} = bindActionCreators(actions, dispatch);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
