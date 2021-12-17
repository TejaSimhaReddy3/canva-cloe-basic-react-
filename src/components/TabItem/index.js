import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, setActiveTabId} = props
  const {tabId, displayText, className} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const focusedImage = isActive
    ? 'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639709076/pngaaa.com-13209_yapyby.png'
    : 'https://res.cloudinary.com/tejasimhareddy3/image/upload/v1639597043/output-onlinepngtools_vji6c0.png'
  return (
    <li className="listsContainers">
      <div>
        <div className="tabListContainer">
          <button
            className={`${className} tabButton`}
            onClick={onClickTab}
            type="button"
          >
            {' '}
          </button>
        </div>
        <p className="listPara">{displayText}</p>
      </div>
      <div className="forImage">
        <img src={focusedImage} alt="focusedImage" className="smallTriangle" />
      </div>
    </li>
  )
}

export default TabItem
