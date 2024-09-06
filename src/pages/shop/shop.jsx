import React from 'react'
import { PRODUCTS } from '../../product'
import { Product } from './product'
import './shop.css';
export default function shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>XandroTech Shop</h1>
        </div>
        <div className='products'>
              {PRODUCTS.map((product)=>(
                <Product data={product} key={product.id}/>
            ))}
        </div>
    </div>
  )
}
