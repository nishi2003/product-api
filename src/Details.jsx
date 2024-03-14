import react from "react";
// import {NavLink} from 'resct-router-dom'

export default function Details({ product }) {
  // console.log(product);
  return (
    // <div className="col-4 border">
    <card className="col-4 border">
      <img src={product?.thumbnail} className="card-img-top pt-3" alt="..." width="250px" height="250px"/>
      <div className="card-body pt-4 pb-3">
        <h5 className="card-title">{product?.title}</h5>
        <h5 className="card-title">{product?.price}</h5>
        <a href={"products/" + product?.id} className="btn bg-primary"> View More</a> 
        {/* {product?.title} */}
      </div>
    </card>
    // </div>
  )
}




