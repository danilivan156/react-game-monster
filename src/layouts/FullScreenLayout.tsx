import Header from "../Components/Header/Header"
import { Outlet } from "react-router-dom"

const FullScreenLayout = () => {
  return (
    <div className="App">
    	<Header />
        <main className="page-container">
            <Outlet />
        </main>
    </div>
  )
}

export default FullScreenLayout
