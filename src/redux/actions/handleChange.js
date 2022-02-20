import {UPDATE_NEW_MESSAGE_TEXT} from './actionTypes'

const handleChangeText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  payload: text,
});

export default handleChangeText;