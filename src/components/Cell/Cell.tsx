import React from 'react';
import './Cell.css';

interface Props extends React.PropsWithChildren {
  onClick: React.MouseEventHandler;
  cellStyle: string;
  children?: string;
}

const Cell: React.FC<Props> = ({
                                 onClick,
                                 cellStyle,
                                 children,
                               }) => {
  return (
    <div onClick={onClick} className={cellStyle}>{children}</div>
  );
};

export default Cell;