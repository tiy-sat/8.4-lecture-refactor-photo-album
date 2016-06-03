import React from 'react'
import ImagesList from './ImagesList'
import Modal from './Modal'

export default React.createClass({
  getInitialState(){
    return {
      modalOpen: false
    }
  },
  handleModalOpen(e){
    this.setState({
      modalOpen: true
    });
  },
  render() {
    return (
      <div>
        <ImagesList handleModalOpen={this.handleModalOpen}/>
        <Modal isModalOpen={this.state.modalOpen}/>
      </div>
    )
  }
});
