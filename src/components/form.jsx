import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import handleChangeText from './../redux/actions/handleChange';
import sendMessage from './../redux/actions/sendMessage';

export const Form = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector(({ operationWithMessages }) => operationWithMessages);

  const textRef = React.useRef(null);
  const btnRef = React.useRef(null);

  const handleChange = () => {
    dispatch(handleChangeText(textRef.current.value));
  };

  const handleClick = () => {
    if (!textRef.current.value) {
      alert('Enter a message');
    } else {
      dispatch(sendMessage(textRef.current.value));
      textRef.current.value = null;
    }
  };

  React.useEffect(() => {
    if (btnRef.current) {
      btnRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="form-container">
      <textarea
        onChange={handleChange}
        ref={textRef}
        className="text-input"
        name=""
        id=""
        cols="200"
        rows="5"
      />
      <button ref={btnRef} onClick={handleClick} className="send-button">
        Send
      </button>
    </div>
  );
};
