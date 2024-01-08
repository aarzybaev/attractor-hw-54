import React from 'react';
import './Counter.css';

interface Props {
  count: number;
}
const Counter: React.FC<Props> = ({count}) => {
  return (
    <div className="Counter">Tries: {count}</div>
  );
};

export default Counter;