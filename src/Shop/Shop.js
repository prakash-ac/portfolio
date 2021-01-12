import React, {useState, useEffect } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';
const shop = (props) =>{

    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await response.json().then(data => data.data);
        //console.log(items);
        setItems(items);
    };



    return (
        <div>
          {items.map(item => (
              <h1 key={item.itemId}>
                  <Link className="H1" to={`/shop/${item.itemId}`}>{item.item.name}</Link>
              </h1>
          ))}
        </div>
    );
};

export default shop;