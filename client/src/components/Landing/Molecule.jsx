/* eslint-disable react/prop-types */


const Molecule = ({ x, y, delay }) => {
  return (
    <div
      className="absolute w-1 h-1 bg-blue-500 rounded-full z-0"
      style={{ left: x, top: y, animationDelay: `${delay}s` }}
    />
  );
};

export default Molecule;