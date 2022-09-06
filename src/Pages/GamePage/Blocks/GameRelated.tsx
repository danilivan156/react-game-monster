import React from 'react'
import TitleRow from '../../../Components/Common/TitlteRow'
import axios from 'axios'
import KatalogItem from '../../../Components/Katalog/KatalogItem'
import Skeleton from '../../../Components/Katalog/Skeleton'

type GameRelatedProps = {categoryGameId: string}

type GameData = {
    id: string,
    title: string,
    priceMain: number,
    priceOld: number,
    imageUrl: string,
    info: [],
    category: [],
    date: string,
    developer: string,
    description: string,
    categoryId: string
  }

const GameRelated: React.FC<GameRelatedProps> = ({categoryGameId}) => {
    const [gameData, setGameData] = React.useState<GameData[]>([])
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        axios.get(`https://6297004814e756fe3b26c094.mockapi.io/Games?page=1&limit=4&categoryId=${categoryGameId}`).then(res => {
            setGameData(res.data)
            setIsLoading(false)
        })
    }, [categoryGameId])

    const gamesArray = gameData.map((obj: GameData) => 
        <KatalogItem 
            key={obj.id} 
            priceMain={obj.priceMain}
            priceOld={obj.priceOld}
            id={obj.id}
            title={obj.title} 
            info={obj.info} 
            category={obj.category}
            imageUrl={`../../${obj.imageUrl}`}
        />)
    const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index}/>)
    
    return (
        <section className="index-katalog">
            <TitleRow mainTitle="Похожие игры" buttonTitle="Все игры" buttonUrl="/catalog"/>
            <div className="flex">
                {isLoading ? skeleton : gamesArray}
            </div>
        </section>
    )
}

export default GameRelated
