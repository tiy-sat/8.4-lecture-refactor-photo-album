import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className={`modal ${this.props.isModalOpen ? "" : "modal--hide"}`}>Modal</div>
    )
  }
});
