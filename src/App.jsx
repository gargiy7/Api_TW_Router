import { Outlet } from 'react-router-dom'
import './App.css'
import Body from './Body'
import Header from './Header'
import { Provider } from 'react-redux'
import store from './utils/Store'

export default function App() {
  return (<>
    <Provider store={store}>
      <main>
        <Header />
        <Outlet />
      </main>
    </Provider>
  </>
  )
}
