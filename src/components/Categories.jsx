import React, { useState } from 'react'

const Categories = (props) => {
    const [categories, setCategories] = useState(
        [
            {
                key: 'all',
                name: 'Все'
            },
            {
                key: 'closet',
                name: 'Шкафы'
            },
            {
                key: 'bed',
                name: 'Кровати'
            },
            {
                key: 'pedestal',
                name: 'Тумбы'
            },
            {
                key: 'bench',
                name: 'Банкетки'
            },
            {
                key: 'dresser',
                name: 'Комоды'
            },
        ]
    )

    return (
        <div className="categories">
            {categories.map(el => (
                <div onClick={() => props.chooseCategory(el.key)} key={el.key}>{el.name}</div>
            ))}
        </div>
    )
}


export default Categories