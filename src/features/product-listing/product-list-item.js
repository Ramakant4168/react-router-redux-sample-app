
import React from 'react'


export default function ProductListItem(props) {

    const  thisItemInCart = props.cart.filter(item => item.id===props.product.id)[0]
    return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">{props.product.name}</div>
                    <img  height={100} 
                        className="img-rounded" 
                        src={`/products/${props.product.image}`} 
                        alt={props.product.image}>
                    </img>
                <div className="panel-body">
                    {props.product.description}
                    <br/>
                    $ {props.product.price}
                    <br/>
                    <button type="button" 
                        onClick={()=>props.addToCart(props.product) } 
                        className="btn btn-primary">
                        Add to cart ({ (thisItemInCart && thisItemInCart.quantity )|| 0})
                    </button>
                </div>
                <hr/>
                
            </div>
        </div>
  )
}



