import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import axios from 'axios';

const App = () => {
    const [orders, setOrders] = useState([])
    const [items, setItems] = useState([])
    const [itemsCopy, setItemsCopy] = useState([])
    const [showFullItem, setShowFullItem] = useState(false)
    const [fullItem, setFullItem] = useState({})

    useEffect(() => {
        async function fetchData() {
            const responce = await axios.get('http://localhost:4444/products')

            const data = responce.data

            setItems(data)
            setItemsCopy([...data])
        }

        fetchData()
        
    }, [])

    const addItem = (item) =>
    {
        let isInArray = false
        orders.forEach(el => {
            if(el.id === item.id) isInArray = true
        })
        if(!isInArray) {
            const updatedItems = items.map((i) => {
                if (i.id === item.id) {
                    return { ...i, clas: 'add-to-cart-active' };
                }
                return i;
            });

            setItems(updatedItems)
            
            
            setItemsCopy(itemsCopy.map((elCopy) => {
                const itemsFind = updatedItems.find(item => item.id === elCopy.id)
                if(itemsFind){
                    return itemsFind
                }
                return elCopy
            }));

            setOrders([...orders, item])

        }
    }

    const deleteOrder = (item) => {
        const updatedItems = items.map((i) => {
            if (i.id === item.id) {
                return { ...i, clas: '' };
            }
            return i;
        });

        setItems(updatedItems);
        setItemsCopy(itemsCopy.map((elCopy) => {
            const itemsFind = updatedItems.find(item => item.id === elCopy.id)
            if(itemsFind){
                return itemsFind
            }
            return elCopy
        }));

        setOrders(orders.filter((el) => el.id !== item.id))
    }
        
    const filterItem = (category) => {
        if(category === 'all') setItemsCopy(items) 
        else {
            const categoryItems = []
            items.forEach((i) => {
                if (i.category === category) {
                    categoryItems.push(i)
                }
            });
            setItemsCopy(categoryItems)
        }
    }

    const onShowItem = (item) => {
        setFullItem(item)
        setShowFullItem(!showFullItem)
    }

    return (
        <div className="wrapper">
            <Header onDelete = {deleteOrder} orders = {orders}/>
            <Categories chooseCategory = {filterItem}/>
            <Items onShowItem={onShowItem} onAddItem = {addItem} items = {itemsCopy}/>

            {showFullItem && <ShowFullItem onShowItem={onShowItem} onAddItem = {addItem} item = {fullItem} />}
            <Footer/>
        </div> 
    )
}

export default App;
