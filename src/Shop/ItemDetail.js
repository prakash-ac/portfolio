import React, { useState, useEffect } from 'react';
import './Shop.css';
import { Link } from 'react-router-dom';

const itemDetail = ({ match }) =>{

    useEffect( () => {
        fetchItem();
    }, []);

const [item, setItem] = useState({
    images: {}
});

const fetchItem = async () => {
    const response = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
                            .then(response => response.json());
    //console.log(response.data.item);
    const item = response.data.item;
    setItem(item);
};

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.icon} alt=""></img>
        </div>
    );
};

export default itemDetail;