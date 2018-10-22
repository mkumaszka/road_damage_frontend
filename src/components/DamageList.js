import React from "react";
import Damage from "./Damage";

import "./DamageList.css";


function DamageList(props) {
  return (
      <div>
    <table className="table table-hover">
    <thead>
    <tr>
      <th className="damage_id">Id</th>
      <th>Register Date</th>
      <th>Number of predictions</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    {props.damages.map(item => <Damage {...item} />)}
    </tbody>
  </table>
  </div>
  );
}

export default DamageList;