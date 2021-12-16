import './index.css'

const ElementItem = props => {
  const {elementDetails} = props
  const {elementText, lengthText, webLink, imageUrl} = elementDetails

  return (
    <div className="elementLists">
      <a href={webLink} className="webSiteContainerClass">
        <div className="elementsTabContainer">
          <img src={imageUrl} className="elementImgs" alt="element-images" />
          <h1 className="elementHead">{elementText}</h1>
          <div className="elementResolution">{lengthText}</div>
        </div>
      </a>
    </div>
  )
}

export default ElementItem
