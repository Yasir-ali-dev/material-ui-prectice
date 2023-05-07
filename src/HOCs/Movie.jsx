import React from 'react';
import { withToolTip } from './withToolTip';
import "bootstrap/dist/css/bootstrap.css";

const Movie = (props) => {
    console.log(props)
  return (
    <div onClick={props.toggle} className='container mt-5'>
     <h1>X-Men | Days of Future and Past <br/>{props.tip===true ? "Wolverine" : ""} </h1> 
    </div>
  )
}

export default withToolTip(Movie);
