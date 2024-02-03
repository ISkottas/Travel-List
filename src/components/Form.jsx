import { useState } from 'react';
import './Form.css';

function Form({handleAddItems}) {
    const [description,setDescription] = useState("");
    const [quantity,setQuantity] = useState(1);

    const changeDescription = (e) => {
        setDescription(e.target.value);
    }

    const changeQuantity = (e) => {
        setQuantity(Number(e.target.value));
    }

    function handleSubmit(){

        if (!description) return;

        const newItem = {description, quantity, packed: false, id: Date.now()};
        //console.log(newItem);

        handleAddItems(newItem);      

        setDescription('');
        setQuantity(1);
    }

    return (
        <div className="form">
            <p className='question'>What do you need for your trip?</p>
           <input 
            className='innumber' 
            type="number" 
            min="1" 
            max="20"
            value={quantity} 
            onChange={changeQuantity}
           />
            <input 
                className='intext' 
                type="text" 
                placeholder='Item...' 
                value={description} 
                onChange={changeDescription}
            />
            <button className='insert-btn' onClick={handleSubmit}>ADD</button>
        </div>
    )
}

export default Form