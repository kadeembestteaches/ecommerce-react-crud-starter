import React from 'react'

const AddProductForm = () => 
{

    return (
        <section id="register-section">
        
        <h1>Add Product</h1>

        <form>

            <div className="form-control">
                <label htmlFor="title">Item Title</label>
                <input type="text" id="title" />
            </div>

            <div className="form-control">
                <label htmlFor="price">Unit Price</label>
                <input type="text" id="price"  />
            </div>

            <div className="form-control">
                <label htmlFor="costPrice">Cost Price</label>
                <input type="text" id="costPrice"  />
            </div>

            <div className="form-control">
                <label htmlFor="qty">Qty</label>
                <input type="text" id="qty"  />
            </div>

            <div className="form-control">
                <label htmlFor="details">Details</label>
                <textarea id="details"></textarea>
            </div>

            <div className="form-control">
                <label htmlFor="details">Select Best Seller</label>

                 Yes <input type="radio" name="bestseller" value="true" />
                 No <input type="radio" name="bestseller" value="false"  />
            </div>

            <div className="form-control">
                <label htmlFor="img">Image</label>
                <input type="text" id="img"   />
            </div>

            <div className="form-control">
                <button className="btn" type="submit">Add Product</button>
            </div>

        </form>

     </section>
    )
}

export default AddProductForm