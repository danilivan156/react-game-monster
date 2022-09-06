import { useEffect, useState } from 'react'
import TitleRow from '../Common/TitlteRow'
import KatalogItem from './KatalogItem'
import Skeleton from './Skeleton'
import React from 'react'

import axios from 'axios'

type KatalogProps = {
  countGames: string,
  url?: string
}

type Games = {
  imageUrl: string,
  title: string,
  priceMain: number, 
  priceOld: number, 
  category: [], 
  info: [], 
  id: string
}

const Katalog: React.FC<KatalogProps> = ({ countGames }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [games, setGames] = useState<Games[]>([])
  useEffect(() => {
    axios.get(`https://6297004814e756fe3b26c094.mockapi.io/Games?page=1&limit=${countGames}`).then(res => {
      setGames(res.data)
        setIsLoading(false)
    })
  }, [countGames])
  
  return (
    <section className="index-katalog">
        <TitleRow mainTitle="Каталог игр" buttonTitle="Все игры" buttonUrl="/catalog"/>
        <div className="flex">
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index}/>) 
            : games.map(obj => <KatalogItem key={obj.id} {...obj}/>)
          }
        </div>
    </section>
  )
}

export default Katalog
