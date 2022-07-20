import './App.css';
import React, {useState, useEffect} from 'react';

function Item({ match }) {

  useEffect(() => {   // when it mounts
    fetchItem();
}, [])

const [item, setItem] = useState({
  images: {}
});

const fetchItem = async () => {
    const fetchedData = await fetch(`https://fortnite-api.theapinetwork.com/item/get?ids=${match.params.id}`)
    const jsonData = await fetchedData.json()
    setItem(jsonData.data)
}

   
    return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparent} alt=""/>
    </div>
  );
}

export default Item;
