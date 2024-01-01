import React from 'react'
import './App.css'
function ListItem({ item }) {
    return (
        <li>
            {JSON.stringify(item)}
        </li>
    )
}

export default ListItem