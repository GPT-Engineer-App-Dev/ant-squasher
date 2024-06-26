import React, { useState, useEffect } from 'react';
import antImage from '../assets/ant.svg';

const Ant = ({ id, onClick }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const moveAnt = () => {
      const top = Math.random() * 90;
      const left = Math.random() * 90;
      setPosition({ top: `${top}%`, left: `${left}%` });
    };

    const interval = setInterval(moveAnt, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={antImage}
      alt="ant"
      onClick={() => onClick(id)}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: '30px',
        height: '30px',
        cursor: 'pointer',
      }}
    />
  );
};

const Index = () => {
  const [ants, setAnts] = useState([1, 2, 3, 4, 5]);
  const [score, setScore] = useState(0);

  const handleSquash = (id) => {
    setAnts((prevAnts) => prevAnts.filter((ant) => ant !== id));
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center relative">
      <h1 className="text-3xl text-center mb-4">Ant Squashing Game</h1>
      <p className="text-center mb-4">Score: {score}</p>
      {ants.map((ant) => (
        <Ant key={ant} id={ant} onClick={handleSquash} />
      ))}
    </div>
  );
};

export default Index;