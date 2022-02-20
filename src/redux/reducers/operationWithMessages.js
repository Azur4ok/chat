import { SEND_MESSAGE } from '../actions/actionTypes';
import { DELETE_MESSAGE } from './../actions/actionTypes';

const initialState = {
  messages: [],
};

const sendNewMessage = (state = initialState, action) => {
  const arrayOfMessages = [...state.messages];

  switch (action.type) {
    case SEND_MESSAGE:
      arrayOfMessages.push(action.payload);
      return {
        ...state,
        messages: arrayOfMessages,
      };
    case DELETE_MESSAGE:
      arrayOfMessages.splice(arrayOfMessages.indexOf(action.payload), 1);
      return {
        ...state,
        messages: arrayOfMessages,
      };
    default:
      return state;
  }
};

export default sendNewMessage;
