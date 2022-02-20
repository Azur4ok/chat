import { DELETE_MESSAGE } from './actionTypes';

const deleteMessage = (message) => ({
    type: DELETE_MESSAGE,
    payload: message
});

export default deleteMessage;