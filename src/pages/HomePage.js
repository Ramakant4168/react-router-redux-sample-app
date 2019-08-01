
import React, { Component } from 'react'
import ProductListing from '../features/product-listing/index'
import data from '../data/products.json'

class HomePage extends Component {
  render() {
    return (
      <div>
         <ProductListing products={data.products}/>
      </div>
    )
  }
}

export default HomePage
