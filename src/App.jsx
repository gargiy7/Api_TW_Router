import { Outlet } from 'react-router-dom'
import './App.css'
import Body from './Body'
import Header from './Header'


export default function App() {
  return (<>
    <main>
      <Header />
      <Outlet />
    </main></>
  )
}
