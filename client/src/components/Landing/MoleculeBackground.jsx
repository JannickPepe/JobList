
import Molecule from './Molecule';

const Background = () => {
  const moleculeCount = 50;

  const randomPosition = () => {
    return {
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
    };
  };

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {Array.from({ length: moleculeCount }).map((_, index) => {
        const { x, y } = randomPosition();
        const delay = Math.random() * 5; // Random delay between 0 and 5 seconds
        return <Molecule key={index} x={x} y={y} delay={delay} />;
      })}
    </div>
  );
};

export default Background;