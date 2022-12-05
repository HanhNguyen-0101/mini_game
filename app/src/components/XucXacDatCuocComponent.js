import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { animated, useSpring } from "react-spring";
import {
  changeDatCuocScore,
  changeDatCuocStatus,
} from "../actions/BauCuaGameAction";

export default function XucXacDatCuocComponent(props) {
  const dispatch = useDispatch();

  const [statey, toggley] = useState(true);
  const [statez, togglez] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: 1,
    config: { duration: 1000 },
  });

  const { y } = useSpring({
    from: { y: 0 },
    y: statey ? 1 : 0,
    config: { duration: 1000 },
  });
  const { z } = useSpring({
    from: { z: 0 },
    z: statez ? 1 : 0,
    config: { duration: 1000 },
  });

  const renderDatCuocXucXac = () => {
    const { id, img, refresh, score } = props.xiNgau;
    return (
      <div className="col-4">
        <div
          className="card"
          style={{ width: 180, backgroundColor: "transparent", border: "none" }}
        >
          <img className="card-img-top p-2" src={img} alt={id} />
          <div className="card-body pl-0 pr-0">
            <animated.button
              style={{
                scale: x.to({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                }),
                padding: 13
              }}
              type="button"
              onClick={() => dispatch(changeDatCuocStatus(id))}
              className={`w-100 btn btn-green text-yellow ${
                refresh ? "d-block" : "d-none"
              }`}
            >
              Cược 0
            </animated.button>
            <div
              className={`btn btn-green pl-1 pr-1 ${
                !refresh ? "d-block" : "d-none"
              }`}
            >
              <animated.button
                style={{
                  scale: y.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  }),
                }}
                type="button"
                onClick={() => {
                  toggley(!statey); 
                  dispatch(changeDatCuocScore(id, false));
                }}
                className="btn btn-red text-white"
              >
                <i className="fa fa-minus"></i>
              </animated.button>
              <span className="text-yellow p-2">{score.toLocaleString()}</span>
              <animated.button
                style={{
                  scale: z.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  }),
                }}
                type="button"
                onClick={() => {
                  togglez(!statez); 
                  dispatch(changeDatCuocScore(id, true))}}
                className="btn btn-red text-white"
              >
                <i className="fa fa-plus"></i>
              </animated.button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <Fragment>{renderDatCuocXucXac()}</Fragment>;
}
