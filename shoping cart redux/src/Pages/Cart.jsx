import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../Components/Store/CartSlice"
function Cart() {

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.cart)
    return (
        <>

            <div className="cards_parent">

                {
                    cartItems.map((single) => {

                        return <div key={single.id} className="card">
                            <img src={single.image} width={120} alt="" />
                            <h4>{single.category}</h4>
                            <h4>: {single.description} </h4>
                            <h3>Price : {single.price} </h3>

                            <button onClick={()=>dispatch(removeItem({id:single.id}))} >Remove</button>
                        </div>

                    })
                }
            </div>


        </>
    )
}

export default Cart
