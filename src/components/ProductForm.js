import './ProductForm.css'
import { useState } from 'react'
function ProductForm (props) {
    // const [fullProductInput,setfullProductInput] = useState({
    //     title:'',date:'',
    // });
    // function titleChangeHandler (event,prevState) {
    //     let obj = {...prevState,title:event.target.value};
    //     console.log(obj);
    //     return obj; 
    // }
    // function dateChangeHandler (event) {
    //     // setTitle(event.target.value)
    // }
    const [newTitle,setTitle] = useState('')
    const [newDate,setDate] = useState('')
    function titleChangeHandler (event) {
        setTitle(event.target.value)
    }
    function dateChangeHandler (event) {
        setDate(event.target.value)
    }
    function submitHandler (event) {
        event.preventDefault();
        const productData = {
            title:newTitle,
            date:newDate
        }
        //console.log(productData)
        props.onSaveProduct(productData)
        setTitle('');
        setDate('');
    }
    return (
        <form onSubmit={submitHandler} className='product-form'>
            <div className='new-product-title'>
                <div>
                <label>Title ⇨ </label>
                <input required type="text" value={newTitle} onChange={titleChangeHandler}></input>
                </div>
                <div>
                <label>Date ⇨ </label>
                <input required value={newDate} type="date" min="2025-01-01" max="2025-02-22" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-product-button'><button type="submit">Add Product</button></div>
        </form>
    )
}
export default ProductForm;