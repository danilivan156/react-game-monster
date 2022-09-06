import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer"

const MainLayout = () => {
  return (
    <div className="App">
    	<Header />
        <main className="page-container">
            <Outlet />
        </main>
		  <Footer />
    </div>
  )
}

export default MainLayout
