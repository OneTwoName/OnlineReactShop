import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Order from './Order';

const Header = (props) => {
    const [cartOpen, setCartOpen] = useState(false)
    
    return (
        <header>
            <div>
                <span className='logo'>House Staff</span>
                <ul className="nav">
                    <Link to={`/OnlineReactShop/about`}>О Нас</Link>
                    <Link to={`/OnlineReactShop/contacts`}>Контакты</Link>
                    <Link to={`/OnlineReactShop/profile`}>Профиль</Link>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? props.orders.map(el => (
                            <Order key={el.id} item = {el} onDelete = {props.onDelete} />
                        )) : 'Ваша корзина пуста :('}
                        <p className='shop-cart-sum'>Сумма: {Number.parseFloat(props.orders.reduce((total, order) => total + Number.parseFloat(order.price), 0).toFixed(2))}$</p>
                    </div>
                )}
            </div>
            <div className="presentation"></div>
        </header>
    )
}


export default Header