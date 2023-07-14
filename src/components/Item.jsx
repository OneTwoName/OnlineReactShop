import React from 'react'

const Item = (props) => {

    return (
        <div className='item'>
            <div onClick={() => {props.onShowItem(props.item)}} className='item_img_block'>
                <img className='item_img' src={'./img/'+props.item.img} alt="" />
            </div>
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}$</b>
            <div onClick={() => props.onAddItem(props.item)} className={`add-to-cart ${props.item.clas}`}>
                {props.item.clas.length === 0 ? 'В корзину' : 'Добавлен'}
            </div>
        </div>
    )
    
}

export default Item