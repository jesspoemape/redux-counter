import { createStore } from 'redux';
import counterReducer from './ducks/counter';  // this is the reducer we made in counter.js

export default createStore(counterReducer);