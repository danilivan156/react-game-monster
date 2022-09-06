import React from 'react'
import { Link } from "react-router-dom"

type TitleRowProps = {
  mainTitle: string,
  buttonUrl: string,
  buttonTitle: string
}

const index: React.FC<TitleRowProps> = ({mainTitle,buttonUrl,buttonTitle}) => {
  return (
    <div className="title-row">
        <h3 className="title-block">{mainTitle}</h3>
        <Link to={buttonUrl}>{buttonTitle}</Link>
    </div>
  )
}

export default index
