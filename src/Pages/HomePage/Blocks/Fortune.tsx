import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import FortuneItem from '../../../Components/Fortune/FortuneItem'
import FortuneSkeleton from '../../../Components/Fortune/FortuneSkeleton'

type Cases = {
  id: string,
  key: string,
  slug: string
  games: []
  title: string
  priceMain: number
  priceOld: number
  mainImageUrl: string
  absolutImageUrl: string
  absolutImageClass: string
  titleClass: string
}

const Fortune: React.FC = () => {
  const [cases, setCases] = useState<Cases[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    axios.get(`https://6297004814e756fe3b26c094.mockapi.io/Cases?`).then(res => {
        setCases(res.data)
        setIsLoading(false)
    })
  }, [])

  return (
    <section className="fortune" id={"fortune"}>
        <h3 className="title-block">Испытай удачу</h3>
        <div className="flex">
          {isLoading === false
            ? cases.map((obj) => <FortuneItem {...obj} key={obj.slug} />)
            : [...new Array(3)].map((_, index) => <FortuneSkeleton key={index}/>)
          }
        </div>
      </section>
  )
}

export default Fortune
