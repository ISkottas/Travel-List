import './Item.css';

function Item({item, handleRemoveItem, handleCheckbox}){


    return (
        <div className='item'>
            <input type='checkbox' className='checkbox'  onChange={() => handleCheckbox(item.id)} />
            <p className='item-obj' style={item.packed ? {textDecoration: 'line-through'} : {} }>
                {item.quantity} {item.description}
            </p>
            <button className='close-btn' onClick={() => handleRemoveItem(item.id)}>x</button>
        </div>
    )
}

export default Item