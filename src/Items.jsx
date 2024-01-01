import React from 'react'
import './App.css'
import ListItem from './ListItem'
const Items = ( {items} ) => {
  return (
      <div>
          <ul>
              {items.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
       </ul>
    </div>
  )
}

export default Items;



