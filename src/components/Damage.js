import React, { Component } from "react";
import Popup from "reactjs-popup";

import "./Damage.css";

function parse_date(date_str){
    return date_str.match(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g);
}

function number_of_predictions(prediction_set){
    return prediction_set.length
}

function parse_image_src(filename){
    return 'http://127.0.0.1:8000/media/images/' + filename
}

function get_predicted_classes(prediction_set){
    return prediction_set.map(item => item.damage_label)
}

function Damage(props) {
      
  return <div className="damage">
    <tr scope="row" key={props.id}>
        <td className="damage_id">{props.id}</td>
        <td>{parse_date(props.register_date)}</td>
        <td>{number_of_predictions(props.prediction_set)}</td>
        <td>
            <div >
            <Popup className="popup" trigger={<button className="button"> Details </button>} modal>
                <div className="header"> Damage details </div>
                <div className="content">
                    <img src={parse_image_src(props.photo)}></img>
                    <div className="group">
                        <p className="left">Classes:</p>
                        <p className="right">{get_predicted_classes(props.prediction_set)}</p>
                    </div>
                </div>
            </Popup>
            </div>
        </td>
    </tr>
      </div>;
}

export default Damage;