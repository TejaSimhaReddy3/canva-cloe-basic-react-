import './index.css'

const GalleryList = props => {
  const {imageDetails} = props
  const {templateUrl} = imageDetails

  return (
    <li className="galleryListItems">
      <img src={templateUrl} className="galleryImages" alt="gallery" />
    </li>
  )
}

export default GalleryList
