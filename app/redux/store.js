import { createStore, combineReducers } from 'redux';
import teammatesReducer from './reducers/teammatesReducer';

const rootReducer = combineReducers({
  teammates: teammatesReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
