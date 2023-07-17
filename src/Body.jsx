import { useState, useEffect } from 'react'
import ProductCards from './ProductCards'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {
  const [user, setUser] = useState([])
  useEffect(() => { fetchdata() }, [])

  const fetchdata = async () => {
    const data = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    const json = await data.json()
    console.log(json)
    setUser(json);
    console.log(user);
  }

  return user.length === 0 ? (<Shimmer />) : (
    <> <div >
      <ul className="grid grid-cols-4 gap-4">
        {user.map((userISUSER) => {
          return (<Link to ={ '/' + userISUSER.id } key={userISUSER.id}>
            <ProductCards key={userISUSER.id} {...userISUSER} /></Link>
          )
        })}
      </ul>
    </div>
    </>
  )
}

export default Body;