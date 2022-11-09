import React from 'react'

export const ToggleColumns = ({columns, onCheckboxClick}) => {
 
  return (
    <div className="toggle-columns">
      { 
        Object.keys(columns).map((column, index) => {
          return ( 
          <div key={index}>
            <label htmlFor={column}>
              {column}
            </label>
            <input
              defaultChecked={columns?.[column] ? true : false}
              id={column}
              name={column}
              value="hide"
              onChange={(e) => {onCheckboxClick(column, e.target.checked)}}
              type="checkbox" />
          </div>)
        })
      }
    </div>
  );
}
