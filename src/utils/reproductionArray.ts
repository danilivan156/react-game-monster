import { GameArrayType } from "../Pages/CasePage";

const reproductionArray = (array: GameArrayType[]  = []) => {
  function GameArray(this: GameArrayType, text: string,priceGame: number,image: string,chance: string,id: string) {
    this.text = text
    this.priceGame = priceGame
    this.image = image
    this.chance = chance
    this.id = id
  }
  let arrGamesRandom: GameArrayType[] = [];
  array.forEach((element) => {
    let countCopiesGame = parseFloat(element.chance);
    for (let index = 0; index < countCopiesGame; index++) {
      let myGame = new (GameArray as any)(element.text, element.priceGame, element.image, element.chance, element.id)
			arrGamesRandom.push(myGame);
    }
  })

  for (let i = arrGamesRandom.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrGamesRandom[i], arrGamesRandom[j]] = [arrGamesRandom[j], arrGamesRandom[i]];
  }

  return arrGamesRandom
}
  
export default reproductionArray
  