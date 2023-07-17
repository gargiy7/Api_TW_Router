import { useState, useEffect } from 'react'
import BeerCards from './BeerCards'
import Shimmer from '../Shimmer'
import { Link } from 'react-router-dom'

const Beer = () => {
  const [beer, setBeer] = useState([])
  useEffect(() => { fetchdataBeer() }, [])

  const fetchdataBeer = async () => {
    const data = await fetch('https://api.punkapi.com/v2/beers')
    const json = await data.json()
    console.log(json)
    setBeer(json);
    console.log(beer);
  }

  return beer.length === 0 ? (<Shimmer />) : (
    <> <div >
      <ul className="grid grid-cols-4 gap-4 ">
        {beer.map((userISUSER) => {
          return (
            <Link to ={ '/beer/' + userISUSER.id } key={userISUSER.id}> <BeerCards  {...userISUSER} /></Link>
              )
        })}
            </ul>
    </div>
    </>
  )
}

export default Beer;