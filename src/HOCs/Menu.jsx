import React from 'react';
import {AddToggler} from "./AddToggler";

const Menu = (props) => {
  return (
    <div>
        <h1 style={{backgroundColor: props.on ===true ? "red" : "orange"  }}>Menu</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda excepturi perferendis incidunt provident voluptates odit, asperiores, dignissimos adipisci, iure repudiandae officiis magnam laudantium culpa ab facilis aliquid qui ratione?</p>
        <button onClick={props.toggle}>Change Color</button>
    </div>
  )
}

export default AddToggler(Menu);

