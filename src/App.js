import './App.css';
import Top from './components/Top';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';

function App() {

  const [items,setItems] = useState([]);

  // immutable way to add a new element in the array items without changing the state
  function handleAddItems(item) {
    setItems((items) => [...items,item])
  }

  //immutable way to remove an element from an array
  function handleRemoveItem(itemId){
    // Create a new array excluding the item with the specified ID
    const updatedItems = items.filter((item) => item.id !== itemId);

    // Update the state with the new array
    setItems(updatedItems);
  }

  function handleCheckbox(itemId){
      const updatedItems = items.map((item) => 
        item.id === itemId ? {...item, packed: !item.packed} : item
      );
 
      setItems(updatedItems);
  }

  return (
    <div className="App">
      <Top />
      <Form handleAddItems={handleAddItems}/>
      <PackingList Items={items} handleRemoveItem={handleRemoveItem} handleCheckbox={handleCheckbox}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
