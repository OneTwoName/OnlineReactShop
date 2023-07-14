import React from 'react'
import { FaWindowClose } from "react-icons/fa";

const Order = (props) => {
    return (
        <div className='item'>
        <div className='item_img_block'>
            <img className='item_img' src={'./img/'+props.item.img} alt="" />
        </div>
        <h2>{props.item.title}</h2>
        <b>{props.item.price}$</b>
        <FaWindowClose onClick={() => {props.onDelete(props.item)}} className='close-logo'/>
        </div>
    )
}

export default Order