import React from 'react';
import {connect} from 'react-redux'

import ProductListItem from './product-list-item'
import { cartItemsWithQuantities } from '../cart'

function ProductListing(props) {
  return ( 
   <div>
    {
      props.products.map( product => {
         return <ProductListItem 
         key={product.id}
         cart={cartItemsWithQuantities(props.cart)}
         addToCart={props.addToCart}
         product={product}/>
      })
    } 
    </div>
  )
}

 function mapStateToProps(state){
  return {
    cart: state.cart
  }
 }
 function mapDispatchToProps(dispatch){
    return {
       addToCart: (item) => {
        dispatch({type:'ADD',payload:item})
      },
      removeFromCart: (item) =>{
        dispatch({type:'REMOVE',payload:item})
      }
    }
 }


 export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)
