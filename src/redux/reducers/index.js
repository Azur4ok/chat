import { combineReducers } from 'redux';
import handleChangeText from './handleChangeMessage';
import operationWithMessages from './operationWithMessages';

export const rootReducer = combineReducers({ handleChangeText, operationWithMessages });
