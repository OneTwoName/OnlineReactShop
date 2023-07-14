import React from 'react'
import Item from './Item'

const Items = (props) => {
    return (
        <main>
            {props.items.map(el => (
                <Item onAddItem = {props.onAddItem} key={el.id} item = {el}  onShowItem = {props.onShowItem}/>
            ))}
        </main>
    )
    
}

export default Items