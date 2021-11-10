import React, { useState } from 'react';

// // function validateEmail(email) {
// //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// //     return re.test(String(email).toLowerCase());
// // }

export default function Form({handleSubmit}){

    const [item, setItem] = useState({name:"",price:"",description:""});

    const handleChange = (event) => {
        const label = event.target.name;
        const value = event.target.value;
        setItem({...item, [label]:value});
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (item.name && item.price && item.description) {
            const newItem = {...item};
            handleSubmit(newItem);
            setItem({name:"",price:"",description:""});
        }
    }

    return (
        <div>
            <div className="form-signin">
            <h2 class="form-signin-heading"></h2>
                <input type="text" name="name" placeholder="product name" value={item.name} onChange={handleChange}/>
                <input type="text" name="price" placeholder="price" value={item.price} onChange={handleChange}/>
                {/* <p>Please enter a number</p> */}
                <input type="text" name="description" placeholder="description" value={item.description} onChange={handleChange}/>
                <button type="submit" onClick={handleClick}>Submit</button>
            </div>
        </div>
    )

}