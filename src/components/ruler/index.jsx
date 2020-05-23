import React from 'react';

const Ruler = ({style = { height: 'auto', backgroundColor: "white" }}) => {

  return <div style={style}>
    <div style={{ height: '100px', display: "flex", alignItems: "flex-end" }}>_ 100</div>
    <div style={{ height: '100px', display: "flex", alignItems: "flex-end" }}>_ 200</div>
    <div style={{ height: '100px', display: "flex", alignItems: "flex-end" }}>_ 300</div>
    <div style={{ height: '100px', display: "flex", alignItems: "flex-end" }}>_ 400</div>
    <div style={{ height: '100px', display: "flex", alignItems: "flex-end" }}>_ 500</div>
    <div style={{ height: '100px', display: "flex", alignItems: "flex-end" }}>_ 600</div>
    <div style={{ height: '100px', display: "flex", alignItems: "flex-end" }}>_ 700</div>
    <div style={{ height: '100px', display: "flex", alignItems: "flex-end" }}>_ 800</div>
    <div style={{ height: '100px', display: "flex", alignItems: "flex-end" }}>_ 900</div>
    <div style={{ height: '100px', display: "flex", alignItems: "flex-end" }}>_ 1000</div>
  </div>
}

export default Ruler