import React from 'react';
import { AddToggler } from './AddToggler';

const Checkout = (props) => {
  return (
    <div>
        <h1>Boxes</h1>
        <button onClick={props.toggle}>Show More Info</button>
        <p style={{display: props.on===true ? "block" : "none" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit veritatis laborum quasi incidunt perspiciatis unde voluptatem beatae optio iusto. Doloribus facilis cumque explicabo deleniti ullam beatae voluptatem in! Excepturi!
        </p>
    </div>
  )
}

export default AddToggler(Checkout);