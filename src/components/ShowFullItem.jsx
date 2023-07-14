import React, { Component } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

const ShowFullItem = (props) => {
    return (
        <div className='full-item'>
            <div>
                <IoMdCloseCircle onClick={() => {props.onShowItem(props.item)}} className='close-full-item'/>
                <div className='item_img_block'>
                    <img className='item_img' src={'./img/'+props.item.img} alt="" />
                </div>
                <h2>{props.item.title}</h2>
                <p>{props.item.desc}</p>
                <b>{props.item.price}$</b>
                <div onClick={() => props.onAddItem(props.item)} className={`add-to-cart ${props.item.clas}`}>
                    {props.item.clas.length === 0 ? 'В корзину' : 'Добавлен'}
                </div> 
            </div>
        </div>
    )
}

export default ShowFullItem