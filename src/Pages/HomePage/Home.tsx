import Bonuses from "./Blocks/Bonuses"
import Fortune from "./Blocks/Fortune"
import Katalog from "../../Components/Katalog"
import NewsVariantOne from "../../Components/NewsVariants/NewsVariantOne"
import HomeSlider from "./Blocks/HomeSlider"
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="container">
      <HomeSlider />
      <Fortune />
      <Katalog countGames="8"/>
      <NewsVariantOne />
      <Bonuses />
    </div>
  )
}

export default Home
