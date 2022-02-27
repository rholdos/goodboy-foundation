import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { stepReducer } from './reducers/stepReducer';
import { contributionReducer } from './reducers/contributionReducer';
import { contributorReducer } from './reducers/contributorReducer';

const reducers = combineReducers({
  steps: stepReducer,
  contribution: contributionReducer,
  contributor: contributorReducer
});

export default createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
