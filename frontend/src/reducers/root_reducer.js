import { combineReducers } from 'redux';
import session from './session/session_reducer';
import errors from './errors/errors_reducer';
import TweetsReducer from './tweets_reducer';

const RootReducer = combineReducers({
    session, 
    errors,
    tweets: TweetsReducer
});

export default RootReducer;