import React, { Component } from 'react';
import './App.css';

class Core extends Component {
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
    this.props.handleCore(id);
    //setstate of selected item, possibly at item like data-id to grab array[i] info
    //call function in app.js
  }

  render() {
    var mappedCore = this.props.coreItems.map((core, index) => {
      return([
          // <div className="core" key={core.call}>{core}</div>
        <div className="products" key={index}>
          <p href="/perif" key={index} onClick={this.handleChange}><strong data-id={index}>{core.name}</strong></p>
          <p>Price: {core.price}</p> <p>Description: {core.description}</p>
        </div>
      ])
    })

    return (
      <div>
        <div className="container">
          <div className="img-div">
              <img src="/tower-diagram/MotherboardHighlight.png" />
          </div>
          <div className="core-items">
            <div className="page-header">
              <h1>Tower</h1>
            </div>
              <h3>Motherboard</h3>
              <h3>Processor</h3>
              <h3>RAM</h3>
              </div>
              <div className="main-desc">
              <h3 className="main-title">MotherBoard</h3>
              <p className="main-text">The motherboard houses the various components of your gaming PC. Like a flesh-and-blood mother, it takes the disparate pieces, sits them down in their proper places, and helps them behave well together.</p>
            </div>
            <div className="items">
              <h3 className="main-title">Products</h3>
            <ul>
              {mappedCore}
            </ul>
            </div>
          </div>
      </div>
    )
  }
}

export default Core;
