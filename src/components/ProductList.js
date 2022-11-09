import React from 'react'
import data from '../assets/products.json'

export const ProductList = (props) => {
  var columns = props.columns;


  const filteredData = data.filter((product) => 

      (!props.price.priceFrom || Number(product.price) >= Number(props.price.priceFrom) )
      &&
      (!props.price.priceTo || Number(product.price) <= Number(props.price.priceTo))
      
  )

  return (
    <div id="product-list">
      <header>
        <strong>Product List ({filteredData.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
          {
            Object.entries(columns).map(([k,v]) =>(
              v && <th key={k} id={k} className="">{k}</th>
            ))
          }
          </tr>
        </thead>
        <tbody>
        {
          
          filteredData.map((product, index) => (
            <tr key={index} >
              {  Object.entries(columns).map(([k,v],index) =>(
                v && <td key={`data_${index}_${k}`}>{product[k] ?? 'TBD'}</td>
              ))}
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}
