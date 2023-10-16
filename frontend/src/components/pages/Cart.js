import React, { useEffect, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Cart=()=>{



    return(
       <div className="card input-filed postcontainer">
        <h4>Total Cart Value:</h4>
        <h5>French Fries - $40 </h5>
        <h5>Burger - $10 </h5>
        <h5>Pasta - $100 </h5>
        <h5>Pizza - $50 </h5>
        <h6>Total - $200</h6>

        <input
        type="text"
        placeholder="Please specify any allergy"
       
        />
    <div className="file-field input-field">
      <div className="btn #3d5afe indigo accent-3">
        <span>Cancel Order/Edit Order</span>
       
      </div>
      <br></br>
      
      <div className="btn #3d5afe indigo accent-3">
        <span>Final Payment </span>
       
      </div>

      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>


    
 </div>
    );
};

export default Cart;


