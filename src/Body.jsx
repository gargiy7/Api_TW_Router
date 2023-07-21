import { useState, useEffect } from 'react'
import ProductCards from './ProductCards'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

// to filter among the user c
function filterData(searchText, alluser) {
  const filterData = alluser.filter((user) =>
    user?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [alluser, setAllUser] = useState([])
  const [filteredUser, setfilteredUser] = useState([]);
  const [searchInput, setsearchInput] = useState("");

  useEffect(() => { fetchdata() }, [])

  const fetchdata = async () => {
    const data = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    const json = await data.json()
    console.log(json)
    setAllUser(json);
    setfilteredUser(json);
    console.log(alluser);
  }

  return alluser.length === 0 ? (<Shimmer />) : (
    <>
      {/* search boxfunctionality */}
      <div className="flex justify-center mb-0.5">
        <input
          type="text"
          className="p-1 w-72 border border-sky-900 rounded-l-full"
          placeholder="Search to kar..."
          value={searchInput}
          onChange={(e) => { setsearchInput(e.target.value) }}>
        </input>
        <button
          className=" w-12 border border-sky-900 rounded-r-full"
          onClick={() => { setfilteredUser(filterData(searchInput, alluser)); }}>
          🔍
        </button>
      </div>
      <div >
        <ul className="grid grid-cols-4 gap-4 bg-cyan-800">
          {filteredUser.map((userISUSER) => {
            return (<Link to={'/' + userISUSER.id} key={userISUSER.id}>
              <ProductCards key={userISUSER.id} {...userISUSER} /></Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Body;