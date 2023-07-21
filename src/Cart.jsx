import { useSelector } from "react-redux";
import BeerCards from "./HeaderComponents/BeerCards";
import ProductCards from "./ProductCards"

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)
  return (
    <><div>
      <h1>CART ITEMS {cartItems.length}</h1>
      <div className='flex'> {cartItems.map((item) =>
      (!Array.isArray(item) ?
        <ProductCards key={item.id} {...item} /> :
        < BeerCards key={item[0].id} {...item[0]} />
      ))}
      </div>
    </div></>)
}
export default Cart;