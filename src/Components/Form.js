import React, { useState } from 'react';

export default function Form({handleSubmit}){

    const [item, setItem] = useState({name:"",price:"",description:""});
    const [checkprice, setCheckPrice] = useState(true);

    const handleChange = (event) => {
        const label = event.target.name;
        const value = event.target.value;
        setItem({...item, [label]:value});
    }

    function checkPrice() {
        const re = /^\d+\.\d{2}$/;
        const inputPrice = re.test(item.price);
        setCheckPrice(inputPrice);
      }

    const handleClick = (event) => {
        event.preventDefault();
        if (checkprice) {
            if (item.name && item.price && item.description) {
                const newItem = {...item};
                handleSubmit(newItem);
                setItem({name:"",price:"",description:""});
            }
        }
    }

    return (
        <div>
            <div className="form-signin">
            <h2 className="form-signin-heading"></h2>
                <input type="text" name="name" placeholder="product name" value={item.name} onChange={handleChange}/>
                <input type="text" name="price" placeholder="price" value={item.price} onChange={handleChange} onBlur={checkPrice}/>
                <input type="text" name="description" placeholder="description" value={item.description} onChange={handleChange}/>
                <button type="submit" onClick={handleClick}>Submit</button>
                {checkprice ? <p></p> : <p><span id="warning">Please enter price in number and 2 decimal place</span></p>}
            </div>
        </div>
    )

}