import { useEffect, useState } from "react"
import "./Product.css"



import {useDispatch} from 'react-redux'
import { addItem } from "../Store/CartSlice"
function Product() {
    
const dispatch=useDispatch()

    const [products, setProduct] = useState([])


    useEffect(() => {
        const FetchData = async function () {

            let productData = await fetch('https://fakestoreapi.com/products');
            let response = await productData.json();
            setProduct(response)


        }
        FetchData();

    
    }, [])
    return (

        <>
            <div className="cards_parent">

                {products.map((product) => {

                  return  <div key={product.id} className="card">
                        <img src={product.image} width={90} alt="" />
                        <h4>{product.category}</h4>
                        <h4>: {product.description}</h4>
                        <h3>Price : {product.price}</h3>

                        <button onClick={()=>dispatch(addItem(product))}>Add To art</button>



                    </div>
                })
                }


            </div>
        </>
    )
}

export default Product
