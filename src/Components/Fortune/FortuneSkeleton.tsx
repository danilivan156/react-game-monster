import React from "react"
import ContentLoader from "react-content-loader"

const FortuneSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={430}
    height={458}
    viewBox="0 0 430 458"
    backgroundColor="#2e2e2e"
    foregroundColor="#000000"
  >
    <rect x="0" y="0" rx="20" ry="20" width="430" height="414" /> 
    <rect x="0" y="426" rx="5" ry="5" width="430" height="20" />
  </ContentLoader>
)

export default FortuneSkeleton