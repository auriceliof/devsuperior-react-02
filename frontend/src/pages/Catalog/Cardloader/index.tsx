import ContentLoader from "react-content-loader"

const Cardloader     = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#ecebeb"
    foregroundColor="#d6d2d2"
  >
    <rect x="-1" y="-28" rx="2" ry="2" width="300" height="300" />
  </ContentLoader>
)

export default Cardloader;

