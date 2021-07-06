import React,{useContext} from 'react'
import ecommerceContext from '../context/EcommerceContext';
import { Link } from 'react-router-dom';
const Product = ({id,title,qty,unitPrice}) => 
{

    const {products} = useContext(ecommerceContext)

    return (
      
        <div className="grid grid-col-4">
            <span>
                <Link to="/products/1">
                    {title}
                </Link>
            </span>
            <div>
                <span className="qty">{qty}</span>
    
            </div>
            <span>${unitPrice.toFixed(2)}</span>
            <span className="operation-btn-holder">
                <button type="button" className="btn dButton" >Delete</button>
                <button type="button" className="btn dButton">Edit</button>
            </span>

      </div>

    )
}

export default Product
