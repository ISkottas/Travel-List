import './PackingList.css';
import Item from './Item';

function PackingList({Items, handleRemoveItem, handleCheckbox}) {
   
    return (
        <div className='MainBody'>
            <div className='list'>
                {Items.map((item) => (
                    <Item item={item} key={item.id} handleRemoveItem={handleRemoveItem} handleCheckbox={handleCheckbox}/>)
                )}
            </div> 
        </div>
    )
}

export default PackingList