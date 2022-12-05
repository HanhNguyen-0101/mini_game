import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSpring, animated } from 'react-spring';
import { playGame } from '../actions/BauCuaGameAction';
import XucXacComponent from './XucXacComponent'

export default function DanhSachXucXacComponent() {
  const xucXac = useSelector(state => state.BauCuaGameReducer.xucXac);
  const dispatch = useDispatch();
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 500 },
  });
  return (
    <div className='p-2 float-right'>
      <div className='bg-white row' style={{borderRadius: '50%', width: 400, height: 400, position:'relative'}}>
          <div style={{position: 'absolute', top: 0, left: 160}}>
            <XucXacComponent xucXac={xucXac[0]} />
          </div>
          <div style={{position: 'absolute', top: 155, left: 95}}>
            <XucXacComponent xucXac={xucXac[1]} />
          </div>
          <div style={{position: 'absolute', top: 120, right: 80}}>
            <XucXacComponent xucXac={xucXac[2]} />
          </div>
      </div>
      <animated.button
        type="button"
        style={{
          scale: x.to({
            range: [0, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 1.1, 0.9, 1.1, 1.03, 1],}),
          width: 150, boxShadow: 'none'}}
        className="btn p-0 m-4"
        onClick={() => { toggle(!state); dispatch(playGame())}}>
        <img src="./images/soc.png" className="w-100" alt="soc" />
      </animated.button>
    </div>
  )
}
