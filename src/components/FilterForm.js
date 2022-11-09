import React from 'react'

export const FilterForm = ({priceFrom, priceTo, onPriceInputChange}) => {

  return (
    <div className='filter-form'>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        onChange={(e) => {onPriceInputChange('priceFrom' , e.target.value)}}
        placeholder="Price from..." />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        onChange={(e) => {onPriceInputChange('priceTo' , e.target.value)}}
        placeholder="Price to..." />
    </div>
  )
}
