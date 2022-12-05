import React from "react";
import { useSpring, animated } from "react-spring";

export default function XucXacComponent(props) {
  const { xyz } = useSpring({
    to: {
      xyz: [540, 540, 540],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: {
      duration: 500,
    },
    reset: true,
  });
  return (
    <div className="scene">
      <animated.div
        className="cube"
        style={{
          transform: xyz.to(
            (x, y, z) =>
              `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
          ),
        }}
      >
        <div className="cube__face right">
          <img src="./images/cua.png" className="img-fluid" alt="" />
        </div>
        <div className="cube__face back">
          <img src="./images/bau.png" className="img-fluid" alt="" />
        </div>
        <div className="cube__face left">
          <img src="./images/ca.png" className="img-fluid" alt="" />
        </div>
        <div className="cube__face top">
          <img src="./images/nai.png" className="img-fluid" alt="" />
        </div>
        <div className="cube__face bottom">
          <img src="./images/tom.png" className="img-fluid" alt="" />
        </div>
        <div className="cube__face front">
          <img
            src={props.xucXac.img}
            className="img-fluid"
            alt={props.xucXac.id}
          />
        </div>
      </animated.div>
    </div>
  );
}
