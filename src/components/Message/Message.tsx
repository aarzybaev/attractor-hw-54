import React from 'react';

interface Props {
  message: string;
  isWin: boolean;
}

const Message: React.FC<Props> = ({message, isWin}) => {
  const messageStyle: React.CSSProperties = {
    marginTop: '10px'
  };
  if (isWin) {
    messageStyle.color = 'green';
    messageStyle.fontWeight = 'bold';

    return (
      <div style={messageStyle}>
        {message}
      </div>
    );
  } else {
    return (
      <div style={messageStyle}>
        {message}
      </div>
    );
  }
};

export default Message;