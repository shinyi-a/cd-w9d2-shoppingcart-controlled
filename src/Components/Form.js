import React, { useRef} from 'react';

export default function Form(prop){
    const inputProduct = useRef();
    const inputPrice = useRef();
    const inputDescription = useRef();

    const handleSubmit = () => {
        prop.onSubmit(
            inputProduct.current.value,
            inputPrice.current.value,
            inputDescription.current.value
        )
    }

    return (
        <div>
            <div className="form-signin">
            <h2 class="form-signin-heading"></h2>
                <input type="text" ref={inputProduct} name="name" placeholder="product name"/>
                <input type="text" ref={inputPrice} name="price" placeholder="price"/>
                <input type="text" ref={inputDescription} name="description" placeholder="description"/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )

}