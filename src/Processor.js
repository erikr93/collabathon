import React, { Component } from 'react';

class Processor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: [],
      selectedItem: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log("handleChange() in Core.js: ", e.target.getAttribute('data-id'));
    var id = e.target.getAttribute('data-id');
    this.props.handleProcessor(id);
    //setstate of selected item, possibly at item like data-id to grab array[i] info
    //call function in app.js
  }

  render() {
    var mappedprocessor = this.props.processorItems.map((processor, index) => {
      return([
          // <div className="core" key={core.call}>{core}</div>
          <div className="products" key={index}>
            <p href="/perif" key={index} onClick={this.handleChange}><strong data-id={index}>{processor.name}</strong></p>
            <p>Price: {processor.price}</p> <p>Description: {processor.description}</p>
          </div>
      ])
    })

    return (
      <div>
        <div className="container">

        <div className="img-div">
          <img alt="asdfa" src="http://www.xoticpc.com/media/wysiwyg/landingpages/store_fronts/xpc-desktops/gx12-destroyer-a.png" />
          </div>
          <div className="component">
            <h1>Tower</h1>
            <h3>Motherboard</h3>
            <h3>CPU</h3>
            <h3 className="highlight">Processor</h3>
            <h3>RAM</h3>
          </div>
          <div className="mainDesc">
            <h3>MotherBoard</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <ul>
            {mappedprocessor}
          </ul>
        </div>
      </div>
    )
  }
  }

export default Processor;
