import React from 'react';
import { useSpring, animated } from 'react-spring';
import AddData from './AddData';
import adsData from '../../helper/adsData';

function Advertisement() {
  const slideInProps = useSpring({
    from: { opacity: 0, transform: 'translateX(100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    config: { duration: 500 },
  });

  return (
    <animated.div style={slideInProps} className="col-sm-4 bg-dark">
      {adsData && adsData.map((ad, index) => (
        <AddData key={index} {...ad} />
      ))}
    </animated.div>
  );
}

export default Advertisement;
