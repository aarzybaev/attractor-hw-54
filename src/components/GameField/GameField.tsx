import {useState} from 'react';
import Cell from '../Cell/Cell.tsx';
import Counter from '../Counter/Counter.tsx';
import Reset from '../Reset/Reset.tsx';
import './GameField.css';
import Message from '../Message/Message.tsx';


interface Items {
  hasItem: boolean;
  clicked: boolean;
}

const GameField = () => {
  const randomInteger = (min: number, max: number) => {
    const rand: number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const createItems = () => {
    const items: Items[] = [];
    for (let i = 0; i < 36; i++) {
      items.push({hasItem: false, clicked: false});
    }

    const rndIndex = randomInteger(0, 35);
    items[rndIndex] = {hasItem: true, clicked: false};
    return items;
  };

  const [items, setItems] = useState<Items[]>(createItems());
  const [count, setCount] = useState(0);
  const [win, setWin] = useState(false);

  const changeItem = (index: number) => {
    const copyItems = [...items];
    const newObj = {...copyItems[index]};
    newObj.clicked = true;
    copyItems[index] = newObj;
    setItems(copyItems);
  };

  const increaseCounter = () => {
    setCount((prevState): number => prevState + 1);
  };

  const checkCell = (index: number, hasItem: boolean, clicked: boolean) => {
    if (!win) {

      if (!clicked) {
        changeItem(index);
        increaseCounter();

        if (hasItem) {
          setWin(() => true);
        }
      }


    }
  };


  const restartGame = () => {
    setWin(() => false);
    setCount(() => 0);
    setItems(createItems());
  };


  return (
    <div className="GameField">
      {
        items.map((item, index) => {

          if (item.clicked) {
            return (
              <Cell
                key={index}
                cellStyle={'Cell clicked'}
                onClick={() => {
                  checkCell(index, item.hasItem, item.clicked);
                }}
              >
                {item.hasItem ? 'O' : ''}
              </Cell>
            );
          } else {
            return (
              <Cell
                key={index}
                cellStyle={'Cell'}
                onClick={() => {
                  checkCell(index, item.hasItem, item.clicked);
                }}
              >
                {item.hasItem ? 'O' : ''}
              </Cell>
            );
          }

        })
      }
      <div className="info">
        <Message message={win? 'You found!': 'Good luck!'} isWin={win}/>
        <Counter count={count}/>
        <Reset reset={restartGame}/>
      </div>
    </div>
  );
};

export default GameField;