import './App.css';
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function Shop() {

    useEffect(() => {   // when it mounts
        fetchItems();
    }, [])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const fetchedData = await fetch("https://fortnite-api.theapinetwork.com/upcoming/get")
        const jsonData = await fetchedData.json()
        setItems(jsonData.data)
    }
    return (
    <div>
      <h1>Shop</h1>
      {items.map(item => (
        <h2 key = {item.itemId}>
            <Link to={`/shop/${item.itemId}`}>
            {item.item.name}
            </Link>
            </h2>
      ))}
    </div>
  );
}

export default Shop;
