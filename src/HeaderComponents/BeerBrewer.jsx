import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addItems, clearCart, removeItems } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const BeerBrewer = () => {
  const { id } = useParams();
  const [beerdetail, setBeerdetail] = useState([])
  useEffect(() => { fetchdataBeerdetail() }, [])

  const fetchdataBeerdetail = async () => {
    const data = await fetch('https://api.punkapi.com/v2/beers/' + id);
    const json = await data.json()
    console.log(json)
    setBeerdetail(json);
    console.log(beerdetail);
  }
  // functions of store & cart
  const dispatch = useDispatch();

  const handleAddItem = ( beerdetail) => {
    dispatch(addItems(beerdetail))
  }
  const handleRemoveItem = () => {
    dispatch(removeItems())
  }

  const cartItems = useSelector(store => store.cart.items)
  // to design the beerBrewery Page
  const BeerDetailfuntion = ({
    name,
    image_url,
    tagline,
    description,
    // food_pairing : [a,b,c],
    food_pairing,
    // ingredients : {malt :[d,e,f] , hops : [g,h,i,j,k] }
    ingredients: { malt, hops }
  }) => {
    return (<>
      <div className="p-4 m-4 grid grid-cols-4 gap-4 flex justify-center">
        <div className="col-start-1 col-end-2 shadow-inner ring-offset-2 ring-2" >
          <h3 className="flex justify-center font-mono font-semibold text-xl" >{name}</h3>
          <div className='flex justify-center w-full bg-cyan-400'>
            <button onClick={() => handleAddItem(beerdetail)}>Add to Cart</button>
          </div>
          <div className='flex justify-center'>
            <img className='h-96' src={image_url} />
          </div>
          <p className="flex justify-center">{tagline}</p>
        </div>
        <div className="col-start-2 col-end-5 divide-y-4 leading-relaxed divide-blue-200">
          <div>Description --- {description}</div>
          <span >This can be best enjoyed with ----</span>
          {/* <ul >
            <li>😋😋😋{a}</li>
            <li>😋😋😋{b}</li>
            <li>😋😋😋{c}</li>
          </ul> */}
          <ul >
            {food_pairing.map((food) => {
              return (
                <li>😋😋{food}</li>
              )
            })}
          </ul>
          <div className='font-serif underline underline-offset-4'>👨‍🍳THE MUCH AWAITED RECIPE IS HERE.... ingredients--->>malt
            {/* <div>{d.name} should be added in the amount of {d.amount.value}                   {d.amount.unit}</div>
            <div>{e.name} should be added in the amount of {e.amount.value}                   {e.amount.unit}</div>
            <div>{f.name} should be added in the amount of {f.amount.value}                   {f.amount.unit}</div> */}
            <ul >
              {malt.map((f) => {
                return (
                  <li>{f?.name} should be added in the amount of {f?.amount?.value}  {f?.amount?.unit}</li>
                )
              })}
            </ul>
          </div>
          <div>Time to add some HOPS....
            {/* <div>add {g?.name} in the {g?.add} as it is {g?.attribute} in the amount of {g?.amount.value}  {g?.amount.unit}</div>
            <div>add {h?.name} in the {h?.add} as it is {h?.attribute} in the amount of {h?.amount.value}  {h?.amount.unit}</div>
            <div>add {i?.name} in the {i?.add} as it is {i?.attribute} in the amount of {i?.amount.value}  {i?.amount.unit}</div>
            <div>add {j?.name} in the {j?.add} as it is {j?.attribute} in the amount of {j?.amount.value}  {j?.amount.unit}</div>
            <div>add {k?.name} in the {k?.add} as it is {k?.attribute} in the amount of {k?.amount?.value}  {k?.amount?.unit}</div> */}
            <ul >
              {hops.map((j) => {
                return (
                  <li>add {j?.name} in the {j?.add} as it is {j?.attribute} in the amount of {j?.amount.value}  {j?.amount.unit}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>);
  };

  // returns the date fetched from API to the funtion
  return (<>
    <div>
      {/* <h1> beer id is this :  {id} </h1> */}
      <div >
        {beerdetail.map((userISUSER) => {
          return (
            <BeerDetailfuntion key={userISUSER.id} {...userISUSER} />
          )
        })}
      </div>
    </div>


  </>)
}
export default BeerBrewer;