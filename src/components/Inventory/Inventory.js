import React from 'react';
import './Inventory.modules.css';

const Inventory = () => {


    const handleAddProduct = () => {

        const product = {}

        fetch('https://lit-cove-35084.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }

    return (
        <div>



            <form className="ship-form">
                <input placeholder="Product Name" />

                <input type="text" placeholder="Product Price" />

                <input type="text" placeholder="Product quantity" />

                <input type="file" placeholder="Upload Product" />

                <input type="submit" />

            </form>





        </div>
    );
};

export default Inventory;