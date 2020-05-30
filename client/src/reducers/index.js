import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import noteReducer from './noteReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    task: taskReducer,
    note: noteReducer,
    error: errorReducer,
    auth: authReducer
});