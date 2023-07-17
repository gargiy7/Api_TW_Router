import { useState, useEffect } from 'react'
import DrinkCards from './DrinkCards'
import Shimmer from '../Shimmer'

const Party = () => {
  const [cocktail, setCocktail] = useState([])
  useEffect(() => { fetchdataDrinks() }, [])

  const fetchdataDrinks = async () => {
    const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    const json = await data.json()
    console.log(json)
    setCocktail(json?.drinks);
    console.log(cocktail);
  }

  return cocktail.length === 0 ? (<Shimmer />) : (
    <> <div className='bg-yellow-900'>
      <ul className="grid grid-cols-4 gap-4">
        {cocktail.map((userISUSER) => {
          return (
            <DrinkCards key={userISUSER.idDrink} {...userISUSER} />
          )
        })}
      </ul>
    </div>
    </>
  )
}

export default Party;