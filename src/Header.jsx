import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between p-4 m-4 bg-fuchsia-100 shadow-xl ">
      <img className="h-24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvnxrdeay4qjAYh2zGHHHIYZEvnMcOIs3HNQ&usqp=CAU" />
      <ul className="flex p-4 m-4 space-x-8 tracking-wide font-bold cursor-pointer">
        <li><Link to = '/'>🏠 HOME</Link> </li>
        <li><Link to = '/party'>🍷Party with US🍷</Link></li>
        <li><Link to = '/beer'>Beer PUNK🍺</Link></li>
        <li><Link to = '/cart'>🛒CART</Link></li>
      </ul>
      <div className="flex justify-between m-4 space-x-2"><button className="text-gray-300 bg-slate-800 p-2 rounded-full">👨‍💻🖥️ Log In</button><button className="bg-green-800 text-gray-200 p-2 rounded-full">👨🖥️ Sign Up</button></div>
    </div>
  )
}
export default Header;