import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { stepReducer } from './reducers/stepReducer';
import { shelterReducer } from './reducers/shelterReducer';

const reducers = combineReducers({
  steps: stepReducer,
  shelter: shelterReducer
});

export default createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
