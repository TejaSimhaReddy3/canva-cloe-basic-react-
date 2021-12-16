import './index.css'

const LowerCarousel = props => {
  const {cardDetails} = props
  const {imageUrl, dislayText} = cardDetails

  return (
    <li className="lowerCarouselList">
      <div className="lowerCarouselContainer">
        <img src={imageUrl} className="lImgs" alt="lowerCarousel" />
        <p className="lPara">{dislayText}</p>
      </div>
    </li>
  )
}

export default LowerCarousel
