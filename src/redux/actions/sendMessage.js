import { SEND_MESSAGE } from "./actionTypes";

const sendMessage = (text) => ({
    type: SEND_MESSAGE,
    payload: text
})

export default sendMessage;