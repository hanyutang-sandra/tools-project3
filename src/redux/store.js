import { createStore } from 'redux'
import smartTest from './reducer'

const store = createStore(smartTest);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

//store.dispatch(startApp());

export default store;