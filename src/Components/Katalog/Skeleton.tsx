import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
  <ContentLoader 
    speed={2}
    width={339}
    height={334}
    viewBox="0 0 320 315"
    backgroundColor="#2e2e2e"
    foregroundColor="#000000"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="315" height="245" /> 
    <rect x="0" y="255" rx="5" ry="5" width="315" height="25" /> 
    <rect x="0" y="290" rx="5" ry="5" width="100" height="25" />
  </ContentLoader>
)

export default Skeleton

