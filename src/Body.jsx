import { useState, useEffect } from 'react'
import ProductCards from './ProductCards'
import Shimmer from './Shimmer'


const Body = () => {
  const [user, setUser] = useState([])
  useEffect(() => { fetchdata() }, [])

  const fetchdata = async () => {
    const data = await fetch('https://api.imgflip.com/get_memes')
    const json = await data.json()
    console.log(json)
    setUser(json?.data?.memes);
    console.log(user);
  }

  return user.length === 0 ? (<Shimmer/>) : (
    <> <div >
      <ul className="grid grid-cols-4 gap-4">
        {user.map((userISUSER) => {
          return (
            <ProductCards key={userISUSER.id} {...userISUSER} />
          )
        })}
      </ul>
    </div>
    </>
  )
}

export default Body;