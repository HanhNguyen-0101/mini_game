import React from "react";
import DanhSachDatCuocComponent from "../components/DanhSachDatCuocComponent";
import DanhSachXucXacComponent from "../components/DanhSachXucXacComponent";
import HeaderComponent from "../components/HeaderComponent";
import "./../assets/css/XucXacItem.css";

export default function BauCuaGameComponent() {
  return (
    <div className="BauCuaGame">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <HeaderComponent />
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <DanhSachDatCuocComponent />
          </div>
          <div className="col-5">
            <DanhSachXucXacComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
