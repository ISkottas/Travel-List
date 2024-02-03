import './Stats.css';

function  Stats({items}){

    // find the items that are packed and put them in an array packedItems.
    const packedItems = items.filter(item => item.packed)

    return (
        <footer className='foot'>
            You have {items.length} items on your List and you have packed {packedItems.length}
        </footer>
    )
}

export default Stats