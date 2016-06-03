import React from 'react'
import ImagesData from '../data/ImagesData'

export default React.createClass({
  getDefaultProps(){
    return {
      "images": ImagesData
    }
  },
  render() {
    return (
      <ul className="imagesList">
        { this.props.images.map((image, i)=> {
          return <li onClick={this.props.handleModalOpen} className="imagesList__item" key={i}>
            <h2>{image.title}</h2>
            <img src={image.src} alt={image.title}/>
          </li>
        }) }
      </ul>
    )
  }
});
