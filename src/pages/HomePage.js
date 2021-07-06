import React,{useEffect,useContext} from 'react';
import Header from "../components/Header";
import ProductContainer from "../components/ProductContainer";
import ecommerceContext from '../context/EcommerceContext';
const HomePage = () => {


    const {setProducts} = useContext(ecommerceContext);

    useEffect(()=>{

        //Async operation //POST,PUT OR DELETE
        fetch("http://localhost:5000/products")
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
              setProducts(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
  
  
    },[])

    return (
        <div id="container">
            <Header/>
            <main>
                <ProductContainer />
            </main>
        </div>
    )
}

export default HomePage
