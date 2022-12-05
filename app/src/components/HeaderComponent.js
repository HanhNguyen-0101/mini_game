import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshGame } from "../actions/BauCuaGameAction";
export default function HeaderComponent() {
  const total = useSelector((state) => state.BauCuaGameReducer.totalScore);
  const dispatch = useDispatch();
  return (
    <div>
      <img
        src="./images/Logo.png"
        className="img-fluid m-1"
        width="40%"
        alt="Logo"
      />
      <br />
      <button
        type="button"
        className="btn btn-red text-yellow m-1"
        style={{ fontSize: 20 }}
      >
        Tiền thưởng:{" "}
        <span className="text-white" style={{ fontSize: 30 }}>
          {total.toLocaleString()}
        </span>
        $
      </button>
      <button
        type="button"
        className="btn btn-pink text-white m-1"
        onClick={() => dispatch(refreshGame())}
      >
        Chơi lại
      </button>
    </div>
  );
}
