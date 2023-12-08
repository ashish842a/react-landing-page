import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Blog from './Blog';
import AllBlog from '../../helper/Blog';

function Blogs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div ref={ref} style={fadeProps} className="col-sm-8 bg-white text-white">
      <div className="container p-4">
        {AllBlog && AllBlog.map((blog, index) => (
          <Blog key={index} {...blog} />
        ))}
      </div>
    </animated.div>
  );
}

export default Blogs;
