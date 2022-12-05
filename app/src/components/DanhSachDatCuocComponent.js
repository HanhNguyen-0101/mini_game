import React from 'react'
import { useSelector } from 'react-redux'
import XucXacDatCuocComponent from './XucXacDatCuocComponent'

export default function DanhSachDatCuocComponent() {
  const danhSachXiNgau = useSelector(state => state.BauCuaGameReducer.danhSachXiNgau);
  const renderXucXac = () => {
    return danhSachXiNgau.map((xiNgau, index) => {
      return <XucXacDatCuocComponent key={index} xiNgau={xiNgau}/>
    })
  }
  return (
    <div className='row'>
      {renderXucXac()}
    </div>
  )
}
