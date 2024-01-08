import React from 'react';

interface Props {
  reset: React.MouseEventHandler;
}
const Reset: React.FC<Props> = ({reset}) => {
  return (
    <div>
      <button onClick={reset} type='button'>Reset</button>
    </div>
  );
};

export default Reset;