import React, {useState} from 'react'


const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const onTitleClick = (e, index) => {
    if (e.target.className.includes('active')){
      e.target.classList.remove('active')
      e.target.nextSibling.classList.remove('active')
    }
    setActiveIndex(index)
  }

  const list = items.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <div className={`title ${activeIndex === index ? 'active' : ''}`} onClick={(e) => onTitleClick(e, index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${activeIndex === index ? 'active' : ''}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    )
  })
  return (
    <div className='ui styled accordion'>
      {list}
    </div>
  )
}

export default Accordion
